export type Quote = {
	_id: string;
	content: string;
	author: string;
	authorSlug: string;
	tags: string[];
	length: number;
};

export const QUOTE: Quote = {
	_id: 'KBk2VabfrRne',
	content: 'The possibilities are numerous once we decide to act and not react.',
	author: 'George Bernard Shaw',
	tags: ['Famous Quotes'],
	authorSlug: 'george-bernard-shaw',
	length: 67,
};

export type Tags = {
	id: string;
	name: string;
	slug: string;
	quoteCount: number;
};

export const TAGS: Tags[] = [
	{
		id: 'PIyOMHYqPd',
		name: 'Age',
		slug: 'age',
		quoteCount: 1,
	},
	{
		id: 'M83oc3scg',
		name: 'Business',
		slug: 'business',
		quoteCount: 31,
	},
	{
		id: 'QmvdN2qkQCC',
		name: 'Change',
		slug: 'change',
		quoteCount: 34,
	},
	{
		id: 'vWfmIQt6k8c',
		name: 'Character',
		slug: 'character',
		quoteCount: 17,
	},
	{
		id: 'JaQwywHSk59',
		name: 'Competition',
		slug: 'competition',
		quoteCount: 38,
	},
	{
		id: 'AjxQFSPEylb',
		name: 'Conservative',
		slug: 'conservative',
		quoteCount: 1,
	},
	{
		id: 'Ipw2-EcInZg',
		name: 'Courage',
		slug: 'courage',
		quoteCount: 2,
	},
	{
		id: 'aLWQOIYpeMz',
		name: 'Creativity',
		slug: 'creativity',
		quoteCount: 1,
	},
	{
		id: 'kqzFRe-4V4',
		name: 'Education',
		slug: 'education',
		quoteCount: 7,
	},
	{
		id: 'jl_H9UVXhGb',
		name: 'Ethics',
		slug: 'ethics',
		quoteCount: 1,
	},
	{
		id: 'gElqvJIRz0h',
		name: 'Failure',
		slug: 'failure',
		quoteCount: 1,
	},
	{
		id: '-7GEUrC5r',
		name: 'Faith',
		slug: 'faith',
		quoteCount: 4,
	},
	{
		id: 'r437PEqVZx5',
		name: 'Family',
		slug: 'family',
		quoteCount: 2,
	},
	{
		id: 'fvpORe-t',
		name: 'Famous Quotes',
		slug: 'famous-quotes',
		quoteCount: 1090,
	},
	{
		id: 'HJ05xaA6gN',
		name: 'Film',
		slug: 'film',
		quoteCount: 13,
	},
	{
		id: 'QuBdKRcjNsO',
		name: 'Freedom',
		slug: 'freedom',
		quoteCount: 9,
	},
	{
		id: 'krXU-q4FE',
		name: 'Friendship',
		slug: 'friendship',
		quoteCount: 189,
	},
	{
		id: 'OMnUd1CUg',
		name: 'Future',
		slug: 'future',
		quoteCount: 21,
	},
	{
		id: 'i_OFrgCiQ4',
		name: 'Generosity',
		slug: 'generosity',
		quoteCount: 1,
	},
	{
		id: 'L09SJrfjY8s',
		name: 'Genius',
		slug: 'genius',
		quoteCount: 1,
	},
	{
		id: 'S9OYJZlyu5',
		name: 'Gratitude',
		slug: 'gratitude',
		quoteCount: 1,
	},
	{
		id: 'k97A51Uf5',
		name: 'Happiness',
		slug: 'happiness',
		quoteCount: 18,
	},
	{
		id: 'kv9zk8WIqaq',
		name: 'Health',
		slug: 'health',
		quoteCount: 1,
	},
	{
		id: 'KBWnDu4rH',
		name: 'History',
		slug: 'history',
		quoteCount: 18,
	},
	{
		id: 'uCLiEwnwh',
		name: 'Honor',
		slug: 'honor',
		quoteCount: 6,
	},
	{
		id: 'uki-krBKTB_',
		name: 'Humor',
		slug: 'humor',
		quoteCount: 0,
	},
	{
		id: 'HJp_e1usX',
		name: 'Humorous',
		slug: 'humorous',
		quoteCount: 17,
	},
	{
		id: 'eghR-r-OzL9',
		name: 'Imagination',
		slug: 'imagination',
		quoteCount: 2,
	},
	{
		id: 'JCMoLDds9',
		name: 'Inspirational',
		slug: 'inspirational',
		quoteCount: 89,
	},
	{
		id: 'v9QUFHDZPT3',
		name: 'Knowledge',
		slug: 'knowledge',
		quoteCount: 3,
	},
	{
		id: 'V60a195td',
		name: 'Leadership',
		slug: 'leadership',
		quoteCount: 1,
	},
	{
		id: 'poT-7QEBm',
		name: 'Life',
		slug: 'life',
		quoteCount: 42,
	},
	{
		id: '3n-gucf_OB',
		name: 'Literature',
		slug: 'literature',
		quoteCount: 1,
	},
	{
		id: 'rnrd8q9X1',
		name: 'Love',
		slug: 'love',
		quoteCount: 20,
	},
	{
		id: 's19tg5r8EM-',
		name: 'Mathematics',
		slug: 'mathematics',
		quoteCount: 1,
	},
	{
		id: 'CaE-vzeOZb',
		name: 'Motivational',
		slug: 'motivational',
		quoteCount: 32,
	},
	{
		id: 'vmVZQ72P_',
		name: 'Nature',
		slug: 'nature',
		quoteCount: 2,
	},
	{
		id: 'pnLPcXTs_S',
		name: 'Opportunity',
		slug: 'opportunity',
		quoteCount: 1,
	},
	{
		id: 'q8kOLaefsZM',
		name: 'Pain',
		slug: 'pain',
		quoteCount: 1,
	},
	{
		id: 'GaQEsvfbYYd',
		name: 'Perseverance',
		slug: 'perseverance',
		quoteCount: 2,
	},
	{
		id: 'mh6HEhK_T_a',
		name: 'Philosophy',
		slug: 'philosophy',
		quoteCount: 16,
	},
	{
		id: '96NNdxeI_',
		name: 'Politics',
		slug: 'politics',
		quoteCount: 15,
	},
	{
		id: 'MbsuUl67N3',
		name: 'Power Quotes',
		slug: 'power-quotes',
		quoteCount: 2,
	},
	{
		id: 'tWLCsyf_K',
		name: 'Religion',
		slug: 'religion',
		quoteCount: 6,
	},
	{
		id: 'dm15bka7Qc',
		name: 'Sadness',
		slug: 'sadness',
		quoteCount: 1,
	},
	{
		id: 'qO4zwIUdFW',
		name: 'Science',
		slug: 'science',
		quoteCount: 14,
	},
	{
		id: '5wvH2mbETdq',
		name: 'Self',
		slug: 'self',
		quoteCount: 6,
	},
	{
		id: 'IJsMcEupo4',
		name: 'Self Help',
		slug: 'self-help',
		quoteCount: 6,
	},
	{
		id: '-WCNo8uFORU',
		name: 'Social Justice',
		slug: 'social-justice',
		quoteCount: 3,
	},
	{
		id: 'eD6qAIcDR8s',
		name: 'Society',
		slug: 'society',
		quoteCount: 1,
	},
	{
		id: 'DNZ4IdtHiFG',
		name: 'Spirituality',
		slug: 'spirituality',
		quoteCount: 4,
	},
	{
		id: 'EKV8W1TN-wb',
		name: 'Sports',
		slug: 'sports',
		quoteCount: 43,
	},
	{
		id: 'kZei477Cojv',
		name: 'Stupidity',
		slug: 'stupidity',
		quoteCount: 1,
	},
	{
		id: 'wm1HFcO8vf',
		name: 'Success',
		slug: 'success',
		quoteCount: 82,
	},
	{
		id: 'Gq75KBrfb',
		name: 'Technology',
		slug: 'technology',
		quoteCount: 50,
	},
	{
		id: 'LzQ9iXOoZw_',
		name: 'Time',
		slug: 'time',
		quoteCount: 1,
	},
	{
		id: 'o7BP9_4e2lL',
		name: 'Tolerance',
		slug: 'tolerance',
		quoteCount: 1,
	},
	{
		id: 'B1O_IThWjSP',
		name: 'Truth',
		slug: 'truth',
		quoteCount: 7,
	},
	{
		id: 'bsT8Bb9sxB',
		name: 'Virtue',
		slug: 'virtue',
		quoteCount: 10,
	},
	{
		id: 'olEL606Ju49',
		name: 'War',
		slug: 'war',
		quoteCount: 3,
	},
	{
		id: 'AN2qILFNzW',
		name: 'Weakness',
		slug: 'weakness',
		quoteCount: 1,
	},
	{
		id: '5j5s-YkHAr_',
		name: 'Wellness',
		slug: 'wellness',
		quoteCount: 1,
	},
	{
		id: '6J1qxxuj3',
		name: 'Wisdom',
		slug: 'wisdom',
		quoteCount: 550,
	},
	{
		id: 'Y3mg6WH7Qv1',
		name: 'Work',
		slug: 'work',
		quoteCount: 3,
	},
];
