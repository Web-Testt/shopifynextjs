import shopifyClient from '../client';
import { cookies } from 'next/headers';

const CART_COOKIE_NAME = 'shopify_cart_id';

const CREATE_CART_MUTATION = `
  mutation CreateCart {
    cartCreate {
      cart {
        id
      }
    }
  }
`;

export async function createCart() {
  const response = await shopifyClient.request(CREATE_CART_MUTATION);
  const cartId = response.cartCreate.cart.id;
  
  cookies().set(CART_COOKIE_NAME, cartId, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
    sameSite: 'strict',
  });
  
  return getCart(cartId);
}

const ADD_TO_CART_MUTATION = `
  mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                id
                title
                price {
                  amount
                  currencyCode
                }
                product {
                  id
                  title
                  handle
                  featuredImage {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        discountCodes {
          code
          applicable
        }
      }
    }
  }
`;

export async function addToCart(variantId: string, quantity: number, cartId: string) {
  const variables = {
    cartId,
    lines: [
      {
        merchandiseId: variantId,
        quantity,
      },
    ],
  };

  const response = await shopifyClient.request(ADD_TO_CART_MUTATION, variables);
  return response.cartLinesAdd.cart;
}

const GET_CART_QUERY = `
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            merchandise {
              id
              title
              price {
                amount
                currencyCode
              }
              product {
                id
                title
                handle
                featuredImage {
                  url
                  altText
                }
              }
            }
          }
        }
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
      }
      discountCodes {
        code
        applicable
      }
    }
  }
`;

export async function getCart(cartId?: string) {
  const cartCookie = cookies().get(CART_COOKIE_NAME);
  const id = cartId || cartCookie?.value;
  
  if (!id) return null;

  try {
    const response = await shopifyClient.request(GET_CART_QUERY, { cartId: id });
    return response.cart;
  } catch (error) {
    return null;
  }
}

const UPDATE_CART_MUTATION = `
  mutation UpdateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                id
                title
                price {
                  amount
                  currencyCode
                }
                product {
                  id
                  title
                  handle
                  featuredImage {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        discountCodes {
          code
          applicable
        }
      }
    }
  }
`;

export async function updateCart(cartId: string, lineId: string, quantity: number) {
  const variables = {
    cartId,
    lines: [
      {
        id: lineId,
        quantity,
      },
    ],
  };

  const response = await shopifyClient.request(UPDATE_CART_MUTATION, variables);
  return response.cartLinesUpdate.cart;
}

const REMOVE_FROM_CART_MUTATION = `
  mutation RemoveFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                id
                title
                price {
                  amount
                  currencyCode
                }
                product {
                  id
                  title
                  handle
                  featuredImage {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        discountCodes {
          code
          applicable
        }
      }
    }
  }
`;

export async function removeFromCart(cartId: string, lineId: string) {
  const variables = {
    cartId,
    lineIds: [lineId],
  };

  const response = await shopifyClient.request(REMOVE_FROM_CART_MUTATION, variables);
  return response.cartLinesRemove.cart;
}