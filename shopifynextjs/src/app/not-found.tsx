import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full">
        <div className="mb-6">
          <Search className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/">
              Go to Homepage
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/products">
              Browse Products
            </Link>
          </Button>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            You can also try searching for what you're looking for:
          </p>
          <form action="/search" method="GET" className="relative">
            <input
              type="text"
              name="q"
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}