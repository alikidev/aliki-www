import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
	return (
		<main className='flex-1'>
			{/* Hero Section */}
			<section className='relative bg-gradient-to-r from-primary-400 to-primary-600 text-white py-20 md:py-32'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col md:flex-row items-center justify-between'>
						<div className='md:w-1/2 mb-10 md:mb-0'>
							<h1 className='text-4xl md:text-5xl font-bold mb-4'>
								Unlock Your Communication Potential
							</h1>
							<p className='text-xl mb-6'>
								Expert speech and language therapy to help you or your loved
								ones communicate with confidence.
							</p>
							<Button
								asChild
								size='lg'
								className='bg-white text-primary-600 hover:bg-primary-100'
							>
								<Link href='#contact'>Book a Consultation</Link>
							</Button>
						</div>
						<div className='md:w-1/2'>
							<div className='w-full h-[400px] bg-primary-200 rounded-lg shadow-xl flex items-center justify-center'>
								<span className='text-primary-800'>Therapist Image</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className='py-16 bg-primary-50'>
				<div className='container mx-auto px-4 md:px-6'>
					<h2 className='text-3xl font-bold text-center mb-12 text-primary-800'>
						Our Services
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{[
							'Speech Therapy',
							'Language Development',
							'Articulation Disorders',
						].map((service, index) => (
							<div
								key={index}
								className='bg-white p-6 rounded-lg shadow-md border border-primary-200'
							>
								<h3 className='text-xl font-semibold mb-4 text-primary-700'>
									{service}
								</h3>
								<p className='text-primary-900'>
									Personalized therapy sessions to improve communication skills
									and confidence.
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className='py-16'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col md:flex-row items-center'>
						<div className='md:w-1/2 mb-8 md:mb-0'>
							<div className='w-full h-[400px] bg-primary-200 rounded-lg shadow-xl flex items-center justify-center'>
								<span className='text-primary-800'>Therapist Portrait</span>
							</div>
						</div>
						<div className='md:w-1/2 md:pl-12'>
							<h2 className='text-3xl font-bold mb-6 text-primary-800'>
								About Our Therapist
							</h2>
							<p className='text-primary-900 mb-4'>
								With over 10 years of experience, our certified speech and
								language therapist is dedicated to helping individuals of all
								ages overcome communication challenges and reach their full
								potential.
							</p>
							<p className='text-primary-900 mb-6'>
								Our approach combines evidence-based techniques with
								compassionate care to ensure the best outcomes for our clients.
							</p>
							<Button
								variant='outline'
								className='text-primary-600 border-primary-400 hover:bg-primary-100'
							>
								Learn More
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className='py-16 bg-primary-50'>
				<div className='container mx-auto px-4 md:px-6'>
					<h2 className='text-3xl font-bold text-center mb-12 text-primary-800'>
						What Our Clients Say
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{[
							{
								name: 'Sarah M.',
								quote:
									"The progress my child has made is incredible. We're so grateful for the caring and professional therapy.",
							},
							{
								name: 'John D.',
								quote:
									"After my stroke, I didn't think I'd speak normally again. This therapy has been life-changing.",
							},
						].map((testimonial, index) => (
							<div
								key={index}
								className='bg-white p-6 rounded-lg shadow-md border border-primary-200'
							>
								<p className='text-primary-900 mb-4'>"{testimonial.quote}"</p>
								<p className='font-semibold text-primary-700'>
									{testimonial.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className='py-16 bg-primary-600 text-white'>
				<div className='container mx-auto px-4 md:px-6 text-center'>
					<h2 className='text-3xl font-bold mb-6'>
						Ready to Start Your Journey?
					</h2>
					<p className='text-xl mb-8'>
						Book a consultation today and take the first step towards better
						communication.
					</p>
					<Button
						asChild
						size='lg'
						className='bg-white text-primary-600 hover:bg-primary-100'
					>
						<Link href='#contact'>Book Now</Link>
					</Button>
				</div>
			</section>
		</main>
	);
}
