import './globals.css';
import { Inter } from 'next/font/google';
import { EXAMPLE_PATH, CMS_NAME } from '@/lib/constants';
import Footer from '../components/footer';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import Menu from '../components/menu';
export const metadata = {
	title: `Next.js and ${CMS_NAME} Example`,
	description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={inter.variable}
		>
			<body>
				<section className='min-h-screen'>
					<Menu />
					<main>{children}</main>
					<Footer />
				</section>
			</body>
		</html>
	);
}
