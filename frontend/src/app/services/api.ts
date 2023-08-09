import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:8080/api',
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const api = createApi({
	reducerPath: 'splitApi',
	baseQuery: baseQueryWithRetry,
	endpoints: () => ({}),
});
