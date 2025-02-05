import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	MapPin,
	Phone,
	Mail,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
} from 'lucide-react';

export default function ContactPage() {
	return (
		<main className='flex-1'>
			<section className='py-16 bg-primary-50'>
				<div className='container mx-auto px-4 md:px-6'>
					<h1 className='text-4xl font-bold text-center mb-12 text-primary-800'>
						Contact Us
					</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
						{/* Contact Information */}
						<div>
							<h2 className='text-2xl font-semibold mb-6 text-primary-700'>
								Get in Touch
							</h2>
							<div className='space-y-4'>
								<div className='flex items-center'>
									<MapPin className='w-6 h-6 text-primary-600 mr-2' />
									<p className='text-primary-900'>
										123 Therapy Street, City, State 12345
									</p>
								</div>
								<div className='flex items-center'>
									<Phone className='w-6 h-6 text-primary-600 mr-2' />
									<p className='text-primary-900'>(123) 456-7890</p>
								</div>
								<div className='flex items-center'>
									<Mail className='w-6 h-6 text-primary-600 mr-2' />
									<p className='text-primary-900'>contact@speechtherapy.com</p>
								</div>
							</div>

							<h2 className='text-2xl font-semibold mt-12 mb-6 text-primary-700'>
								Follow Us
							</h2>
							<div className='flex space-x-4'>
								<Link
									href='https://facebook.com'
									className='text-primary-600 hover:text-primary-700'
								>
									<Facebook className='w-6 h-6' />
								</Link>
								<Link
									href='https://twitter.com'
									className='text-primary-600 hover:text-primary-700'
								>
									<Twitter className='w-6 h-6' />
								</Link>
								<Link
									href='https://instagram.com'
									className='text-primary-600 hover:text-primary-700'
								>
									<Instagram className='w-6 h-6' />
								</Link>
								<Link
									href='https://linkedin.com'
									className='text-primary-600 hover:text-primary-700'
								>
									<Linkedin className='w-6 h-6' />
								</Link>
							</div>

							<div className='mt-12'>
								<Button
									asChild
									className='bg-primary-600 text-white hover:bg-primary-700'
								>
									<Link href='tel:+11234567890'>Call Now</Link>
								</Button>
							</div>
						</div>

						{/* Map */}
						<div className='h-[400px] md:h-full'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98656668505626!3d40.74844097932822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629814251749!5m2!1sen!2sus'
								width='100%'
								height='100%'
								style={{ border: 0 }}
								allowFullScreen={false}
								loading='lazy'
								className='rounded-lg shadow-md'
							></iframe>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
