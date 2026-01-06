import { getCollectionByHandle } from '@/lib/shopify/queries/collections';
import ProductCard from '@/components/Product/ProductCard';

export default async function CollectionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const collection = await getCollectionByHandle(params.slug);

  if (!collection) {
    return <div>Collection not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        {collection.image && (
          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 relative">
            <img
              src={collection.image.url}
              alt={collection.image.altText || collection.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
        <h1 className="text-3xl font-bold mb-2">{collection.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {collection.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collection.products.edges.map(({ node }) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </div>
    </div>
  );
}