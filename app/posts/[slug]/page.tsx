import { draftMode } from 'next/headers';
import MoreStories from '../../more-stories';
import Avatar from '../../avatar';
import Date from '../../date';
import CoverImage from '../../cover-image';
import { Markdown } from '@/lib/markdown';
import { getPostAndMorePosts } from '@/lib/api';

export default async function PostPage({
	params: paramsPromise,
}: {
	params: Promise<{ slug: string }>;
}) {
	try {
		const params = await paramsPromise;
		const { slug } = params;

		const draftModeState = await draftMode();
		const { isEnabled } = draftModeState || {};

		const { post, morePosts } = await getPostAndMorePosts(slug, isEnabled);

		if (!post) {
			return (
				<div className='text-center text-[#065f46] text-xl'>Post not found</div>
			);
		}

		return (
			<div className='container mx-auto px-5'>
				<article className='bg-white rounded-lg shadow-lg p-6 mb-12'>
					<h1 className='mb-8 text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-center text-[#047857]'>
						{post.title}
					</h1>

					<div className='mb-8 md:mb-16 flex justify-center'>
						<CoverImage
							title={post.title}
							url={post.coverImage.url}
						/>
					</div>

					<div className='mx-auto max-w-2xl'>
						<div className='mb-6 flex justify-center'>
							{post.author && (
								<Avatar
									name={post.author.name}
									picture={post.author.picture}
								/>
							)}
						</div>
						<div className='mb-6 text-lg text-center text-[#065f46]'>
							<Date dateString={post.date} />
						</div>
					</div>

					<div className='mx-auto max-w-2xl'>
						<div className='prose prose-green'>
							<Markdown content={post.content} />
						</div>
					</div>
				</article>

				<hr className='border-[#bbf7d0] my-12' />

				{morePosts.length > 0 && (
					<MoreStories
						morePosts={morePosts}
						showHeading={true}
					/>
				)}
			</div>
		);
	} catch (error) {
		console.error('Error rendering post page:', error);
		return (
			<div className='text-center text-[#065f46] text-xl'>
				Error loading the post. Please try again later.
			</div>
		);
	}
}
