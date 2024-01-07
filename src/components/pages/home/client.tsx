'use client';

import { useAppSelector } from '@/client/store';

export function Quote() {
	const { quote } = useAppSelector((state) => state.quoteSlice);
	const { content, author, tags } = quote;

	return (
		<div>
			<p className='py-20 text-7xl/[1.4] font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent'>{content}</p>
			<hr />
			<div className='flex items-center justify-between py-5 text-sm'>
				<div>
					{tags.map((tag) => (
						<span key={tag} className='uppercase text-xs text-muted-foreground border rounded-lg py-1.5 px-2'>
							{tag}
						</span>
					))}
				</div>
				<div>
					<p className='ext-muted-foreground font-semibold'>- {author}</p>
				</div>
			</div>
		</div>
	);
}
