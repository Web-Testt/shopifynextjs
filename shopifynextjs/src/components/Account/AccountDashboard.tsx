import Link from 'next/link';
import { Card } from '../ui/Card';

export function AccountDashboard({ userId }: { userId: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="p-6 hover:shadow-lg transition">
        <h3 className="font-bold mb-2">Orders</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          View your order history and track shipments
        </p>
        <Link href="/account/orders" className="text-primary hover:underline">
          View Orders
        </Link>
      </Card>
      <Card className="p-6 hover:shadow-lg transition">
        <h3 className="font-bold mb-2">Wishlist</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Manage your saved products
        </p>
        <Link href="/account/wishlist" className="text-primary hover:underline">
          View Wishlist
        </Link>
      </Card>
      <Card className="p-6 hover:shadow-lg transition">
        <h3 className="font-bold mb-2">Compare Products</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Compare products side by side
        </p>
        <Link href="/account/compare" className="text-primary hover:underline">
          View Comparisons
        </Link>
      </Card>
      <Card className="p-6 hover:shadow-lg transition">
        <h3 className="font-bold mb-2">Addresses</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Manage your shipping addresses
        </p>
        <Link href="/account/addresses" className="text-primary hover:underline">
          View Addresses
        </Link>
      </Card>
      <Card className="p-6 hover:shadow-lg transition">
        <h3 className="font-bold mb-2">Subscriptions</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Manage your subscription plans
        </p>
        <Link href="/account/subscriptions" className="text-primary hover:underline">
          View Subscriptions
        </Link>
      </Card>
      <Card className="p-6 hover:shadow-lg transition">
        <h3 className="font-bold mb-2">Returns</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          View and manage your returns
        </p>
        <Link href="/account/returns" className="text-primary hover:underline">
          View Returns
        </Link>
      </Card>
    </div>
  );
}