import shopifyClient from '../client';

const GET_CUSTOMER_ORDERS_QUERY = `
  query GetCustomerOrders($customerId: ID!) {
    customer(id: $customerId) {
      orders(first: 20) {
        edges {
          node {
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
            lineItems(first: 10) {
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
          }
        }
      }
    }
  }
`;

export async function getCustomerOrders(customerId: string) {
  const response = await shopifyClient.request(GET_CUSTOMER_ORDERS_QUERY, { customerId });
  return response.customer.orders.edges.map((edge: any) => edge.node);
}