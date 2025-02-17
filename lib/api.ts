const POST_GRAPHQL_FIELDS = `
  slug
  title
  date
  author {
    ... on Author {
      name
      picture {
        url
      }
    }
  }
  excerpt
  coverImage {
    url
  }
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

const PAGE_GRAPHQL_FIELDS = `
  slug
  title
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  mainImage {
    url
    description
  }
  secondaryTitle
  bulletPoints
  calloutTitle
  calloutContent
  ctaText
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
	try {
		const response = await fetch(
			`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${
						preview
							? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
							: process.env.CONTENTFUL_ACCESS_TOKEN
					}`,
				},
				body: JSON.stringify({ query }),
				next: { tags: ['posts', 'pages'] },
			},
		);

		const jsonResponse = await response.json();
		return jsonResponse;
	} catch (error) {
		console.error('Error fetching from Contentful GraphQL API:', error);
		throw error;
	}
}

function extractPost(fetchResponse: any): any {
	return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
	return fetchResponse?.data?.postCollection?.items || [];
}

function extractPage(fetchResponse: any): any {
	return fetchResponse?.data?.pageCollection?.items?.[0];
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
	const query = `
    query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }
  `;
	const entry = await fetchGraphQL(query, true);
	return extractPost(entry);
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
	const query = `
    query {
      postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
				isDraftMode ? 'true' : 'false'
			}, limit: 5) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }
  `;

	try {
		const entries = await fetchGraphQL(query, isDraftMode);
		const posts = extractPostEntries(entries);

		if (!posts || posts.length === 0) {
			console.error(
				'No posts found. Please ensure your Contentful space contains published posts.',
			);
			return [];
		}

		return posts;
	} catch (error) {
		console.error('Error fetching posts:', error);
		return [];
	}
}

export async function getPostAndMorePosts(
	slug: string,
	preview: boolean,
): Promise<any> {
	const postQuery = `
    query {
      postCollection(where: { slug: "${slug}" }, preview: ${
		preview ? 'true' : 'false'
	}, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }
  `;

	const morePostsQuery = `
    query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
		preview ? 'true' : 'false'
	}, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }
  `;

	const postEntry = await fetchGraphQL(postQuery, preview);
	const morePostsEntries = await fetchGraphQL(morePostsQuery, preview);

	return {
		post: extractPost(postEntry),
		morePosts: extractPostEntries(morePostsEntries),
	};
}

export async function getPageData(
	slug: string,
	preview: boolean,
): Promise<any> {
	const query = `
    query {
      pageCollection(where: { slug: "${slug}" }, preview: ${
		preview ? 'true' : 'false'
	}, limit: 1) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }
  `;

	const pageEntry = await fetchGraphQL(query, preview);
	return extractPage(pageEntry);
}
