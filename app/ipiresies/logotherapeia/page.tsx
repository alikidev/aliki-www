import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import customImageLoader from '../../utils/imageLoader';

export default function LogotherapeiaPage() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold text-[#047857] mb-6'>Λογοθεραπεία</h1>

			<div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
				<div>
					<p className='text-[#065f46] mb-4'>
						Η λογοθεραπεία είναι μια εξειδικευμένη θεραπευτική προσέγγιση που
						στοχεύει στη βελτίωση της επικοινωνίας και της ομιλίας. Στο κέντρο
						μας, προσφέρουμε εξατομικευμένες συνεδρίες λογοθεραπείας για παιδιά
						και ενήλικες, αντιμετωπίζοντας ένα ευρύ φάσμα διαταραχών ομιλίας και
						γλώσσας.
					</p>
					<p className='text-[#065f46] mb-4'>
						Οι έμπειροι λογοθεραπευτές μας χρησιμοποιούν σύγχρονες τεχνικές και
						εργαλεία για να βοηθήσουν τους πελάτες μας να ξεπεράσουν δυσκολίες
						στην άρθρωση, τη ροή της ομιλίας, την κατανόηση και την έκφραση της
						γλώσσας.
					</p>
				</div>
				<div className='w-full aspect-[4/3]'>
					<Image
						loader={customImageLoader}
						src='https://sjc.microlink.io/vOU9mM_9IWSbm05rMPIvlriFFisO0cznBzTnVvpfTlhgp-_HeU1Mj1A0HB8l666SU82ALLmGJA4z-I7Wux2NkQ.jpeg'
						alt='Λογοθεραπεία σε εξέλιξη'
						width={800}
						height={600}
						className='rounded-lg w-full h-full object-cover'
					/>
				</div>
			</div>

			<h2 className='text-2xl font-semibold text-[#047857] mb-4'>
				Τι περιλαμβάνει η λογοθεραπεία;
			</h2>
			<ul className='list-disc list-inside text-[#065f46] mb-6'>
				<li>Αξιολόγηση και διάγνωση διαταραχών ομιλίας και γλώσσας</li>
				<li>Εξατομικευμένα προγράμματα θεραπείας</li>
				<li>Ασκήσεις άρθρωσης και φωνολογίας</li>
				<li>Τεχνικές βελτίωσης της ροής της ομιλίας</li>
				<li>Ενίσχυση των γλωσσικών δεξιοτήτων</li>
				<li>Υποστήριξη σε δυσκολίες κατάποσης</li>
			</ul>

			<div className='bg-[#f0fdf4] p-6 rounded-lg mb-8'>
				<h3 className='text-xl font-semibold text-[#047857] mb-3'>
					Γιατί να επιλέξετε εμάς;
				</h3>
				<p className='text-[#065f46] mb-4'>
					Στο κέντρο μας, προσφέρουμε ένα υποστηρικτικό και φιλικό περιβάλλον
					όπου κάθε άτομο λαμβάνει εξατομικευμένη φροντίδα. Οι θεραπευτές μας
					είναι πλήρως καταρτισμένοι και χρησιμοποιούν τις πιο σύγχρονες
					μεθόδους λογοθεραπείας.
				</p>
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
