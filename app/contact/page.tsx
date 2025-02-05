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
						Επικοινωνήστε Μαζί μας
					</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
						{/* Contact Information */}
						<div>
							<h2 className='text-2xl font-semibold mb-6 text-primary-700'>
								Στοιχεία Επικοινωνίας
							</h2>
							<div className='space-y-4'>
								<div className='flex items-center'>
									<MapPin className='w-6 h-6 text-primary-600 mr-2' />
									<p className='text-primary-900'>
										Οδός Θεραπείας 123, Πόλη, Τ.Κ. 12345
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
								Ακολουθήστε μας
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
									<Link href='tel:+11234567890'>Καλέστε Τώρα</Link>
								</Button>
							</div>
						</div>

						{/* Map */}
						<div className='h-[400px] md:h-full'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12251.134840150431!2d23.579122900000003!3d38.4594679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a117b03029476f%3A0xb72c8a5db3018a08!2z4oSV4oSV4oSb4oSY4oSS4oSP4oSR4oSJ4oSB4oCg4oSU4oSY4oSN4oSB4oSR4oSV4oSb4oSP4oSX4oCg4oSX4oSR4oSJ4oSS4oSU4oSJ4oSO4oSB4oCg4oSB4oSb4oSJ4oSL4oSY4oCg4oSLg4OCg4oSb4oSP4oSD4oSP4oSI4oSV4oSR4oSB4oSQ4oSV4oSJ4oSB!5e0!3m2!1sen!2sus!4v1629814251749!5m2!1sen!2sus'
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
