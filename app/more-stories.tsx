import Link from 'next/link';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';

function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}: {
	title: string;
	coverImage: any;
	date: string;
	excerpt: string;
	author: any;
	slug: string;
}) {
	return (
		<div className='bg-primary-50 rounded-lg shadow-md p-6'>
			<div className='mb-5'>
				<CoverImage
					slug={slug}
					title={title}
					url={coverImage.url}
				/>
			</div>
			<h3 className='text-2xl mb-3 leading-snug font-bold text-primary'>
				<Link
					href={`/posts/${slug}`}
					className='hover:underline'
				>
					{title}
				</Link>
			</h3>
			<div className='text-lg mb-4 text-primary-600'>
				<Date dateString={date} />
			</div>
			<p className='text-lg leading-relaxed mb-4 text-primary-700'>{excerpt}</p>
			{author && (
				<Avatar
					name={author.name}
					picture={author.picture}
				/>
			)}
		</div>
	);
}

export default function MoreStories({
	morePosts,
	showHeading = false,
}: {
	morePosts: any[];
	showHeading?: boolean;
}) {
	return (
		<section>
			{showHeading && (
				<h2 className='text-3xl font-bold text-center mb-8 text-primary'>
					More Stories
				</h2>
			)}
			<div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32'>
				{morePosts.map((post) => (
					<PostPreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</section>
	);
}
