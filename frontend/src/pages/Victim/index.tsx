import {
	EditOutlined,
	DeleteOutlined,
	BackwardOutlined,
} from '@ant-design/icons';
import { Descriptions, Space, Divider, Modal } from 'antd';
import Sbutton from '../../components/sexy-btn';
import { useState } from 'react';
import { Paths } from '../../paths';
import { useNavigate, Link, useParams, Navigate } from 'react-router-dom';

import Layout from '../../components/layout';
import { isErrWithMsg } from '../../utils/is-err-with-msg';
import ErrMsg from '../../components/errMsg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
import {
	useGetVictimQuery,
	useRemoveVictimMutation,
} from '../../app/services/victims';

export const Victim = () => {
	const navigate = useNavigate();
	const [error, setError] = useState('');
	const params = useParams<{ id: string }>();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { data, isLoading } = useGetVictimQuery(params.id || '');
	const [removeVictim] = useRemoveVictimMutation();
	const user = useSelector(selectUser);

	if (isLoading) {
		return <span>Loading</span>;
	}

	if (!data) {
		return <Navigate to='/' />;
	}

	const showModal = () => {
		setIsModalOpen(true);
	};

	const hideModal = () => {
		setIsModalOpen(false);
	};

	const handleDeleteUser = async () => {
		hideModal();

		try {
			await removeVictim(data.id).unwrap();

			navigate(`${Paths.status}/deleted`);
		} catch (err) {
			const maybeError = isErrWithMsg(err);

			if (maybeError) {
				setError(err.data.message);
			} else {
				setError('404');
			}
		}
	};

	return (
		<Layout>
			<Descriptions
				title='Victim info'
				bordered>
				<Descriptions.Item
					label='Name'
					span={3}>{`${data.firstName} ${data.lastName}`}</Descriptions.Item>
				<Descriptions.Item
					label='Age'
					span={3}>
					{data.age}
				</Descriptions.Item>
				<Descriptions.Item
					label='Reason'
					span={3}>
					{data.reason}
				</Descriptions.Item>
			</Descriptions>
			{user?.id === data.userId && (
				<>
					<Divider orientation='left'>actions</Divider>
					<Space>
						<Link to={`/`}>
							<Sbutton
								shape='round'
								type='default'
								icon={<BackwardOutlined />}>
								back to note
							</Sbutton>
						</Link>
						<Link to={`/Victim/edit/${data.id}`}>
							<Sbutton
								shape='round'
								type='default'
								icon={<EditOutlined />}>
								Edit
							</Sbutton>
						</Link>
						<Sbutton
							shape='round'
							danger
							onClick={showModal}
							icon={<DeleteOutlined />}>
							Delete
						</Sbutton>
					</Space>
				</>
			)}
			<ErrMsg message={error} />
			<Modal
				title='confirm remove'
				open={isModalOpen}
				onOk={handleDeleteUser}
				onCancel={hideModal}
				okText='delete'
				cancelText='dont do it'>
				Do u really want to delete victim?
			</Modal>
		</Layout>
	);
};
