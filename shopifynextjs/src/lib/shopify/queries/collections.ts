import shopifyClient from '../client';

const GET_COLLECTIONS_QUERY = `
  query GetCollections($first: Int, $after: String) {
    collections(first: $first, after: $after) {
      edges {
        node {
          id
          title
          description
          handle
          image {
            url
            altText
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export async function getCollections({ first = 20, after }: { first?: number; after?: string } = {}) {
  const variables = { first, after };
  const response = await shopifyClient.request(GET_COLLECTIONS_QUERY, variables);
  return response.collections;
}

const GET_COLLECTION_BY_HANDLE_QUERY = `
  query GetCollectionByHandle($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      handle
      image {
        url
        altText
      }
      products(first: 20) {
        edges {
          node {
            id
            title
            description
            handle
            availableForSale
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
            featuredImage {
              url
              altText
            }
          }
        }
      }
    }
  }
`;

export async function getCollectionByHandle(handle: string) {
  const response = await shopifyClient.request(GET_COLLECTION_BY_HANDLE_QUERY, { handle });
  return response.collection;
}