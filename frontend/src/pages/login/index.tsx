import React from 'react';
import Layout from '../../components/layout';
import { Form, Row, Space, Typography } from 'antd';
import Card from 'antd/es/card/Card';
import SInput from '../../components/sexy-input';
import SInputPass from '../../components/sexy-input-password';
import Sbutton from '../../components/sexy-btn';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Paths } from '../../paths';
import { useLoginMutation, userData } from '../../app/services/auth';
import { isErrWithMsg } from '../../utils/is-err-with-msg';
import ErrMsg from '../../components/errMsg';

const Login = () => {
	const navigate = useNavigate();
	const [loginUser, loginUserResult] = useLoginMutation();
	const [error, setError] = useState('');
	const login = async (data: userData) => {
		try {
			await loginUser(data).unwrap();
			navigate('/');
		} catch (e) {
			const mbErr = isErrWithMsg(e);
			if (mbErr) {
				setError(e.data.message);
			} else {
				setError('ooops...');
			}
		}
	};

	return (
		<Layout>
			<Row
				align='middle'
				justify='center'>
				<Card
					title='login'
					style={{ width: '30rem' }}>
					<Form onFinish={login}>
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
						<Sbutton
							type='primary'
							htmlType='submit'>
							Log In
						</Sbutton>
					</Form>
					<Space
						direction='vertical'
						size='large'>
						<Typography.Text>
							didn't have account? <Link to={Paths.register}> Sign Up </Link>
						</Typography.Text>
						<ErrMsg message={error} />
					</Space>
				</Card>
			</Row>
		</Layout>
	);
};

export default Login;
