import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Smile, Star, Book, Mic } from 'lucide-react';

export default function LandingPage() {
	return (
		<main className='flex-1'>
			{/* Hero Section */}
			<section className='relative bg-gradient-to-r from-[#005c25] to-[#005c25] text-white py-20 md:py-32'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col md:flex-row items-center justify-between'>
						<div className='md:w-1/2 mb-10 md:mb-0'>
							<h1 className='text-4xl md:text-5xl font-bold mb-4'>
								Ας Μάθουμε και να Μεγαλώσουμε Μαζί!
							</h1>
							<p className='text-xl mb-6'>
								Διασκεδαστικές περιπέτειες ομιλίας και γλώσσας για καταπληκτικά
								παιδιά σαν εσένα!
							</p>
							<Button
								asChild
								size='lg'
								className='bg-white text-[#10b981] hover:bg-[#f0fdf4] rounded-full text-lg px-8 py-3'
							>
								<Link href='#contact'>Ξεκίνα την Περιπέτειά σου!</Link>
							</Button>
						</div>
						<div className='md:w-1/2'>
							<div className='w-full h-[400px] bg-[#f0fdf4] rounded-lg shadow-xl flex items-center justify-center overflow-hidden'>
								<img
									src='/placeholder.svg?height=400&width=600'
									alt='Χαρούμενα παιδιά που μαθαίνουν και παίζουν'
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className='py-16 bg-[#f0fdf4]'>
				<div className='container mx-auto px-4 md:px-6'>
					<h2 className='text-3xl font-bold text-center mb-12 text-[#047857]'>
						Οι Διασκεδαστικές μας Δραστηριότητες Μάθησης
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{[
							{
								icon: Smile,
								title: 'Περιπέτειες Ομιλίας',
								description:
									'Συναρπαστικά παιχνίδια για να σε βοηθήσουν να μιλάς καθαρά και με αυτοπεποίθηση!',
							},
							{
								icon: Book,
								title: 'Αποστολές Γλώσσας',
								description:
									'Ανακάλυψε τη μαγεία των λέξεων και εκφράσου καλύτερα!',
							},
							{
								icon: Mic,
								title: 'Ταξίδια Φωνής',
								description:
									'Μάθε να χρησιμοποιείς τη φωνή σου με καταπληκτικούς νέους τρόπους!',
							},
						].map((service, index) => (
							<div
								key={index}
								className='bg-white p-6 rounded-lg shadow-md border border-[#bbf7d0] transition-transform hover:scale-105'
							>
								<service.icon className='w-16 h-16 text-[#10b981] mb-4 mx-auto' />
								<h3 className='text-xl font-semibold mb-4 text-[#047857] text-center'>
									{service.title}
								</h3>
								<p className='text-[#065f46] text-center'>
									{service.description}
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
							<div className='w-full h-[400px] bg-[#f0fdf4] rounded-lg shadow-xl flex items-center justify-center overflow-hidden'>
								<img
									src='/placeholder.svg?height=400&width=600'
									alt='Η φιλική μας λογοθεραπεύτρια'
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
						<div className='md:w-1/2 md:pl-12'>
							<h2 className='text-3xl font-bold mb-6 text-[#047857]'>
								Γνώρισε τον Φιλικό σου Οδηγό
							</h2>
							<p className='text-[#065f46] mb-4 text-lg'>
								Γεια σου! Είμαι η Μαρία και λατρεύω να βοηθάω παιδιά σαν εσένα
								να γίνουν καταπληκτικοί επικοινωνιακοί. Μαζί, θα πάμε σε
								συναρπαστικά γλωσσικά ταξίδια γεμάτα διασκεδαστικά παιχνίδια και
								cool δραστηριότητες!
							</p>
							<p className='text-[#065f46] mb-6 text-lg'>
								Κάθε μέρα είναι μια νέα περιπέτεια στον πολύχρωμο και
								παιχνιδιάρικο χώρο θεραπείας μας. Είσαι έτοιμος/η να
								ξεκλειδώσεις τις υπερδυνάμεις επικοινωνίας σου;
							</p>
							<Button
								variant='outline'
								className='text-[#10b981] border-[#10b981] hover:bg-[#f0fdf4] rounded-full text-lg px-8 py-3'
							>
								Γνώρισε τη Μαρία
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className='py-16 bg-[#f0fdf4]'>
				<div className='container mx-auto px-4 md:px-6'>
					<h2 className='text-3xl font-bold text-center mb-12 text-[#047857]'>
						Τι Λένε τα Σούπερ Αστέρια μας
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{[
							{
								name: 'Ελένη, 7 ετών',
								quote:
									'Λατρεύω να έρχομαι εδώ! Τα παιχνίδια είναι τόσο διασκεδαστικά και τώρα μπορώ να λέω καταπληκτικές ιστορίες στους φίλους μου!',
							},
							{
								name: 'Η μαμά του Γιάννη',
								quote:
									'Η πρόοδος που έχει κάνει ο Γιάννης είναι απίστευτη. Είναι πιο σίγουρος για τον εαυτό του και λατρεύει να εξασκεί την ομιλία του στο σπίτι!',
							},
						].map((testimonial, index) => (
							<div
								key={index}
								className='bg-white p-6 rounded-lg shadow-md border border-[#bbf7d0]'
							>
								<Star className='w-8 h-8 text-[#10b981] mb-4 mx-auto' />
								<p className='text-[#065f46] mb-4 text-lg italic text-center'>
									"{testimonial.quote}"
								</p>
								<p className='font-semibold text-[#059669] text-center'>
									{testimonial.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className='py-16 bg-[#10b981] text-white'>
				<div className='container mx-auto px-4 md:px-6 text-center'>
					<h2 className='text-3xl font-bold mb-6'>
						Έτοιμος/η για τη Γλωσσική σου Περιπέτεια;
					</h2>
					<p className='text-xl mb-8'>
						Ας ξεκινήσουμε το ταξίδι σου για να γίνεις ένας σούπερ
						επικοινωνιακός σήμερα!
					</p>
					<Button
						asChild
						size='lg'
						className='bg-white text-[#10b981] hover:bg-[#f0fdf4] rounded-full text-lg px-8 py-3'
					>
						<Link href='#contact'>Έλα στην Παρέα μας!</Link>
					</Button>
				</div>
			</section>
		</main>
	);
}
