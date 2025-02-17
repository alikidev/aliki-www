import { draftMode } from 'next/headers';
import { getPageData } from '@/lib/api';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import customImageLoader from '../../utils/imageLoader';

const options = {
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node: any, children: any) => (
			<p className='mb-4'>{children}</p>
		),
		[BLOCKS.HEADING_1]: (node: any, children: any) => (
			<h1 className='text-4xl font-bold mb-4'>{children}</h1>
		),
		[BLOCKS.HEADING_2]: (node: any, children: any) => (
			<h2 className='text-3xl font-bold mb-3'>{children}</h2>
		),
		[BLOCKS.HEADING_3]: (node: any, children: any) => (
			<h3 className='text-2xl font-bold mb-2'>{children}</h3>
		),
		[BLOCKS.UL_LIST]: (node: any, children: any) => (
			<ul className='list-disc pl-6 mb-4 space-y-2'>{children}</ul>
		),
		[BLOCKS.OL_LIST]: (node: any, children: any) => (
			<ol className='list-decimal pl-6 mb-4 space-y-2'>{children}</ol>
		),
		[BLOCKS.LIST_ITEM]: (node: any, children: any) => (
			<li className='pl-2'>{children}</li>
		),
		[BLOCKS.EMBEDDED_ASSET]: (node: any) => {
			const { url, description } = node.data.target;
			return (
				<Image
					loader={customImageLoader}
					src={url || '/placeholder.svg'}
					alt={description || ''}
					width={800}
					height={600}
					className='rounded-lg w-full h-full object-cover mb-4'
				/>
			);
		},
	},
	renderMark: {
		[MARKS.BOLD]: (text: any) => <strong className='font-bold'>{text}</strong>,
		[MARKS.ITALIC]: (text: any) => <em className='italic'>{text}</em>,
		[MARKS.UNDERLINE]: (text: any) => <u className='underline'>{text}</u>,
	},
};

export default async function SymvouleutikiEfivonEnilikonPage() {
	const { isEnabled: isDraftMode } = draftMode();
	const pageData = await getPageData(
		'symvouleutiki-efivon-enilikon',
		isDraftMode,
	);

	if (!pageData) {
		return <div>Loading...</div>;
	}

	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold text-[#047857] mb-6'>
				{pageData.title}
			</h1>

			<div className='grid md:grid-cols-2 gap-8 items-start mb-8'>
				<div className='prose prose-green max-w-none'>
					{documentToReactComponents(pageData.content.json, options)}
				</div>
				<div className='w-full aspect-[4/3] sticky top-8'>
					{pageData.mainImage && (
						<Image
							loader={customImageLoader}
							src={pageData.mainImage.url || '/placeholder.svg'}
							alt={pageData.mainImage.description || ''}
							width={800}
							height={600}
							className='rounded-lg w-full h-full object-cover'
						/>
					)}
				</div>
			</div>

			<h2 className='text-2xl font-semibold text-[#047857] mb-4'>
				{pageData.secondaryTitle}
			</h2>
			<ul className='list-disc pl-6 text-[#065f46] mb-6 space-y-2'>
				{pageData.bulletPoints.map((point: string, index: number) => (
					<li
						key={index}
						className='pl-2'
					>
						{point}
					</li>
				))}
			</ul>

			<div className='bg-[#f0fdf4] p-6 rounded-lg mb-8'>
				<h3 className='text-xl font-semibold text-[#047857] mb-3'>
					{pageData.calloutTitle}
				</h3>
				<p className='text-[#065f46] mb-4'>{pageData.calloutContent}</p>
			</div>

			<Button
				asChild
				className='bg-[#10b981] hover:bg-[#059669] text-white'
			>
				<Link href='/contact'>{pageData.ctaText}</Link>
			</Button>
		</div>
	);
}
