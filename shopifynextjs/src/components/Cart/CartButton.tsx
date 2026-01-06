import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/lib/shopify/hooks/useCart';

export function CartButton() {
  const { cart } = useCart();
  
  const itemCount = cart?.lines.edges.reduce((count, edge) => {
    return count + edge.node.quantity;
  }, 0) || 0;

  return (
    <Link
      href="/cart"
      className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Shopping cart"
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
}