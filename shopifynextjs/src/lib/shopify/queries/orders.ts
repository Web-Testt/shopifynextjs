import shopifyClient from '../client';

const GET_ORDER_BY_ID_QUERY = `
  query GetOrderById($orderId: ID!) {
    order(id: $orderId) {
      id
      name
      orderNumber
      processedAt
      financialStatus
      fulfillmentStatus
      totalPrice {
        amount
        currencyCode
      }
      lineItems(first: 100) {
        edges {
          node {
            title
            quantity
            variant {
              title
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
      shippingAddress {
        name
        address1
        address2
        city
        province
        country
        zip
      }
    }
  }
`;

export async function getOrderById(orderId: string) {
  const response = await shopifyClient.request(GET_ORDER_BY_ID_QUERY, { orderId });
  return response.order;
}