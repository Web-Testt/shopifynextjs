import { useCart } from '@/lib/shopify/hooks/useCart';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function CartLineItem({ lineItem }: {
  lineItem: {
    id: string;
    quantity: number;
    merchandise: {
      id: string;
      title: string;
      price: {
        amount: string;
        currencyCode: string;
      };
      product: {
        id: string;
        title: string;
        handle: string;
        featuredImage?: {
          url: string;
          altText: string;
        };
      };
    };
  };
}) {
  const { updateCartItem, removeCartItem } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value);
    if (quantity > 0) {
      updateCartItem(lineItem.id, quantity);
    }
  };

  const handleRemove = () => {
    removeCartItem(lineItem.id);
  };

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 mb-4">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded relative flex-shrink-0">
          {lineItem.merchandise.product.featuredImage && (
            <Image
              src={lineItem.merchandise.product.featuredImage.url}
              alt={lineItem.merchandise.product.featuredImage.altText || lineItem.merchandise.title}
              fill
              className="object-cover rounded"
              sizes="80px"
            />
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-medium mb-1">{lineItem.merchandise.title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {lineItem.merchandise.product.title}
          </p>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min="1"
              value={lineItem.quantity}
              onChange={handleQuantityChange}
              className="w-16"
            />
            <span className="font-semibold">
              {lineItem.merchandise.price.currencyCode} 
              {(parseFloat(lineItem.merchandise.price.amount) * lineItem.quantity).toFixed(2)}
            </span>
          </div>
        </div>
        <Button
          variant="destructive"
          size="sm"
          onClick={handleRemove}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}