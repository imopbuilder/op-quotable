import Footer from '@/components/global/footer';
import Header from '@/components/global/header';
import { Quote, QuoteNavigation } from '@/components/pages/home/client';
import { Fragment } from 'react';

export default function Home() {
	return (
		<Fragment>
			<Header />
			<main>
				<section>
					<div className='min-h-hvh max-w-maxi mx-auto px-[4%]'>
						<Quote />
					</div>
				</section>
				<QuoteNavigation />
			</main>
			<Footer />
		</Fragment>
	);
}
