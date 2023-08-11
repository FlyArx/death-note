import { Row } from 'antd';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
import { useEffect } from 'react';
import { useAddVictimMutation } from '../../app/services/victims';
import { Suiside } from '@prisma/client';
import ErrMsg from '../../components/errMsg';
import { Paths } from '../../paths';
import VictimForm from '../../components/victim-form';
import { isErrWithMsg } from '../../utils/is-err-with-msg';

const AddVictim = () => {
	const navigate = useNavigate();
	const user = useSelector(selectUser);
	const [error, setError] = useState('');
	const [addVictim] = useAddVictimMutation();

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, [user, navigate]);

	const handleaddVictim = async (data: Suiside) => {
		try {
			await addVictim(data).unwrap();

			navigate(`${Paths.status}/created`);
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
					onFinish={handleaddVictim}
					title='Add Victim'
					btnText='Add victim'
					error={error}
				/>
			</Row>
		</Layout>
	);
};

export default AddVictim;
