import { QUOTE, type Quote } from '@/constants/app';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface QuoteState {
	quote: Quote;
	tag: string;
}

const initialState: QuoteState = {
	quote: QUOTE,
	tag: '',
};

const slice = createSlice({
	name: 'url',
	initialState,
	reducers: {
		setquote: (state, action: PayloadAction<QuoteState['quote']>) => {
			state.quote = action.payload;
		},
		settag: (state, action: PayloadAction<QuoteState['tag']>) => {
			state.tag = action.payload;
		},
	},
});

export const { setquote, settag } = slice.actions;
export default slice.reducer;
