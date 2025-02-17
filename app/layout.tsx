import './globals.css';
import { Gentium_Plus } from 'next/font/google';
import { EXAMPLE_PATH, CMS_NAME } from '@/lib/constants';
import Footer from '../components/footer';
import Menu from '../components/menu';
export const metadata = {
	title: `Next.js and ${CMS_NAME} Example`,
	description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const gentium = Gentium_Plus({
	weight: ['400', '700'],
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
			className={gentium.className}
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
