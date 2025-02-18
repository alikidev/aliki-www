import type React from 'react';
import './globals.css';
import { Judson } from 'next/font/google';
import Footer from '../components/footer';
import Menu from '../components/menu';

export const metadata = {
	title: `Delivoria Therapy - Κέντρο Λογοθεραπείας και Ειδικής Αγωγής`,
	description: `Εξειδικευμένες υπηρεσίες λογοθεραπείας και ειδικής αγωγής για παιδιά και ενήλικες.`,
};

const judson = Judson({
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
			lang='el'
			className={judson.className}
		>
			<body className='bg-white text-primary-700'>
				<section className='min-h-screen flex flex-col'>
					<Menu />
					<main className='flex-grow'>{children}</main>
					<Footer />
				</section>
			</body>
		</html>
	);
}
