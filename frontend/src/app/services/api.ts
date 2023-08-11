import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:8080/api',
	prepareHeaders(headers, api) {
		const token =
			(api.getState() as RootState).auth.user?.token ||
			localStorage.getItem('token');

		if (token !== null) {
			headers.set('authorization', `Bearer ${token}`);
		}
	},
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const api = createApi({
	reducerPath: 'splitApi',
	baseQuery: baseQueryWithRetry,
	endpoints: () => ({}),
});
