import { QueryProvider } from '@/client/providers/query-provider';
import ReduxProvider from '@/client/providers/redux-provider';
import { ThemeProvider } from '@/client/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import '@/styles/main.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Op Quotable',
	description: 'A next.js app in typescript that uses quotable api to generate random quote with tags',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ReduxProvider>
					<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
						<QueryProvider>
							{children}
							<Toaster />
						</QueryProvider>
					</ThemeProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
