import { draftMode } from 'next/headers';
import { getAllPosts } from '@/lib/api';
import MoreStories from '../more-stories';

export default async function Page() {
	const { isEnabled } = await draftMode();
	const allPosts = await getAllPosts(isEnabled);

	if (allPosts.length === 0) {
		return (
			<div className='text-center text-primary text-xl'>No posts found.</div>
		);
	}

	return (
		<div className='container mx-auto px-5'>
			<h1 className='text-4xl md:text-5xl font-bold text-center mb-12 text-primary'>
				Our Blog
			</h1>
			<MoreStories morePosts={allPosts} />
		</div>
	);
}
