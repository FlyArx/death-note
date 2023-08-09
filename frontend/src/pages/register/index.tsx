import Layout from '../../components/layout';
import { Form, Row, Space, Typography } from 'antd';
import Card from 'antd/es/card/Card';
import SInput from '../../components/sexy-input';
import SInputPass from '../../components/sexy-input-password';
import Sbutton from '../../components/sexy-btn';
import { Link } from 'react-router-dom';

import { Paths } from '../../paths';

const Register = () => {
	return (
		<Layout>
			<Row
				align='middle'
				justify='center'>
				<Card
					title='Sign Up'
					style={{ width: '30rem' }}>
					<Form onFinish={() => null}>
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
							Login
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
