import { getProductByHandle } from '@/lib/shopify/queries/products';
import { ProductGallery } from '@/components/Product/ProductGallery';
import { VariantSelector } from '@/components/Product/VariantSelector';
import { AddToCartButton } from '@/components/Cart/AddToCartButton';
import { ProductRecommendations } from '@/components/Product/ProductRecommendations';

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductByHandle(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <ProductGallery images={product.images.edges.map(edge => edge.node)} />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {product.description}
          </p>
          <div className="mb-6">
            <span className="text-2xl font-bold">
              {product.priceRange.minVariantPrice.currencyCode} 
              {parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}
            </span>
          </div>
          <VariantSelector
            variants={product.variants.edges.map(edge => edge.node)}
            options={product.options}
          />
          <div className="mt-6">
            <AddToCartButton
              productId={product.id}
              variantId={product.variants.edges[0]?.node.id}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <ProductRecommendations />
    </div>
  );
}