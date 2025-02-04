import Link from 'next/link';
import { draftMode } from 'next/headers';
import MoreStories from '../../more-stories';
import Avatar from '../../avatar';
import Date from '../../date';
import CoverImage from '../../cover-image';
import { Markdown } from '@/lib/markdown';
import { getAllPosts, getPostAndMorePosts } from '@/lib/api';

export default async function PostPage({
	params: paramsPromise,
}: {
	params: Promise<{ slug: string }>;
}) {
	try {
		// Await params to resolve it
		const params = await paramsPromise;
		const { slug } = params;

		// Resolve draft mode state
		const draftModeState = await draftMode();
		const { isEnabled } = draftModeState || {};

		// Fetch the post and additional posts
		const { post, morePosts } = await getPostAndMorePosts(slug, isEnabled);

		// Handle the case where the post is not found
		if (!post) {
			return <div>Post not found</div>;
		}

		return (
			<div className='container mx-auto px-5'>
				<article>
					<h1 className='mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl'>
						{post.title}
					</h1>

					<div className='hidden md:mb-12 md:block'>
						{post.author && (
							<Avatar
								name={post.author.name}
								picture={post.author.picture}
							/>
						)}
					</div>

					<div className='mb-8 sm:mx-0 md:mb-16'>
						<CoverImage
							title={post.title}
							url={post.coverImage.url}
						/>
					</div>

					<div className='mx-auto max-w-2xl'>
						<div className='mb-6 block md:hidden'>
							{post.author && (
								<Avatar
									name={post.author.name}
									picture={post.author.picture}
								/>
							)}
						</div>
						<div className='mb-6 text-lg'>
							<Date dateString={post.date} />
						</div>
					</div>

					<div className='mx-auto max-w-2xl'>
						<div className='prose'>
							<Markdown content={post.content} />
						</div>
					</div>
				</article>

				<hr className='border-accent-2 mt-28 mb-24' />

				<MoreStories morePosts={morePosts} />
			</div>
		);
	} catch (error) {
		console.error('Error rendering post page:', error);
		return <div>Error loading the post. Please try again later.</div>;
	}
}
