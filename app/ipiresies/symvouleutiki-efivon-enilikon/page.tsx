import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import customImageLoader from '../../utils/imageLoader';

export default function SymvouleutikiEfivonEnilikonPage() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold text-[#047857] mb-6'>
				Συμβουλευτική Εφήβων & Ενηλίκων
			</h1>

			<div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
				<div>
					<p className='text-[#065f46] mb-4'>
						Η συμβουλευτική εφήβων και ενηλίκων είναι μια εξειδικευμένη υπηρεσία
						που στοχεύει στην υποστήριξη ατόμων που αντιμετωπίζουν προκλήσεις
						στην επικοινωνία, τη συμπεριφορά ή την ψυχική υγεία. Στο κέντρο μας,
						προσφέρουμε ένα ασφαλές περιβάλλον για την εξερεύνηση προσωπικών
						ζητημάτων και την ανάπτυξη στρατηγικών αντιμετώπισης.
					</p>
				</div>
				<div className='relative h-64 md:h-96'>
					<Image
						loader={customImageLoader}
						src='https://sjc.microlink.io/vOU9mM_9IWSbm05rMPIvlriFFisO0cznBzTnVvpfTlhgp-_HeU1Mj1A0HB8l666SU82ALLmGJA4z-I7Wux2NkQ.jpeg'
						alt='Συμβουλευτική εφήβων και ενηλίκων'
						fill
						className='rounded-lg object-cover'
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</div>
			</div>

			<h2 className='text-2xl font-semibold text-[#047857] mb-4'>
				Τι περιλαμβάνει η συμβουλευτική εφήβων & ενηλίκων;
			</h2>
			<ul className='list-disc list-inside text-[#065f46] mb-6'>
				<li>Διαχείριση άγχους και στρες</li>
				<li>Αντιμετώπιση κατάθλιψης και συναισθηματικών δυσκολιών</li>
				<li>Βελτίωση κοινωνικών δεξιοτήτων και διαπροσωπικών σχέσεων</li>
				<li>Υποστήριξη σε θέματα αυτοεκτίμησης και αυτοπεποίθησης</li>
				<li>Διαχείριση θυμού και συγκρούσεων</li>
				<li>Υποστήριξη σε μεταβατικές περιόδους της ζωής</li>
			</ul>

			<div className='bg-[#f0fdf4] p-6 rounded-lg mb-8'>
				<h3 className='text-xl font-semibold text-[#047857] mb-3'>
					Η προσέγγισή μας
				</h3>
				<p className='text-[#065f46] mb-4'>
					Οι σύμβουλοί μας χρησιμοποιούν μια ποικιλία θεραπευτικών προσεγγίσεων,
					προσαρμοσμένων στις ανάγκες κάθε ατόμου. Εστιάζουμε στη δημιουργία
					ενός υποστηρικτικού περιβάλλοντος όπου οι έφηβοι και οι ενήλικες
					μπορούν να εξερευνήσουν τις σκέψεις και τα συναισθήματά τους, να
					αναπτύξουν νέες δεξιότητες και να βρουν λύσεις στις προκλήσεις που
					αντιμετωπίζουν.
				</p>
			</div>

			<div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
				<div>
					<h3 className='text-xl font-semibold text-[#047857] mb-3'>
						Εξειδικευμένη υποστήριξη
					</h3>
					<p className='text-[#065f46] mb-4'>
						Προσφέρουμε εξειδικευμένη υποστήριξη για άτομα με μαθησιακές
						δυσκολίες, ΔΕΠΥ, αυτισμό και άλλες νευροαναπτυξιακές διαταραχές. Οι
						σύμβουλοί μας έχουν εκτενή εμπειρία στην εργασία με άτομα που
						αντιμετωπίζουν αυτές τις προκλήσεις και μπορούν να προσφέρουν
						στοχευμένη υποστήριξη για την ενίσχυση της ανεξαρτησίας και της
						ποιότητας ζωής.
					</p>
				</div>
				<div className='relative h-64 md:h-96'>
					<Image
						loader={customImageLoader}
						src='https://sjc.microlink.io/vOU9mM_9IWSbm05rMPIvlriFFisO0cznBzTnVvpfTlhgp-_HeU1Mj1A0HB8l666SU82ALLmGJA4z-I7Wux2NkQ.jpeg'
						alt='Εξειδικευμένη συμβουλευτική'
						fill
						className='rounded-lg object-cover'
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
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
