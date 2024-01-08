'use client';

import { api } from '@/client/api';
import { dispatch, useAppSelector } from '@/client/store';
import { setindex, setquote, settag } from '@/client/store/slices/quote-slice';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { QUOTE, TAGS } from '@/constants/app';
import { cn } from '@/lib/utils/cn';
import { Check, ChevronLeft, ChevronRight, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'sonner';

export function Quote() {
	const { quote, index } = useAppSelector((state) => state.quoteSlice);
	const { content, author, tags } = quote[index];

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

export function QuoteNavigation() {
	const [loading, setLoading] = useState(false);
	const { quote, index, tag } = useAppSelector((state) => state.quoteSlice);

	const query = useQuery(['quote'], () => api.getQuote(tag), {
		cacheTime: 0,
		onSuccess: (data) => {
			if (data.length === 0) {
				// toast for empty quote array
				toast.info(`No Quote on ${TAGS.find((val) => val.slug === tag)?.name}`);
				return;
			}

			dispatch(setquote(data));
			dispatch(setindex('increment'));
		},
		onError: (err) => {
			console.log(err);
		},
		onSettled: () => {
			setLoading(false);
		},
		initialData: [QUOTE],
	});

	function handlePrevious() {
		dispatch(setindex('decrement'));
	}

	function handleInspiration() {
		setLoading(true);
		query.refetch();
	}

	function handleNext() {
		dispatch(setindex('increment'));
	}

	return (
		<div className='sticky bottom-0 w-full flex items-center justify-center py-5 '>
			<div className='bg-muted p-1 rounded-lg border flex items-center justify-center gap-2'>
				<Button className='h-10 text-sm' onClick={handlePrevious} disabled={index === 0}>
					<ChevronLeft className='mr-1.5' size={16} /> Previous
				</Button>
				<Button size='lg' onClick={handleInspiration} disabled={loading}>
					Inspire Me
				</Button>
				<Button className='h-10' onClick={handleNext} disabled={quote.length - 1 === index}>
					Next
					<ChevronRight className='ml-1.5' size={16} />
				</Button>
				<TagSearch />
			</div>
		</div>
	);
}

function TagSearch() {
	const [open, setOpen] = useState(false);
	const { tag: value } = useAppSelector((state) => state.quoteSlice);

	return (
		<Popover open={open} onOpenChange={setOpen} modal={true}>
			<PopoverTrigger asChild>
				<Button role='combobox' aria-expanded={open} className='w-[200px] justify-between h-10'>
					{value ? TAGS.find((tag) => tag.slug === value)?.name : 'Select tag...'}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[200px] p-0' sideOffset={10}>
				<Command>
					<CommandInput placeholder='Search tag...' />
					<ScrollArea className='max-h-[450px] overflow-y-scroll rounded-scroll-bar'>
						<CommandEmpty>No tag found.</CommandEmpty>
						<CommandGroup>
							{TAGS.map((tag) => (
								<CommandItem
									key={tag.slug}
									value={tag.slug}
									className='mx-1 rounded-md'
									onSelect={(currentValue) => {
										dispatch(settag(currentValue === value ? '' : currentValue));
										setOpen(false);
									}}
								>
									<Check className={cn('mr-2 h-4 w-4', value === tag.slug ? 'opacity-100' : 'opacity-0')} />
									{tag.name}
								</CommandItem>
							))}
						</CommandGroup>
					</ScrollArea>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
