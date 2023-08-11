import Layout from '../../components/layout';
import { useEffect } from 'react';
import Sbutton from '../../components/sexy-btn';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
import { useGetAllVictimsQuery } from '../../app/services/victims';
import { Paths } from '../../paths';
import { Table } from 'antd';
import { Suiside } from '@prisma/client';
import { ColumnsType } from 'antd/es/table';

const columns: ColumnsType<Suiside> = [
	{
		title: 'Name',
		dataIndex: 'firstName',
		key: 'firstName',
	},
	{
		title: 'Age',
		dataIndex: 'age',

		key: 'age',
	},
	{
		title: 'Reason',
		dataIndex: 'reason',
		key: 'reason',
	},
];

const Victims = () => {
	const btnColor = { backgroundColor: 'white', color: 'black' };
	const navigate = useNavigate();
	const user = useSelector(selectUser);
	const { data, isLoading } = useGetAllVictimsQuery();

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, [user, navigate]);

	const gotToAddUser = () => navigate(Paths.victimAdd);

	return (
		<Layout>
			<Sbutton
				type='primary'
				onClick={gotToAddUser}
				icon={<PlusCircleOutlined />}
				style={btnColor}>
				Add victim
			</Sbutton>
			<Table
				loading={isLoading}
				rowKey={(record) => record.id}
				columns={columns}
				dataSource={data}
				pagination={false}
				onRow={(record) => {
					return {
						onClick: () => navigate(`${Paths.victim}/${record.id}`),
					};
				}}
			/>
		</Layout>
	);
};

export default Victims;
