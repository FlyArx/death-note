import { Suiside } from '@prisma/client';
import { Row } from 'antd';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import VictimForm from '../../components/victim-form';
import Layout from '../../components/layout';
import { Paths } from '../../paths';
import {
	useEditVictimMutation,
	useGetVictimQuery,
} from '../../app/services/victims';
import { isErrWithMsg } from '../../utils/is-err-with-msg';

const EditVictim = () => {
	const navigate = useNavigate();
	const params = useParams<{ id: string }>();
	const [error, setError] = useState('');
	const { data, isLoading } = useGetVictimQuery(params.id || '');
	const [editEmployee] = useEditVictimMutation();

	if (isLoading) {
		return <span>Loading</span>;
	}

	const handleEditUser = async (employee: Suiside) => {
		try {
			const editedEmployee = {
				...data,
				...employee,
			};

			await editEmployee(editedEmployee).unwrap();

			navigate(`${Paths.status}/updated`);
		} catch (err) {
			const maybeError = isErrWithMsg(err);

			if (maybeError) {
				setError(err.data.message);
			} else {
				setError('Неизвестная ошибка');
			}
		}
	};

	return (
		<Layout>
			<Row
				align='middle'
				justify='center'>
				<VictimForm
					onFinish={handleEditUser}
					title='Edit Victim'
					victim={data}
					btnText='Edit'
					error={error}
				/>
			</Row>
		</Layout>
	);
};
export default EditVictim;
