import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	Home,
	Book,
	Users,
	Star,
	MapPin,
	Bus,
	Accessibility,
} from 'lucide-react';

export default function AboutOurSpacePage() {
	return (
		<main className='flex-1'>
			{/* Hero Section */}
			<section className='relative bg-gradient-to-r from-[#71d6a2] to-[#10b981] text-white py-20 md:py-32'>
				<div className='container mx-auto px-4 md:px-6'>
					<h1 className='text-4xl md:text-5xl font-bold mb-4 text-center'>
						Σχετικά με τον Χώρο Θεραπείας μας
					</h1>
					<p className='text-xl mb-6 text-center max-w-2xl mx-auto'>
						Ανακαλύψτε ένα περιβάλλον που ενθαρρύνει την επικοινωνία, την
						ανάπτυξη και την αυτοπεποίθηση.
					</p>
				</div>
			</section>

			{/* Space Features */}
			<section className='py-16 bg-[#f0fdf4]'>
				<div className='container mx-auto px-4 md:px-6'>
					<h2 className='text-3xl font-bold text-center mb-12 text-[#047857]'>
						Τα Χαρακτηριστικά του Χώρου μας
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{[
							{
								icon: Home,
								title: 'Φιλόξενο Περιβάλλον',
								description:
									'Ένας ζεστός και φιλικός χώρος που κάνει τους πελάτες να νιώθουν άνετα.',
							},
							{
								icon: Book,
								title: 'Πλούσιο σε Πόρους',
								description:
									'Εξοπλισμένο με τα πιο σύγχρονα εργαλεία και υλικά θεραπείας.',
							},
							{
								icon: Users,
								title: 'Προσαρμόσιμα Δωμάτια',
								description:
									'Χώροι κατάλληλοι για ατομικές και ομαδικές συνεδρίες.',
							},
							{
								icon: Star,
								title: 'Φιλικό προς τις Αισθήσεις',
								description:
									'Σχεδιασμένο για να καλύπτει διάφορες αισθητηριακές ανάγκες.',
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
						Κάντε μια Εικονική Περιήγηση
					</h2>
					<div className='aspect-w-16 aspect-h-9'>
						<div className='w-full h-[400px] bg-[#bbf7d0] rounded-lg shadow-xl flex items-center justify-center'>
							<span className='text-[#047857]'>
								Εδώ θα μπει το Βίντεο Εικονικής Περιήγησης
							</span>
						</div>
					</div>
					<p className='text-center mt-6 text-[#065f46]'>
						Γνωρίστε τον χώρο θεραπείας μας από την άνεση του σπιτιού σας. Αυτή
						η εικονική περιήγηση παρουσιάζει τον φιλόξενο χώρο υποδοχής μας, τα
						άνετα δωμάτια θεραπείας και τον σύγχρονο εξοπλισμό μας.
					</p>
				</div>
			</section>

			{/* Testimonials */}
			<section className='py-16 bg-[#f0fdf4]'>
				<div className='container mx-auto px-4 md:px-6'>
					<h2 className='text-3xl font-bold text-center mb-12 text-[#047857]'>
						Τι Λένε οι Πελάτες μας για τον Χώρο μας
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{[
							{
								name: 'Ελένη Π.',
								quote:
									'Η ήρεμη ατμόσφαιρα του δωματίου θεραπείας βοηθά πραγματικά το παιδί μου να συγκεντρωθεί κατά τη διάρκεια των συνεδριών.',
							},
							{
								name: 'Μιχάλης Κ.',
								quote:
									'Εκτιμώ πολύ το πώς ο χώρος είναι σχεδιασμένος ώστε να είναι προσβάσιμος και άνετος για όλες τις ηλικίες.',
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
						Τοποθεσία και Προσβασιμότητα
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
						<div>
							<div className='space-y-4 mb-8'>
								<div className='flex items-center'>
									<MapPin className='w-6 h-6 text-[#10b981] mr-2' />
									<p className='text-[#065f46]'>
										Οδός Θεραπείας 123, Πόλη, Τ.Κ. 12345
									</p>
								</div>
								<div className='flex items-center'>
									<Bus className='w-6 h-6 text-[#10b981] mr-2' />
									<p className='text-[#065f46]'>
										Εύκολη πρόσβαση με λεωφορεία και μετρό
									</p>
								</div>
								<div className='flex items-center'>
									<Accessibility className='w-6 h-6 text-[#10b981] mr-2' />
									<p className='text-[#065f46]'>
										Πλήρως προσβάσιμες εγκαταστάσεις
									</p>
								</div>
							</div>
							<Button
								asChild
								className='bg-[#10b981] text-white hover:bg-[#059669]'
							>
								<Link href='/contact'>Λάβετε Οδηγίες</Link>
							</Button>
						</div>
						<div className='h-[400px]'>
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

			{/* Call to Action */}
			<section className='py-16 bg-[#10b981] text-white'>
				<div className='container mx-auto px-4 md:px-6 text-center'>
					<h2 className='text-3xl font-bold mb-6'>
						Ζήστε τον Χώρο μας από Κοντά
					</h2>
					<p className='text-xl mb-8 max-w-2xl mx-auto'>
						Θα χαρούμε να σας ξεναγήσουμε και να συζητήσουμε πώς ο χώρος
						θεραπείας μας μπορεί να υποστηρίξει τους επικοινωνιακούς σας
						στόχους.
					</p>
					<Button
						asChild
						size='lg'
						className='bg-white text-[#10b981] hover:bg-[#dcfce7]'
					>
						<Link href='/contact'>Κλείστε μια Επίσκεψη</Link>
					</Button>
				</div>
			</section>
		</main>
	);
}
