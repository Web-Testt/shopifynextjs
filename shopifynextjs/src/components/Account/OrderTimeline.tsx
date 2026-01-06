import { CheckCircle, Truck, Package, CreditCard } from 'lucide-react';

export function OrderTimeline({ order }: any) {
  const timelineItems = [
    {
      status: 'ORDER_PLACED',
      title: 'Order Placed',
      icon: <CheckCircle className="h-5 w-5" />,
      date: order.processedAt,
    },
    {
      status: 'PAYMENT_PROCESSED',
      title: 'Payment Processed',
      icon: <CreditCard className="h-5 w-5" />,
      date: order.processedAt,
    },
    {
      status: 'PROCESSING',
      title: 'Processing',
      icon: <Package className="h-5 w-5" />,
      date: order.processedAt,
    },
    {
      status: 'SHIPPED',
      title: 'Shipped',
      icon: <Truck className="h-5 w-5" />,
      date: order.processedAt,
    },
  ];

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h3 className="font-bold mb-4">Order Timeline</h3>
      <div className="space-y-4">
        {timelineItems.map((item, index) => (
          <div key={item.status} className="flex items-start">
            <div className="mr-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index === 0 ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'
              }`}>
                {item.icon}
              </div>
            </div>
            <div>
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {new Date(item.date).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}