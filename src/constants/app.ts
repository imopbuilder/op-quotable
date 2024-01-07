export type Quote = {
	id: string;
	content: string;
	author: string;
	authorSlug: string;
	tags: string[];
};

export const QUOTE: Quote = {
	id: '',
	content: 'hello world',
	author: 'rahul',
	authorSlug: '1',
	tags: ['education'],
};
