import styles from './index.module.css';
import { Layout, Space, Typography } from 'antd';
import {
	UserDeleteOutlined,
	UserOutlined,
	LoginOutlined,
	LogoutOutlined,
} from '@ant-design/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Sbutton from '../sexy-btn';
import { Paths } from '../../paths';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/auth/authSlice';
import { AnyAction, current } from '@reduxjs/toolkit';

const Header = () => {
	const user = useSelector(selectUser);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logOutClick = () => {
		dispatch(logout());
		localStorage.removeItem('token');
		navigate('/login');
	};

	return (
		<Layout.Header className={styles.header}>
			<Space>
				<UserDeleteOutlined style={{ fontSize: '30px', marginRight: '15px' }} />
				<RouterLink to={user ? Paths.home : Paths.login}>
					<Sbutton type='ghost'>
						<Typography.Title level={1}>Death Note</Typography.Title>
					</Sbutton>
				</RouterLink>
			</Space>
			{user ? (
				<Sbutton
					type='ghost'
					icon={<LogoutOutlined />}
					onClick={logOutClick}>
					Log out
				</Sbutton>
			) : (
				<Space>
					<RouterLink to={Paths.register}>
						<Sbutton
							type='ghost'
							icon={<UserOutlined />}>
							Sign Up
						</Sbutton>
					</RouterLink>
					<RouterLink to={Paths.login}>
						<Sbutton
							type='ghost'
							icon={<LoginOutlined />}>
							Log In
						</Sbutton>
					</RouterLink>
				</Space>
			)}
		</Layout.Header>
	);
};

export default Header;
