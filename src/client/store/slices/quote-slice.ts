import { QUOTE, type Quote } from '@/constants/app';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UrlState {
	quote: Quote;
}

const initialState: UrlState = {
	quote: QUOTE,
};

const slice = createSlice({
	name: 'url',
	initialState,
	reducers: {
		setquote: (state, action: PayloadAction<UrlState['quote']>) => {
			state.quote = action.payload;
		},
	},
});

export const { setquote } = slice.actions;
export default slice.reducer;
