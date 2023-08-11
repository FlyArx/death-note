import Layout from '../../components/layout';
import { Form, Row, Space, Typography } from 'antd';
import Card from 'antd/es/card/Card';
import SInput from '../../components/sexy-input';
import SInputPass from '../../components/sexy-input-password';
import Sbutton from '../../components/sexy-btn';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Paths } from '../../paths';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
import { useRegisterMutation } from '../../app/services/auth';
import { isErrWithMsg } from '../../utils/is-err-with-msg';
import { User } from '@prisma/client';
type RegisterData = Omit<User, 'id'> & { confirmPassword: string };

const Register = () => {
	const navigate = useNavigate();
	const user = useSelector(selectUser);
	const [error, setError] = useState('');
	const [registerUser] = useRegisterMutation();

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [user, navigate]);

	const register = async (data: RegisterData) => {
		try {
			await registerUser(data).unwrap();

			navigate('/');
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
				<Card
					title='Sign Up'
					style={{ width: '30rem' }}>
					<Form onFinish={register}>
						<SInput
							name='name'
							placeholder='name'
							Smessage='require name'
						/>
						<SInput
							type='email'
							name='email'
							placeholder='email'
							Smessage='require email'
						/>
						<SInputPass
							name='password'
							placeholder='password'
							Smessage='require password'
						/>
						<SInputPass
							name='confirmPassword'
							placeholder='confirm Password'
							Smessage='require password'
						/>
						<Sbutton
							type='primary'
							htmlType='submit'>
							register
						</Sbutton>
					</Form>
					<Space
						direction='vertical'
						size='large'>
						<Typography.Text>
							have account? <Link to={Paths.login}> Log In </Link>
						</Typography.Text>
					</Space>
				</Card>
			</Row>
		</Layout>
	);
};

export default Register;
