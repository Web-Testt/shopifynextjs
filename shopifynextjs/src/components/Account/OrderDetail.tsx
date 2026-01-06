import { getOrderById } from '@/lib/shopify/queries/orders';
import { OrderTimeline } from './OrderTimeline';

export async function OrderDetail({ orderId, userId }: { orderId: string; userId: string }) {
  const order = await getOrderById(orderId);

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold mb-2">Order #{order.name}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {new Date(order.processedAt).toLocaleDateString()}
        </p>
        
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 mb-6">
          <h3 className="font-bold mb-4">Order Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{order.totalPrice.currencyCode} {parseFloat(order.totalPrice.amount).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{order.totalPrice.currencyCode} {parseFloat(order.totalPrice.amount).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 mb-6">
          <h3 className="font-bold mb-4">Items</h3>
          <div className="space-y-4">
            {order.lineItems.edges.map(({ node }) => (
              <div key={node.title} className="flex justify-between">
                <div>
                  <p className="font-medium">{node.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {node.variant.title} • Qty: {node.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    {node.variant.price.currencyCode} {parseFloat(node.variant.price.amount).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <OrderTimeline order={order} />
      </div>
      <div>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 mb-6">
          <h3 className="font-bold mb-4">Shipping Address</h3>
          <p>{order.shippingAddress?.name}</p>
          <p>{order.shippingAddress?.address1}</p>
          {order.shippingAddress?.address2 && <p>{order.shippingAddress.address2}</p>}
          <p>{order.shippingAddress?.city}, {order.shippingAddress?.province} {order.shippingAddress?.zip}</p>
          <p>{order.shippingAddress?.country}</p>
        </div>
      </div>
    </div>
  );
}