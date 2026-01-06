import Link from 'next/link';
import { ShopifyProduct } from '@/lib/shopify/types';
import { AddToCartButton } from '@/components/Cart/AddToCartButton';

export default function ProductCard({ product }: { product: ShopifyProduct }) {
  const price = product.priceRange.minVariantPrice;
  const compareAtPrice = product.variants.edges[0]?.node.price.amount;
  const hasDiscount = compareAtPrice && parseFloat(compareAtPrice) > parseFloat(price.amount);

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition group">
      <Link href={`/products/${product.handle}`} className="block">
        <div className="aspect-square bg-gray-100 dark:bg-gray-800 relative">
          {product.featuredImage && (
            <img
              src={product.featuredImage.url}
              alt={product.featuredImage.altText || product.title}
              className="w-full h-full object-cover"
            />
          )}
          {hasDiscount && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              Sale
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.handle}`} className="block">
          <h3 className="font-semibold mb-1 line-clamp-1">{product.title}</h3>
        </Link>
        <div className="flex items-center space-x-2 mb-3">
          <span className="font-bold text-lg">
            {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
              {price.currencyCode} {parseFloat(compareAtPrice!).toFixed(2)}
            </span>
          )}
        </div>
        <AddToCartButton
          productId={product.id}
          variantId={product.variants.edges[0]?.node.id}
          className="w-full"
        />
      </div>
    </div>
  );
}