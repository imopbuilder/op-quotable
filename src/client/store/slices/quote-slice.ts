import { QUOTE, type Quote } from '@/constants/app';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface QuoteState {
	quote: Quote[];
	tag: string;
	index: number;
}

const initialState: QuoteState = {
	quote: [QUOTE],
	tag: '',
	index: 0,
};

const slice = createSlice({
	name: 'url',
	initialState,
	reducers: {
		setquote: (state, action: PayloadAction<QuoteState['quote']>) => {
			state.quote = [...state.quote, ...action.payload];
		},
		settag: (state, action: PayloadAction<QuoteState['tag']>) => {
			state.tag = action.payload;
		},
		setindex: (state, action: PayloadAction<'increment' | 'decrement'>) => {
			state.index = action.payload === 'increment' ? state.index + 1 : state.index - 1;
		},
	},
});

export const { setquote, settag, setindex } = slice.actions;
export default slice.reducer;
