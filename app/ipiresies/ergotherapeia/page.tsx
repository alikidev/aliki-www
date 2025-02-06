import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import customImageLoader from '../../utils/imageLoader';

export default function ErgotherapeiaPage() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold text-[#047857] mb-6'>Εργοθεραπεία</h1>

			<div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
				<div>
					<p className='text-[#065f46] mb-4'>
						Η εργοθεραπεία είναι μια θεραπευτική προσέγγιση που στοχεύει στην
						ενίσχυση της ικανότητας των ατόμων να συμμετέχουν σε καθημερινές
						δραστηριότητες. Στο κέντρο μας, προσφέρουμε εξατομικευμένες
						συνεδρίες εργοθεραπείας για παιδιά και ενήλικες, βοηθώντας τους να
						αναπτύξουν, να ανακτήσουν ή να διατηρήσουν δεξιότητες που είναι
						σημαντικές για την ανεξάρτητη λειτουργία και την ευημερία τους.
					</p>
				</div>
				<div className='relative h-64 md:h-96'>
					<Image
						loader={customImageLoader}
						src='https://sjc.microlink.io/vOU9mM_9IWSbm05rMPIvlriFFisO0cznBzTnVvpfTlhgp-_HeU1Mj1A0HB8l666SU82ALLmGJA4z-I7Wux2NkQ.jpeg'
						alt='Εργοθεραπεία σε εξέλιξη'
						fill
						className='rounded-lg object-cover'
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</div>
			</div>

			<h2 className='text-2xl font-semibold text-[#047857] mb-4'>
				Τι περιλαμβάνει η εργοθεραπεία;
			</h2>
			<ul className='list-disc list-inside text-[#065f46] mb-6'>
				<li>Αξιολόγηση των κινητικών και αισθητηριακών δεξιοτήτων</li>
				<li>Ανάπτυξη λεπτής και αδρής κινητικότητας</li>
				<li>Βελτίωση των δεξιοτήτων καθημερινής διαβίωσης</li>
				<li>Αισθητηριακή ολοκλήρωση</li>
				<li>Προσαρμογή του περιβάλλοντος για καλύτερη λειτουργικότητα</li>
				<li>Υποστήριξη στην ανάπτυξη κοινωνικών δεξιοτήτων</li>
			</ul>

			<div className='bg-[#f0fdf4] p-6 rounded-lg mb-8'>
				<h3 className='text-xl font-semibold text-[#047857] mb-3'>
					Η προσέγγισή μας
				</h3>
				<p className='text-[#065f46] mb-4'>
					Οι εργοθεραπευτές μας χρησιμοποιούν μια ολιστική προσέγγιση,
					λαμβάνοντας υπόψη τις φυσικές, συναισθηματικές και κοινωνικές ανάγκες
					κάθε ατόμου. Στόχος μας είναι να βοηθήσουμε τους πελάτες μας να
					επιτύχουν τη μέγιστη ανεξαρτησία και ποιότητα ζωής.
				</p>
			</div>

			<div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
				<div className='relative h-64 md:h-96'>
					<Image
						loader={customImageLoader}
						src='https://sjc.microlink.io/vOU9mM_9IWSbm05rMPIvlriFFisO0cznBzTnVvpfTlhgp-_HeU1Mj1A0HB8l666SU82ALLmGJA4z-I7Wux2NkQ.jpeg'
						alt='Εξοπλισμός εργοθεραπείας'
						fill
						className='rounded-lg object-cover'
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</div>
				<div>
					<h3 className='text-xl font-semibold text-[#047857] mb-3'>
						Ο εξοπλισμός μας
					</h3>
					<p className='text-[#065f46] mb-4'>
						Το κέντρο μας είναι εξοπλισμένο με σύγχρονα εργαλεία και υλικά
						εργοθεραπείας, επιτρέποντάς μας να προσφέρουμε ένα ευρύ φάσμα
						θεραπευτικών δραστηριοτήτων. Από ειδικά σχεδιασμένα παιχνίδια μέχρι
						εξοπλισμό αισθητηριακής ολοκλήρωσης, έχουμε όλα όσα χρειάζονται για
						να υποστηρίξουμε την πρόοδο των πελατών μας.
					</p>
				</div>
			</div>

			<Button
				asChild
				className='bg-[#10b981] hover:bg-[#059669] text-white'
			>
				<Link href='/contact'>Κλείστε ραντεβού για αξιολόγηση</Link>
			</Button>
		</div>
	);
}
