import shopifyClient from '../client';

const GET_SEARCH_SUGGESTIONS_QUERY = `
  query GetSearchSuggestions($query: String!) {
    products(first: 5, query: $query) {
      edges {
        node {
          id
          title
          handle
          featuredImage {
            url
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
    collections(first: 5, query: $query) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`;

export async function getSearchSuggestions(query: string) {
  const response = await shopifyClient.request(GET_SEARCH_SUGGESTIONS_QUERY, { query });
  
  const products = response.products.edges.map((edge: any) => ({
    type: 'product',
    id: edge.node.id,
    title: edge.node.title,
    handle: edge.node.handle,
    image: edge.node.featuredImage?.url,
    price: edge.node.priceRange.minVariantPrice,
  }));

  const collections = response.collections.edges.map((edge: any) => ({
    type: 'collection',
    id: edge.node.id,
    title: edge.node.title,
    handle: edge.node.handle,
  }));

  return [...products, ...collections];
}