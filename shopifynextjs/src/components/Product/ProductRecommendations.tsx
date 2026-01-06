import { getProducts } from '@/lib/shopify/queries/products';
import ProductCard from './ProductCard';

export async function ProductRecommendations() {
  const products = await getProducts({ first: 4 });

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.edges.map(({ node }) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </div>
    </section>
  );
}