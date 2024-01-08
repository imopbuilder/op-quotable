import axios, { AxiosError } from 'axios';
import z from 'zod';
import { quoteApi } from './axios';

const getQuoteResponseSchema = z.array(
	z.object({
		_id: z.string(),
		content: z.string(),
		author: z.string(),
		authorSlug: z.string(),
		length: z.number(),
		tags: z.array(z.string()),
	}),
);

export const api = {
	getQuote: async () => {
		try {
			const val = await quoteApi.get('/quotes/random');
			const res = getQuoteResponseSchema.parse(val.data);
			return res;
		} catch (err) {
			const error = err as Error | AxiosError;
			if (!axios.isAxiosError(error)) {
				// do whatever you want with native error
				throw new Error(error.message);
			}
			// do what you want with your axios error
			throw new Error('Axios Error 🍀');
		}
	},
};
