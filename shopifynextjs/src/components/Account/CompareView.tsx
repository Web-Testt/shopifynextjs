import { prisma } from '@/lib/db/client';
import { getProductById } from '@/lib/shopify/queries/products';
import { Button } from '../ui/Button';

export async function CompareView({ userId }: { userId: string }) {
  const compareItems = await prisma.compare.findMany({
    where: { userId },
  });

  if (compareItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          Your comparison list is empty.
        </p>
      </div>
    );
  }

  const products = await Promise.all(
    compareItems.flatMap(item => 
      item.productIds.map(async (productId) => {
        try {
          const product = await getProductById(productId);
          return product;
        } catch (error) {
          return null;
        }
      })
    )
  );

  const validProducts = products.filter(Boolean);

  if (validProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          No products found in your comparison list.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <th className="p-4 text-left">Product</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {validProducts.map((product) => (
            <tr key={product?.id} className="border-b border-gray-200 dark:border-gray-800">
              <td className="p-4">
                <div className="flex items-center gap-4">
                  {product?.featuredImage && (
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded">
                      <img
                        src={product.featuredImage.url}
                        alt={product.featuredImage.altText || product?.title || ''}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium">{product?.title}</h3>
                  </div>
                </div>
              </td>
              <td className="p-4">
                {product?.priceRange.minVariantPrice.currencyCode} 
                {parseFloat(product?.priceRange.minVariantPrice.amount || '0').toFixed(2)}
              </td>
              <td className="p-4 max-w-xs">
                <p className="text-sm line-clamp-3">
                  {product?.description}
                </p>
              </td>
              <td className="p-4">
                <Button size="sm">Add to Cart</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}