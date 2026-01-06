import { getProducts } from '@/lib/shopify/queries/products';
import ProductCard from '@/components/Product/ProductCard';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = typeof searchParams.q === 'string' ? searchParams.q : '';
  const products = await getProducts({ query, first: 20 });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for "{query}"
      </h1>
      {products.edges.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No products found matching your search.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.edges.map(({ node }) => (
            <ProductCard key={node.id} product={node} />
          ))}
        </div>
      )}
    </div>
  );
}