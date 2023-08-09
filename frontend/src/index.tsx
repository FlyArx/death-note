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
import Layout from './components/layout';

const router = createBrowserRouter([
	{
		path: Paths.home,
		element: (
			<Layout>
				<h1>victims</h1>
			</Layout>
		),
	},
	{
		path: Paths.login,
		element: <Login />,
	},
	{
		path: Paths.register,
		element: <Register />,
	},
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
				<RouterProvider router={router} />
			</ConfigProvider>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
