import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';
import { SupportProjectIcon } from './client';

export default function Header() {
	return (
		<header className='border-b'>
			<div className='max-w-maxi mx-auto px-[4%] h-16 flex items-center justify-between'>
				<div className='flex items-center justify-center'>
					<Link href={'/'} className='font-semibold'>
						Op Quotable
					</Link>
				</div>
				<nav className='flex items-center justify-center sm:gap-3 gap-3'>
					<Button className='h-10 gap-3' asChild>
						<Link href='https://github.com/imopbuilder/op-quotable' target='_blank' rel='noreferrer'>
							<SupportProjectIcon />
							<span>Support Project</span>
						</Link>
					</Button>
					<ThemeToggle />
				</nav>
			</div>
		</header>
	);
}
