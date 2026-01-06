import { getProducts } from '@/lib/shopify/queries/products';
import ProductCard from '@/components/Product/ProductCard';
import { FilterSidebar } from '@/components/Filters/FilterSidebar';
import { Pagination } from '@/components/ui/Pagination';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1;
  const perPage = 20;
  const cursor = page > 1 ? ((page - 1) * perPage).toString() : undefined;

  const products = await getProducts({
    first: perPage,
    after: cursor,
    query: typeof searchParams.q === 'string' ? searchParams.q : undefined,
    filters: [],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <FilterSidebar />
        </div>
        <div className="lg:w-3/4">
          <h1 className="text-2xl font-bold mb-6">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {products.edges.map(({ node }) => (
              <ProductCard key={node.id} product={node} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={Math.ceil(products.edges.length / perPage)}
            basePath="/products"
          />
        </div>
      </div>
    </div>
  );
}