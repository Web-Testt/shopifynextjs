import { useCart } from '@/lib/shopify/hooks/useCart';
import { CartLineItem } from './CartLineItem';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function CartView() {
  const { cart, isLoading } = useCart();

  if (isLoading) {
    return <div>Loading cart...</div>;
  }

  if (!cart || cart.lines.edges.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
        <Link href="/products" className="text-primary hover:underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  const subtotal = parseFloat(cart.cost.subtotalAmount.amount);
  const total = parseFloat(cart.cost.totalAmount.amount);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {cart.lines.edges.map(({ node }) => (
          <CartLineItem key={node.id} lineItem={node} />
        ))}
      </div>
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
        <h3 className="font-bold mb-4">Order Summary</h3>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{cart.cost.subtotalAmount.currencyCode} {subtotal.toFixed(2)}</span>
          </div>
          {cart.cost.totalTaxAmount && (
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>{cart.cost.totalTaxAmount.currencyCode} {parseFloat(cart.cost.totalTaxAmount.amount).toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{cart.cost.totalAmount.currencyCode} {total.toFixed(2)}</span>
          </div>
        </div>
        <Button asChild className="w-full">
          <Link href={`https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL}/checkout`}>
            Proceed to Checkout
          </Link>
        </Button>
      </div>
    </div>
  );
}