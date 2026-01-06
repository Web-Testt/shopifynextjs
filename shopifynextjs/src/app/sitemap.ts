import { MetadataRoute } from 'next';
import { getProducts } from '@/lib/shopify/queries/products';
import { getCollections } from '@/lib/shopify/queries/collections';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shopifynext.com';

  // Static pages
  const staticPages = [
    '',
    'products',
    'collections',
    'deals',
    'search',
    'cart',
    'account',
    'about',
    'contact',
    'faq',
    'privacy',
    'returns',
    'accessibility',
  ];

  // Get dynamic product pages
  const productsResponse = await getProducts({ first: 100 });
  const products = productsResponse.edges.map(edge => edge.node);

  // Get dynamic collection pages
  const collectionsResponse = await getCollections({ first: 50 });
  const collections = collectionsResponse.edges.map(edge => edge.node);

  const staticSitemapEntries = staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1.0 : 0.8,
  }));

  const productSitemapEntries = products.map((product) => ({
    url: `${baseUrl}/products/${product.handle}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const collectionSitemapEntries = collections.map((collection) => ({
    url: `${baseUrl}/collections/${collection.handle}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    ...staticSitemapEntries,
    ...productSitemapEntries,
    ...collectionSitemapEntries,
  ];
}