import { Suiside } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../app/services/auth';
import { RootState } from '../../app/store';
import { victimApi } from '../../app/services/victims';

interface InitialState {
	victims: Suiside[] | null;
}

const initialState: InitialState = {
	victims: null,
};

const slice = createSlice({
	name: 'victims',
	initialState,
	reducers: {
		logout: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			victimApi.endpoints.getAllVictims.matchFulfilled,
			(state, action) => {
				state.victims = action.payload;
			}
		);
	},
});

export default slice.reducer;
export const selectVictims = (state: RootState) => state.victims;
