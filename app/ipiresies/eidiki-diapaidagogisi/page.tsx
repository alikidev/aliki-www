import Image from 'next/image';
import customImageLoader from '../../utils/imageLoader';

export default function EidikiDiapaidagogisiPage() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold text-[#047857] mb-6'>
				Ειδική Διαπαιδαγώγηση
			</h1>

			<div className='grid md:grid-cols-2 gap-8 items-center mb-8'>
				<div>
					<p className='text-[#065f46] mb-4'>
						Η ειδική διαπαιδαγώγηση είναι μια εξειδικευμένη εκπαιδευτική
						προσέγγιση που στοχεύει στην υποστήριξη παιδιών με ειδικές
						εκπαιδευτικές ανάγκες. Στο κέντρο μας, προσφέρουμε εξατομικευμένα
						προγράμματα που βοηθούν τα παιδιά να αναπτύξουν τις δεξιότητές τους
						και να ξεπεράσουν τις μαθησιακές τους δυσκολίες.
					</p>
				</div>
				<div className='relative h-64 md:h-96'>
					<Image
						loader={customImageLoader}
						src='https://sjc.microlink.io/vOU9mM_9IWSbm05rMPIvlriFFisO0cznBzTnVvpfTlhgp-_HeU1Mj1A0HB8l666SU82ALLmGJA4z-I7Wux2NkQ.jpeg'
						alt='Ειδική διαπαιδαγώγηση σε εξέλιξη'
						fill
						className='rounded-lg object-cover'
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</div>
			</div>

			<h2 className='text-2xl font-semibold text-[#047857] mb-4'>
				Τι περιλαμβάνει η ειδική διαπαιδαγώγηση;
			</h2>
			<ul className='list-disc list-inside text-[#065f46] mb-6'>
				<li>Εξατομικευμένα εκπαιδευτικά προγράμματα</li>
				<li>Ανάπτυξη γνωστικών και μαθησιακών δεξιοτήτων</li>
				<li>Υποστήριξη σε μαθησιακές δυσκολίες</li>
				<li>Ενίσχυση της συγκέντρωσης και της προσοχής</li>
				<li>Βελτίωση των κοινωνικών δεξιοτήτων</li>
				<li>Προετοιμασία για την ένταξη στο σχολικό περιβάλλον</li>
			</ul>

			<div className='bg-[#f0fdf4] p-6 rounded-lg mb-8'>
				<h3 className='text-xl font-semibold text-[#047857] mb-3'>
					Η μεθοδολογία μας
				</h3>
				<p className='text-[#065f46] mb-4'>
					Οι ειδικοί παιδαγωγοί μας χρησιμοποιούν σύγχρονες εκπαιδευτικές
					μεθόδους και τεχνολογίες για να δημιουργήσουν ένα υποστηρικτικό και
					ενθαρρυντικό περιβάλλον μάθησης. Κάθε πρόγραμμα προσαρμόζεται στις
					μοναδικές ανάγκες και δυνατότητες του κάθε παιδιού, με στόχο την
					ολοκληρωμένη ανάπτυξή του.
				</p>
			</div>
		</div>
	);
}
