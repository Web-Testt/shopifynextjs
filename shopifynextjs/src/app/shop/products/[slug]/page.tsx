import { getProductByHandle } from '@/lib/shopify/queries/products';
import { ProductGallery } from '@/components/Product/ProductGallery';
import { VariantSelector } from '@/components/Product/VariantSelector';
import { AddToCartButton } from '@/components/Cart/AddToCartButton';
import { ProductRecommendations } from '@/components/Product/ProductRecommendations';
import { ProductReviews } from '@/components/Product/ProductReviews';
import { Star } from 'lucide-react';
import { SEO } from '@/components/utils/SEO';

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductByHandle(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Generate structured data for SEO
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": product.featuredImage?.url,
    "description": product.description,
    "sku": product.id,
    "mpn": product.id,
    "brand": {
      "@type": "Brand",
      "name": "ShopifyNext"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "128"
    },
    "offers": {
      "@type": "Offer",
      "url": `${process.env.NEXT_PUBLIC_SITE_URL}/products/${product.handle}`,
      "priceCurrency": product.priceRange.minVariantPrice.currencyCode,
      "price": product.priceRange.minVariantPrice.amount,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.availableForSale ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  };

  return (
    <>
      <SEO
        title={`${product.title} | ShopifyNext`}
        description={product.description}
        image={product.featuredImage?.url}
        jsonLd={productJsonLd}
      />
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <ProductGallery images={product.images.edges.map(edge => edge.node)} />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              4.5 (128 reviews)
            </span>
          </div>
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
      <ProductReviews productId={product.id} />
      <ProductRecommendations />
    </div>
    </>
  );
}