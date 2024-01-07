export type Quote = {
	id: string;
	content: string;
	author: string;
	authorSlug: string;
	tags: string[];
	length: number;
};

export const QUOTE: Quote = {
	id: 'KBk2VabfrRne',
	content: 'The possibilities are numerous once we decide to act and not react.',
	author: 'George Bernard Shaw',
	tags: ['Famous Quotes'],
	authorSlug: 'george-bernard-shaw',
	length: 67,
};
