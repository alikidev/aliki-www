import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Book, Users, Star } from 'lucide-react';

export default function AboutOurSpacePage() {
	return (
		<main className='flex-1'>
			{/* Hero Section */}
			<section className='relative bg-gradient-to-r from-[#71d6a2] to-[#10b981] text-white py-20 md:py-32'>
				<div className='container mx-auto px-4 md:px-6'>
					<h1 className='text-4xl md:text-5xl font-bold mb-4 text-center'>
						About Our Therapy Space
					</h1>
					<p className='text-xl mb-6 text-center max-w-2xl mx-auto'>
						Discover a nurturing environment designed to foster communication,
						growth, and confidence.
					</p>
				</div>
			</section>

			{/* Space Features */}
			<section className='py-16 bg-[#f0fdf4]'>
				<div className='container mx-auto px-4 md:px-6'>
					<h2 className='text-3xl font-bold text-center mb-12 text-[#047857]'>
						Our Space Features
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{[
							{
								icon: Home,
								title: 'Welcoming Environment',
								description:
									'A warm and inviting space that puts clients at ease.',
							},
							{
								icon: Book,
								title: 'Resource-Rich',
								description:
									'Equipped with the latest therapy tools and materials.',
							},
							{
								icon: Users,
								title: 'Adaptable Rooms',
								description:
									'Spaces suitable for individual and group sessions.',
							},
							{
								icon: Star,
								title: 'Sensory-Friendly',
								description: 'Designed to accommodate various sensory needs.',
							},
						].map((feature, index) => (
							<div
								key={index}
								className='bg-white p-6 rounded-lg shadow-md border border-[#bbf7d0]'
							>
								<feature.icon className='w-12 h-12 text-[#10b981] mb-4' />
								<h3 className='text-xl font-semibold mb-2 text-[#059669]'>
									{feature.title}
								</h3>
								<p className='text-[#065f46]'>{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Virtual Tour */}
			<section className='py-16'>
				<div className='container mx-auto px-4 md:px-6'>
					<h2 className='text-3xl font-bold text-center mb-12 text-[#047857]'>
						Take a Virtual Tour
					</h2>
					<div className='aspect-w-16 aspect-h-9'>
						<div className='w-full h-[400px] bg-[#bbf7d0] rounded-lg shadow-xl flex items-center justify-center'>
							<span className='text-[#047857]'>
								Virtual Tour Video Placeholder
							</span>
						</div>
					</div>
					<p className='text-center mt-6 text-[#065f46]'>
						Experience our therapy space from the comfort of your home. This
						virtual tour showcases our welcoming reception area, cozy therapy
						rooms, and state-of-the-art equipment.
					</p>
				</div>
			</section>

			{/* Testimonials */}
			<section className='py-16 bg-[#f0fdf4]'>
				<div className='container mx-auto px-4 md:px-6'>
					<h2 className='text-3xl font-bold text-center mb-12 text-[#047857]'>
						What Clients Say About Our Space
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{[
							{
								name: 'Emily R.',
								quote:
									'The calm atmosphere of the therapy room really helps my child focus during sessions.',
							},
							{
								name: 'Michael T.',
								quote:
									'I appreciate how the space is designed to be accessible and comfortable for all ages.',
							},
						].map((testimonial, index) => (
							<div
								key={index}
								className='bg-white p-6 rounded-lg shadow-md border border-[#bbf7d0]'
							>
								<p className='text-[#065f46] mb-4 italic'>
									"{testimonial.quote}"
								</p>
								<p className='font-semibold text-[#059669]'>
									{testimonial.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Location and Accessibility */}
			<section className='py-16'>
				<div className='container mx-auto px-4 md:px-6'>
					<h2 className='text-3xl font-bold text-center mb-12 text-[#047857]'>
						Location and Accessibility
					</h2>
					<div className='flex flex-col md:flex-row items-center justify-between'>
						<div className='md:w-1/2 mb-8 md:mb-0'>
							<div className='w-full h-[300px] bg-[#bbf7d0] rounded-lg shadow-xl flex items-center justify-center'>
								<span className='text-[#047857]'>Map Placeholder</span>
							</div>
						</div>
						<div className='md:w-1/2 md:pl-12'>
							<h3 className='text-2xl font-semibold mb-4 text-[#059669]'>
								Easy to Reach
							</h3>
							<p className='text-[#065f46] mb-4'>
								Our therapy space is conveniently located in the heart of the
								city, easily accessible by public transportation and with ample
								parking available.
							</p>
							<h3 className='text-2xl font-semibold mb-4 text-[#059669]'>
								Fully Accessible
							</h3>
							<p className='text-[#065f46] mb-4'>
								Our facility is designed to be fully accessible, ensuring a
								comfortable experience for all our clients, regardless of
								mobility needs.
							</p>
							<Button
								asChild
								className='bg-[#10b981] text-white hover:bg-[#059669]'
							>
								<Link href='/contact'>Get Directions</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className='py-16 bg-[#10b981] text-white'>
				<div className='container mx-auto px-4 md:px-6 text-center'>
					<h2 className='text-3xl font-bold mb-6'>
						Experience Our Space in Person
					</h2>
					<p className='text-xl mb-8 max-w-2xl mx-auto'>
						We'd love to show you around and discuss how our therapy space can
						support your communication goals.
					</p>
					<Button
						asChild
						size='lg'
						className='bg-white text-[#10b981] hover:bg-[#dcfce7]'
					>
						<Link href='/contact'>Schedule a Visit</Link>
					</Button>
				</div>
			</section>
		</main>
	);
}
