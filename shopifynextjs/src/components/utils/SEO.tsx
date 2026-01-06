import Head from 'next/head';
import { usePathname } from 'next/navigation';

export function SEO({
  title,
  description,
  image,
  canonical,
  noIndex = false,
  jsonLd,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
  jsonLd?: any;
}) {
  const pathname = usePathname();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shopifynext.com';
  const fullUrl = canonical || `${siteUrl}${pathname}`;

  const defaultTitle = 'ShopifyNext - Premium Online Store';
  const defaultDescription = 'Discover high-quality products at ShopifyNext. Shop the latest trends with fast shipping and excellent customer service.';

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || `${siteUrl}/og-image.jpg`} />
      <meta property="og:site_name" content="ShopifyNext" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shopifynext" />
      <meta name="twitter:creator" content="@shopifynext" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || `${siteUrl}/og-image.jpg`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
      
      {/* Additional SEO tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="author" content="ShopifyNext" />
      <meta name="publisher" content="ShopifyNext" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://cdn.shopify.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    </Head>
  );
}