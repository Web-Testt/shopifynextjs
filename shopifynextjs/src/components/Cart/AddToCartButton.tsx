import { useCart } from '@/lib/shopify/hooks/useCart';
import { Button } from '../ui/Button';
import { useToastHook } from '../ui/Toast';

export function AddToCartButton({
  productId,
  variantId,
  quantity = 1,
  className = '',
}: {
  productId: string;
  variantId: string;
  quantity?: number;
  className?: string;
}) {
  const { addToCart, isLoading } = useCart();
  const toast = useToastHook();

  const handleAddToCart = async () => {
    try {
      await addToCart(variantId, quantity);
      toast.success('Added to cart');
    } catch (error) {
      toast.error('Failed to add to cart');
    }
  };

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? 'Adding...' : 'Add to Cart'}
    </Button>
  );
}