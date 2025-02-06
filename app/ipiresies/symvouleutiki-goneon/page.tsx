import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import customImageLoader from '../../utils/imageLoader';

export default function SymvouleutikiGoneonPage() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold text-[#047857] mb-6'>
				Συμβουλευτική Γονέων
			</h1>

			<div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
				<div>
					<p className='text-[#065f46] mb-4'>
						Η συμβουλευτική γονέων είναι μια υπηρεσία που στοχεύει στην
						υποστήριξη και ενδυνάμωση των γονέων στο ρόλο τους. Στο κέντρο μας,
						προσφέρουμε καθοδήγηση και πρακτικές συμβουλές για την αντιμετώπιση
						των προκλήσεων της ανατροφής των παιδιών, ιδιαίτερα όταν υπάρχουν
						ειδικές ανάγκες ή μαθησιακές δυσκολίες.
					</p>
				</div>
				<div className='relative h-64 md:h-96'>
					<Image
						loader={customImageLoader}
						src='https://sjc.microlink.io/vOU9mM_9IWSbm05rMPIvlriFFisO0cznBzTnVvpfTlhgp-_HeU1Mj1A0HB8l666SU82ALLmGJA4z-I7Wux2NkQ.jpeg'
						alt='Συμβουλευτική γονέων σε εξέλιξη'
						fill
						className='rounded-lg object-cover'
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</div>
			</div>

			<h2 className='text-2xl font-semibold text-[#047857] mb-4'>
				Τι περιλαμβάνει η συμβουλευτική γονέων;
			</h2>
			<ul className='list-disc list-inside text-[#065f46] mb-6'>
				<li>Εκπαίδευση σε τεχνικές διαχείρισης συμπεριφοράς</li>
				<li>Στρατηγικές για την ενίσχυση της επικοινωνίας με το παιδί</li>
				<li>Υποστήριξη στη διαχείριση του άγχους και των συναισθημάτων</li>
				<li>Καθοδήγηση για την προώθηση της ανάπτυξης του παιδιού στο σπίτι</li>
				<li>
					Συμβουλές για τη δημιουργία ενός υποστηρικτικού οικογενειακού
					περιβάλλοντος
				</li>
				<li>
					Ενημέρωση για τα δικαιώματα και τις παροχές για παιδιά με ειδικές
					ανάγκες
				</li>
			</ul>

			<div className='bg-[#f0fdf4] p-6 rounded-lg mb-8'>
				<h3 className='text-xl font-semibold text-[#047857] mb-3'>
					Η προσέγγισή μας
				</h3>
				<p className='text-[#065f46] mb-4'>
					Οι σύμβουλοί μας εργάζονται σε στενή συνεργασία με τους γονείς,
					προσφέροντας ένα ασφαλές και εμπιστευτικό περιβάλλον για να μοιραστούν
					τις ανησυχίες τους. Στόχος μας είναι να ενδυναμώσουμε τους γονείς, να
					ενισχύσουμε τις δεξιότητές τους και να τους βοηθήσουμε να
					δημιουργήσουν μια θετική και υποστηρικτική σχέση με τα παιδιά τους.
				</p>
			</div>

			<div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
				<div className='relative h-64 md:h-96'>
					<Image
						loader={customImageLoader}
						src='https://sjc.microlink.io/vOU9mM_9IWSbm05rMPIvlriFFisO0cznBzTnVvpfTlhgp-_HeU1Mj1A0HB8l666SU82ALLmGJA4z-I7Wux2NkQ.jpeg'
						alt='Ομάδα υποστήριξης γονέων'
						fill
						className='rounded-lg object-cover'
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</div>
				<div>
					<h3 className='text-xl font-semibold text-[#047857] mb-3'>
						Ομάδες υποστήριξης
					</h3>
					<p className='text-[#065f46] mb-4'>
						Εκτός από τις ατομικές συνεδρίες, προσφέρουμε και ομάδες υποστήριξης
						γονέων. Αυτές οι ομάδες παρέχουν ένα φόρουμ για τους γονείς να
						μοιραστούν τις εμπειρίες τους, να μάθουν ο ένας από τον άλλον και να
						δημιουργήσουν ένα δίκτυο υποστήριξης.
					</p>
				</div>
			</div>

			<Button
				asChild
				className='bg-[#10b981] hover:bg-[#059669] text-white'
			>
				<Link href='/contact'>Κλείστε ραντεβού για συμβουλευτική</Link>
			</Button>
		</div>
	);
}
