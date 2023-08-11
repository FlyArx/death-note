import { Suiside } from '@prisma/client';
import { api } from './api';

export const victimApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllVictims: builder.query<Suiside[], void>({
			query: () => ({
				url: '/victims',
				method: 'GET',
			}),
		}),
		getVictim: builder.query<Suiside, string>({
			query: (id) => ({
				url: `/victims/${id}`,
				method: 'GET',
			}),
		}),
		editVictim: builder.mutation<string, Suiside>({
			query: (victim) => ({
				url: `/victims/edit/${victim.id}`,
				method: 'PUT',
			}),
		}),
		removeVictim: builder.mutation<string, string>({
			query: (id) => ({
				url: `/victims/remove/${id}`,
				method: 'POST',
				body: { id },
			}),
		}),
		addVictim: builder.mutation<Suiside, Suiside>({
			query: (victim) => ({
				url: `/victims/add`,
				method: 'POST',
				body: victim,
			}),
		}),
	}),
});

export const {
	useAddVictimMutation,
	useGetAllVictimsQuery,
	useEditVictimMutation,
	useRemoveVictimMutation,
	useGetVictimQuery,
	endpoints: { getAllVictims, getVictim, editVictim, addVictim, removeVictim },
} = victimApi;
