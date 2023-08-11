import { User } from '@prisma/client';
import { api } from './api';

export type userData = Omit<User, 'id'>;
type ResponceUserData = User & { token: string };

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<ResponceUserData, userData>({
			query: (userData) => ({
				url: '/user/login',
				method: 'POST',
				body: userData,
			}),
		}),
		register: builder.mutation<ResponceUserData, userData>({
			query: (userData) => ({
				url: '/user/register',
				method: 'POST',
				body: userData,
			}),
		}),
		current: builder.query<ResponceUserData, void>({
			query: () => ({
				url: '/user/current',
				method: 'GET',
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useCurrentQuery,
	endpoints: { login, register, current },
} = authApi;
