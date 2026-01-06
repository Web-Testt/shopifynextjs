import { getProducts } from '@/lib/shopify/queries/products';
import { getCollections } from '@/lib/shopify/queries/collections';
import ProductCard from '@/components/Product/ProductCard';
import Link from 'next/link';

export default async function HomePage() {
  const products = await getProducts({ first: 8 });
  const collections = await getCollections({ first: 4 });

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to ShopifyNext</h1>
          <p className="text-xl mb-6">Discover amazing products at unbeatable prices</p>
          <Link href="/products" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.edges.map(({ node }) => (
            <Link
              key={node.id}
              href={`/collections/${node.handle}`}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-lg transition"
            >
              {node.image && (
                <div className="aspect-square mb-4 bg-gray-100 dark:bg-gray-800 rounded">
                  <img
                    src={node.image.url}
                    alt={node.image.altText || node.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              )}
              <h3 className="font-semibold mb-2">{node.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {node.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.edges.map(({ node }) => (
            <ProductCard key={node.id} product={node} />
          ))}
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Ready to shop?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Browse our full catalog of amazing products
        </p>
        <Link href="/products" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
          View All Products
        </Link>
      </section>
    </div>
  );
}