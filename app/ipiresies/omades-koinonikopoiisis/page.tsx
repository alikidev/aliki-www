import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import customImageLoader from '../../utils/imageLoader';

export default function OmadesKoinonikopoiisisPage() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold text-[#047857] mb-6'>
				Ομάδες Κοινωνικοποίησης
			</h1>

			<div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
				<div>
					<p className='text-[#065f46] mb-4'>
						Οι ομάδες κοινωνικοποίησης είναι σχεδιασμένες για να βοηθήσουν
						παιδιά και εφήβους να αναπτύξουν και να βελτιώσουν τις κοινωνικές
						τους δεξιότητες σε ένα υποστηρικτικό και δομημένο περιβάλλον. Στο
						κέντρο μας, προσφέρουμε ποικίλες ομάδες που καλύπτουν διαφορετικές
						ηλικίες και ανάγκες.
					</p>
				</div>
				<div className='relative h-64 md:h-96'>
					<Image
						loader={customImageLoader}
						src='https://sjc.microlink.io/vOU9mM_9IWSbm05rMPIvlriFFisO0cznBzTnVvpfTlhgp-_HeU1Mj1A0HB8l666SU82ALLmGJA4z-I7Wux2NkQ.jpeg'
						alt='Ομάδα κοινωνικοποίησης σε δράση'
						fill
						className='rounded-lg object-cover'
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</div>
			</div>

			<h2 className='text-2xl font-semibold text-[#047857] mb-4'>
				Τι περιλαμβάνουν οι ομάδες κοινωνικοποίησης;
			</h2>
			<ul className='list-disc list-inside text-[#065f46] mb-6'>
				<li>Ανάπτυξη δεξιοτήτων επικοινωνίας</li>
				<li>Εξάσκηση στην αναγνώριση και έκφραση συναισθημάτων</li>
				<li>Ενίσχυση της ενσυναίσθησης και της κατανόησης των άλλων</li>
				<li>
					Εκμάθηση τεχνικών επίλυσης προβλημάτων και διαχείρισης συγκρούσεων
				</li>
				<li>Ανάπτυξη δεξιοτήτων συνεργασίας και ομαδικής εργασίας</li>
				<li>Ενίσχυση της αυτοπεποίθησης και της αυτοεκτίμησης</li>
			</ul>

			<div className='bg-[#f0fdf4] p-6 rounded-lg mb-8'>
				<h3 className='text-xl font-semibold text-[#047857] mb-3'>
					Η προσέγγισή μας
				</h3>
				<p className='text-[#065f46] mb-4'>
					Οι ομάδες μας καθοδηγούνται από έμπειρους επαγγελματίες που
					χρησιμοποιούν διαδραστικές και διασκεδαστικές δραστηριότητες για να
					διδάξουν και να ενισχύσουν κοινωνικές δεξιότητες. Χρησιμοποιούμε
					παιχνίδια ρόλων, συζητήσεις, τέχνη και άλλες δημιουργικές μεθόδους για
					να εμπλέξουμε τους συμμετέχοντες και να προωθήσουμε τη μάθηση σε ένα
					ασφαλές και υποστηρικτικό περιβάλλον.
				</p>
			</div>

			<div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
				<div className='relative h-64 md:h-96'>
					<Image
						loader={customImageLoader}
						src='https://sjc.microlink.io/vOU9mM_9IWSbm05rMPIvlriFFisO0cznBzTnVvpfTlhgp-_HeU1Mj1A0HB8l666SU82ALLmGJA4z-I7Wux2NkQ.jpeg'
						alt='Παιδιά σε ομαδική δραστηριότητα'
						fill
						className='rounded-lg object-cover'
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</div>
				<div>
					<h3 className='text-xl font-semibold text-[#047857] mb-3'>
						Οφέλη των ομάδων κοινωνικοποίησης
					</h3>
					<p className='text-[#065f46] mb-4'>
						Η συμμετοχή σε ομάδες κοινωνικοποίησης μπορεί να έχει πολλαπλά οφέλη
						για τα παιδιά και τους εφήβους. Βοηθά στη βελτίωση της
						αυτοπεποίθησης, στην ανάπτυξη φιλιών, στη μείωση του κοινωνικού
						άγχους και στην προετοιμασία για επιτυχημένες κοινωνικές
						αλληλεπιδράσεις στο σχολείο και στην καθημερινή ζωή.
					</p>
				</div>
			</div>

			<Button
				asChild
				className='bg-[#10b981] hover:bg-[#059669] text-white'
			>
				<Link href='/contact'>Εγγραφείτε σε μια ομάδα κοινωνικοποίησης</Link>
			</Button>
		</div>
	);
}
