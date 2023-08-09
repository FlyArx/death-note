import styles from './index.module.css';
import { Layout, Space, Typography } from 'antd';
import {
	UserDeleteOutlined,
	UserOutlined,
	LoginOutlined,
} from '@ant-design/icons';
import { Link as RouterLink } from 'react-router-dom';
import Sbutton from '../sexy-btn';
import { Paths } from '../../paths';

const Header = () => {
	return (
		<Layout.Header className={styles.header}>
			<Space>
				<UserDeleteOutlined style={{ fontSize: '30px', marginRight: '15px' }} />
				<RouterLink to={Paths.home}>
					<Sbutton type='ghost'>
						<Typography.Title level={1}>Victims</Typography.Title>
					</Sbutton>
				</RouterLink>
			</Space>
			<Space>
				<RouterLink to={Paths.register}>
					<Sbutton
						type='ghost'
						icon={<UserOutlined />}>
						Register
					</Sbutton>
				</RouterLink>
				<RouterLink to={Paths.login}>
					<Sbutton
						type='ghost'
						icon={<LoginOutlined />}>
						Login
					</Sbutton>
				</RouterLink>
			</Space>
		</Layout.Header>
	);
};

export default Header;
