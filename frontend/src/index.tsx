import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Paths } from './paths';
import Login from './pages/login';
import Register from './pages/register';

import './index.css';

import Auth from './features/auth/auth';
import Victims from './pages/victims';
import AddVictim from './pages/addVictim';
import EditVictim from './pages/editVictim';
import { Status } from './pages/Status';
import { Victim } from './pages/Victim';

const router = createBrowserRouter([
	{
		path: Paths.home,
		element: <Victims />,
	},

	{
		path: Paths.login,
		element: <Login />,
	},
	{
		path: Paths.register,
		element: <Register />,
	},
	{
		path: Paths.victimAdd,
		element: <AddVictim />,
	},
	{
		path: `${Paths.victim}/:id`,
		element: <Victim />,
	},
	{
		path: `${Paths.victimEdit}/:id`,
		element: <EditVictim />,
	},
	{
		path: `${Paths.status}/:status`,
		element: <Status />,
	},
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
				<Auth>
					<RouterProvider router={router} />
				</Auth>
			</ConfigProvider>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
