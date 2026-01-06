import { prisma } from '@/lib/db/client';
import { getProductById } from '@/lib/shopify/queries/products';
import ProductCard from '../Product/ProductCard';

export async function WishlistView({ userId }: { userId: string }) {
  const wishlistItems = await prisma.wishlist.findMany({
    where: { userId },
    include: { product: true },
  });

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          Your wishlist is empty.
        </p>
      </div>
    );
  }

  const products = await Promise.all(
    wishlistItems.map(async (item) => {
      try {
        const product = await getProductById(item.productId);
        return product;
      } catch (error) {
        return null;
      }
    })
  );

  const validProducts = products.filter(Boolean);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {validProducts.map((product) => (
        <ProductCard key={product?.id} product={product!} />
      ))}
    </div>
  );
}