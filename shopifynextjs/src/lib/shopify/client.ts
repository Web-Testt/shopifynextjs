import { storefrontApiClient } from '@shopify/storefront-api-client';

const shopifyClient = storefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL!,
  apiVersion: '2024-07',
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
});

export default shopifyClient;