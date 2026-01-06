import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-primary">Products</Link></li>
              <li><Link href="/collections" className="hover:text-primary">Collections</Link></li>
              <li><Link href="/deals" className="hover:text-primary">Deals</Link></li>
              <li><Link href="/search" className="hover:text-primary">Search</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link href="/account" className="hover:text-primary">My Account</Link></li>
              <li><Link href="/account/orders" className="hover:text-primary">Orders</Link></li>
              <li><Link href="/account/wishlist" className="hover:text-primary">Wishlist</Link></li>
              <li><Link href="/account/compare" className="hover:text-primary">Compare</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
              <li><Link href="/returns" className="hover:text-primary">Returns</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Facebook</a></li>
              <li><a href="#" className="hover:text-primary">Instagram</a></li>
              <li><a href="#" className="hover:text-primary">Twitter</a></li>
              <li><a href="#" className="hover:text-primary">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} ShopifyNext. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}