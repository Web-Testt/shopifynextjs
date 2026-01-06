import { getCustomerOrders } from '@/lib/shopify/queries/customers';
import Link from 'next/link';

export async function OrderList({ userId }: { userId: string }) {
  const orders = await getCustomerOrders(userId);

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          You haven't placed any orders yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">Order #{order.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {new Date(order.processedAt).toLocaleDateString()}
              </p>
              <p className="text-sm">
                Status: {order.financialStatus} • {order.fulfillmentStatus}
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold">
                {order.totalPrice.currencyCode} {parseFloat(order.totalPrice.amount).toFixed(2)}
              </p>
              <Link
                href={`/account/orders/${order.id}`}
                className="text-primary hover:underline text-sm"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}