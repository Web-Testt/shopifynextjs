import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { SearchBar } from './SearchBar';
import { CartButton } from '@/components/Cart/CartButton';
import { AccountDropdown } from './AccountDropdown';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold">
              ShopifyNext
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/products" className="hover:text-primary">
                Products
              </Link>
              <Link href="/collections" className="hover:text-primary">
                Collections
              </Link>
              <Link href="/deals" className="hover:text-primary">
                Deals
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block flex-1 max-w-md">
              <SearchBar />
            </div>
            <ThemeToggle />
            <AccountDropdown />
            <CartButton />
          </div>
        </div>
        <div className="lg:hidden pb-2">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}