import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import customImageLoader from '../../utils/imageLoader';

export default function SxolikiEtoimotitaPage() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold text-[#047857] mb-6'>
				Σχολική Ετοιμότητα
			</h1>

			<div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
				<div>
					<p className='text-[#065f46] mb-4'>
						Το πρόγραμμα σχολικής ετοιμότητας στοχεύει στην προετοιμασία των
						παιδιών για μια ομαλή μετάβαση και επιτυχημένη προσαρμογή στο
						σχολικό περιβάλλον. Στο κέντρο μας, προσφέρουμε εξατομικευμένα
						προγράμματα που βοηθούν τα παιδιά να αναπτύξουν τις απαραίτητες
						δεξιότητες για να ξεκινήσουν το σχολείο με αυτοπεποίθηση και
						ενθουσιασμό.
					</p>
				</div>
				<div className='relative h-64 md:h-96'>
					<Image
						loader={customImageLoader}
						src='https://sjc.microlink.io/vOU9mM_9IWSbm05rMPIvlriFFisO0cznBzTnVvpfTlhgp-_HeU1Mj1A0HB8l666SU82ALLmGJA4z-I7Wux2NkQ.jpeg'
						alt='Παιδιά σε δραστηριότητα σχολικής ετοιμότητας'
						fill
						className='rounded-lg object-cover'
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</div>
			</div>

			<h2 className='text-2xl font-semibold text-[#047857] mb-4'>
				Τι περιλαμβάνει το πρόγραμμα σχολικής ετοιμότητας;
			</h2>
			<ul className='list-disc list-inside text-[#065f46] mb-6'>
				<li>
					Ανάπτυξη προ-ακαδημαϊκών δεξιοτήτων (αναγνώριση γραμμάτων, αριθμών,
					σχημάτων, χρωμάτων)
				</li>
				<li>Ενίσχυση γλωσσικών δεξιοτήτων και εμπλουτισμός λεξιλογίου</li>
				<li>Καλλιέργεια λεπτής κινητικότητας για γραφή και ζωγραφική</li>
				<li>Ανάπτυξη κοινωνικών δεξιοτήτων και συναισθηματικής νοημοσύνης</li>
				<li>Εξάσκηση στην ακολουθία οδηγιών και ρουτινών</li>
				<li>Ενίσχυση της συγκέντρωσης και της προσοχής</li>
				<li>Προώθηση της αυτονομίας και της αυτοεξυπηρέτησης</li>
			</ul>

			<div className='bg-[#f0fdf4] p-6 rounded-lg mb-8'>
				<h3 className='text-xl font-semibold text-[#047857] mb-3'>
					Η προσέγγισή μας
				</h3>
				<p className='text-[#065f46] mb-4'>
					Το πρόγραμμά μας βασίζεται σε παιγνιώδεις και διαδραστικές μεθόδους
					μάθησης, προσαρμοσμένες στις ανάγκες και τα ενδιαφέροντα κάθε παιδιού.
					Οι έμπειροι παιδαγωγοί μας δημιουργούν ένα υποστηρικτικό περιβάλλον
					που ενθαρρύνει την εξερεύνηση, τη δημιουργικότητα και την ανάπτυξη
					δεξιοτήτων απαραίτητων για τη σχολική επιτυχία.
				</p>
			</div>

			<div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
				<div className='relative h-64 md:h-96'>
					<Image
						loader={customImageLoader}
						src='https://sjc.microlink.io/vOU9mM_9IWSbm05rMPIvlriFFisO0cznBzTnVvpfTlhgp-_HeU1Mj1A0HB8l666SU82ALLmGJA4z-I7Wux2NkQ.jpeg'
						alt='Παιδί που εξασκείται στη γραφή'
						fill
						className='rounded-lg object-cover'
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</div>
				<div>
					<h3 className='text-xl font-semibold text-[#047857] mb-3'>
						Οφέλη του προγράμματος
					</h3>
					<p className='text-[#065f46] mb-4'>
						Η συμμετοχή στο πρόγραμμα σχολικής ετοιμότητας προσφέρει πολλαπλά
						οφέλη στα παιδιά. Ενισχύει την αυτοπεποίθησή τους, αναπτύσσει
						βασικές δεξιότητες μάθησης, και τα βοηθά να προσαρμοστούν πιο εύκολα
						στο σχολικό περιβάλλον. Επιπλέον, προωθεί τη θετική στάση απέναντι
						στη μάθηση, θέτοντας γερές βάσεις για τη μελλοντική ακαδημαϊκή
						επιτυχία.
					</p>
				</div>
			</div>

			<Button
				asChild
				className='bg-[#10b981] hover:bg-[#059669] text-white'
			>
				<Link href='/contact'>
					Εγγραφείτε στο πρόγραμμα σχολικής ετοιμότητας
				</Link>
			</Button>
		</div>
	);
}
