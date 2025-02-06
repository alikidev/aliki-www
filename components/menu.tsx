'use client';

import { useState } from 'react';
import Link from 'next/link';
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
		<header className='bg-white'>
			<nav
				aria-label='Global'
				className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
			>
				<div className='flex ml-auto lg:hidden'>
					<button
						type='button'
						onClick={() => setMobileMenuOpen(true)}
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#047857] hover:text-[#10b981]'
					>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon
							aria-hidden='true'
							className='size-6'
						/>
					</button>
				</div>
				<PopoverGroup className='hidden lg:flex lg:gap-x-12 mx-auto'>
					<Popover className='relative'>
						<PopoverButton className='flex items-center gap-x-1 text-sm/6 font-semibold text-[#047857] hover:text-[#10b981]'>
							Υπηρεσίες
							<ChevronDownIcon
								aria-hidden='true'
								className='size-5 flex-none text-[#10b981]'
							/>
						</PopoverButton>

						<PopoverPanel
							transition
							className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-[#bbf7d0] transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'
						>
							<div className='p-4'>
								{ipiresies.map((item) => (
									<div
										key={item.name}
										className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-[#f0fdf4]'
									>
										<div className='flex size-11 flex-none items-center justify-center rounded-lg bg-[#f0fdf4] group-hover:bg-white'>
											<item.icon
												aria-hidden='true'
												className='size-6 text-[#047857] group-hover:text-[#10b981]'
											/>
										</div>
										<div className='flex-auto'>
											<a
												href={item.href}
												className='block font-semibold text-[#047857] hover:text-[#10b981]'
											>
												{item.name}
												<span className='absolute inset-0' />
											</a>
										</div>
									</div>
								))}
							</div>
						</PopoverPanel>
					</Popover>

					<a
						href='/about-our-space'
						className='text-sm/6 font-semibold text-[#047857] hover:text-[#10b981]'
					>
						Ο χώρος μας
					</a>
					<a
						href='/posts'
						className='text-sm/6 font-semibold text-[#047857] hover:text-[#10b981]'
					>
						Blog
					</a>
					<a
						href='/contact'
						className='text-sm/6 font-semibold text-[#047857] hover:text-[#10b981]'
					>
						Επικοινωνία
					</a>
				</PopoverGroup>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className='lg:hidden'
			>
				<div className='fixed inset-0 z-10' />
				<DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#bbf7d0]'>
					<div className='flex justify-end'>
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
											<DisclosureButton className='group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-[#047857] hover:bg-[#f0fdf4]'>
												Υπηρεσίες
												<ChevronDownIcon
													aria-hidden='true'
													className={`size-5 flex-none text-[#10b981] transition-transform duration-200 ${
														open ? 'rotate-180' : ''
													}`}
												/>
											</DisclosureButton>
											<DisclosurePanel className='pt-2'>
												{ipiresies.map((item) => (
													<Link
														key={item.name}
														href={item.href}
														className='mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-[#047857] hover:bg-[#f0fdf4] hover:text-[#10b981]'
													>
														{item.name}
													</Link>
												))}
											</DisclosurePanel>
										</>
									)}
								</Disclosure>
								<a
									href='/about-our-space'
									className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#047857] hover:bg-[#f0fdf4] hover:text-[#10b981]'
								>
									Ο χώρος μας
								</a>
								<a
									href='/posts'
									className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#047857] hover:bg-[#f0fdf4] hover:text-[#10b981]'
								>
									Blog
								</a>
								<a
									href='/contact'
									className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#047857] hover:bg-[#f0fdf4] hover:text-[#10b981]'
								>
									Επικοινωνία
								</a>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
