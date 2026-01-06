import shopifyClient from '../client';

const GET_PRODUCTS_QUERY = `
  query GetProducts(
    $first: Int,
    $after: String,
    $query: String,
    $filters: [ProductFilter!],
    $sortKey: ProductSortKeys
  ) {
    products(
      first: $first,
      after: $after,
      query: $query,
      filters: $filters,
      sortKey: $sortKey
    ) {
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
          images(first: 10) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 100) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
          tags
          metafields(first: 20) {
            edges {
              node {
                key
                value
                namespace
              }
            }
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

export async function getProducts({
  first = 20,
  after,
  query,
  filters,
  sortKey,
}: {
  first?: number;
  after?: string;
  query?: string;
  filters?: any[];
  sortKey?: string;
} = {}) {
  const variables = {
    first,
    after,
    query,
    filters,
    sortKey,
  };

  const response = await shopifyClient.request(GET_PRODUCTS_QUERY, variables);
  return response.products;
}

const GET_PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
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
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 100) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            inventoryQuantity
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
      tags
      metafields(first: 20) {
        edges {
          node {
            key
            value
            namespace
          }
        }
      }
    }
  }
`;

export async function getProductByHandle(handle: string) {
  const response = await shopifyClient.request(GET_PRODUCT_BY_HANDLE_QUERY, { handle });
  return response.product;
}

const GET_PRODUCT_BY_ID_QUERY = `
  query GetProductById($id: ID!) {
    product(id: $id) {
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
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 100) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
      tags
      metafields(first: 20) {
        edges {
          node {
            key
            value
            namespace
          }
        }
      }
    }
  }
`;

export async function getProductById(id: string) {
  const response = await shopifyClient.request(GET_PRODUCT_BY_ID_QUERY, { id });
  return response.product;
}