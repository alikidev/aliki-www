'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from '@headlessui/react';
import {
	Bars3Icon,
	XMarkIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	HandRaisedIcon,
	AcademicCapIcon,
	UsersIcon,
	UserGroupIcon,
	GlobeAltIcon,
	ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Gentium_Plus } from 'next/font/google';
import customImageLoader from '@/app/utils/imageLoader';

const gentium = Gentium_Plus({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
});

const ipiresies = [
	{
		name: 'Λογοθεραπεία',
		href: '/ipiresies/logotherapeia',
		icon: ChatBubbleOvalLeftEllipsisIcon,
	},
	{
		name: 'Εργοθεραπεία',
		href: '/ipiresies/ergotherapeia',
		icon: HandRaisedIcon,
	},
	{
		name: 'Ειδική διαπαιδαγώγηση',
		href: '/ipiresies/eidiki-diapaidagogisi',
		icon: AcademicCapIcon,
	},
	{
		name: 'Συμβουλευτική γονέων',
		href: '/ipiresies/symvouleutiki-goneon',
		icon: UsersIcon,
	},
	{
		name: 'Συμβουλευτική εφήβων & ενηλίκων',
		href: '/ipiresies/symvouleutiki-efivon-enilikon',
		icon: UserGroupIcon,
	},
	{
		name: 'Ομάδες κοινωνικοποίησης',
		href: '/ipiresies/omades-koinonikopoiisis',
		icon: GlobeAltIcon,
	},
	{
		name: 'Σχολική ετοιμότητα',
		href: '/ipiresies/sxoliki-etoimotita',
		icon: ClipboardDocumentCheckIcon,
	},
];

export default function Menu() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className={gentium.className}>
			<header className='bg-[#005c25] relative  mx-auto'>
				<nav
					aria-label='Global'
					className='mx-auto flex z-50  container items-center justify-between p-6 '
				>
					{/* Logo */}
					<Link
						href='/'
						className='flex items-center'
					>
						<Image
							src='/delivoriakidsandfamilytherapylogo.webp'
							alt='Delivoria Therapy Logo'
							width={180}
							height={60}
							className='h-[90px] w-auto'
							priority
							loader={customImageLoader}
						/>
					</Link>

					<div className='flex lg:hidden'>
						<button
							type='button'
							onClick={() => setMobileMenuOpen(true)}
							className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-primary-100'
						>
							<span className='sr-only'>Open main menu</span>
							<Bars3Icon
								aria-hidden='true'
								className='size-6'
							/>
						</button>
					</div>

					{/* Desktop menu */}
					<PopoverGroup className='hidden lg:flex lg:gap-x-12'>
						<Popover className='relative'>
							<PopoverButton className='flex items-center gap-x-1 text-[18px] font-bold text-white hover:text-primary-100'>
								Υπηρεσίες
								<ChevronDownIcon
									aria-hidden='true'
									className='size-5 flex-none text-primary-400'
								/>
							</PopoverButton>

							<PopoverPanel
								transition
								className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-primary-100 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'
							>
								<div className='p-4'>
									{ipiresies.map((item) => (
										<div
											key={item.name}
											className='group relative flex items-center gap-x-6 rounded-lg p-4 text-[16px] hover:bg-primary-50'
										>
											<div className='flex size-11 flex-none items-center justify-center rounded-lg bg-primary-50 group-hover:bg-white'>
												<item.icon
													aria-hidden='true'
													className='size-6 text-primary group-hover:text-primary-600'
												/>
											</div>
											<div className='flex-auto'>
												<Popover.Button
													as={Link}
													href={item.href}
													className='block font-semibold text-primary hover:text-primary-600'
												>
													{item.name}
													<span className='absolute inset-0' />
												</Popover.Button>
											</div>
										</div>
									))}
								</div>
							</PopoverPanel>
						</Popover>

						<Link
							href='/about-our-space'
							className='text-[18px] font-bold text-white hover:text-primary-100'
						>
							Ο χώρος μας
						</Link>
						<Link
							href='/posts'
							className='text-[18px] font-bold text-white hover:text-primary-100'
						>
							Blog
						</Link>
						<Link
							href='/contact'
							className='text-[18px] font-bold text-white hover:text-primary-100'
						>
							Επικοινωνία
						</Link>
					</PopoverGroup>
				</nav>

				{/* Mobile menu */}
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className='lg:hidden'
				>
					<div className='fixed inset-0 z-10' />
					<DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#bbf7d0]'>
						<div className='flex items-center justify-between'>
							<Link
								href='/'
								className='-m-1.5 p-1.5'
							>
								<Image
									src='/delivoriakidsandfamilytherapylogo.webp'
									alt='Synapsis Logo'
									width={180}
									height={60}
									className='h-[90px] w-auto'
									priority
									loader={customImageLoader}
								/>
							</Link>
							<button
								type='button'
								onClick={() => setMobileMenuOpen(false)}
								className='-m-2.5 rounded-md p-2.5 text-[#047857] hover:text-[#10b981]'
							>
								<span className='sr-only'>Close menu</span>
								<XMarkIcon
									aria-hidden='true'
									className='size-6'
								/>
							</button>
						</div>
						<div className='mt-6 flow-root'>
							<div className='-my-6 divide-y divide-[#bbf7d0]'>
								<div className='space-y-2 py-6'>
									<Disclosure
										as='div'
										className='-mx-3'
									>
										{({ open }) => (
											<>
												<DisclosureButton className='group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-bold text-primary hover:bg-primary-50'>
													Υπηρεσίες
													<ChevronDownIcon
														aria-hidden='true'
														className={`size-5 flex-none text-primary-600 transition-transform duration-200 ${
															open ? 'rotate-180' : ''
														}`}
													/>
												</DisclosureButton>
												<DisclosurePanel className='pt-2'>
													{ipiresies.map((item) => (
														<Link
															key={item.name}
															href={item.href}
															className='mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-primary hover:bg-primary-50 hover:text-primary-600'
															onClick={() => setMobileMenuOpen(false)}
														>
															{item.name}
														</Link>
													))}
												</DisclosurePanel>
											</>
										)}
									</Disclosure>
									<Link
										href='/about-our-space'
										className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold text-primary hover:bg-primary-50 hover:text-primary-600'
										onClick={() => setMobileMenuOpen(false)}
									>
										Ο χώρος μας
									</Link>
									<Link
										href='/posts'
										className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold text-primary hover:bg-primary-50 hover:text-primary-600'
										onClick={() => setMobileMenuOpen(false)}
									>
										Blog
									</Link>
									<Link
										href='/contact'
										className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold text-primary hover:bg-primary-50 hover:text-primary-600'
										onClick={() => setMobileMenuOpen(false)}
									>
										Επικοινωνία
									</Link>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>
		</div>
	);
}
