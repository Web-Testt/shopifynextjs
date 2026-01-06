import { getCollections } from '@/lib/shopify/queries/collections';
import Link from 'next/link';

export default async function CollectionsPage() {
  const collections = await getCollections({ first: 20 });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">All Collections</h1>
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
    </div>
  );
}