import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCart, createCart, addToCart as addToCartMutation, updateCart, removeFromCart } from '../mutations/cart';
import { ShopifyCart } from '../types';

const CART_QUERY_KEY = 'cart';

export function useCart() {
  const queryClient = useQueryClient();

  const { data: cart, isLoading: isCartLoading } = useQuery<ShopifyCart | null>({
    queryKey: [CART_QUERY_KEY],
    queryFn: async () => {
      try {
        return await getCart();
      } catch (error) {
        return null;
      }
    },
  });

  const createCartMutation = useMutation({
    mutationFn: createCart,
    onSuccess: (newCart) => {
      queryClient.setQueryData([CART_QUERY_KEY], newCart);
    },
  });

  const addToCart = async (variantId: string, quantity: number = 1) => {
    if (!cart) {
      const newCart = await createCartMutation.mutateAsync();
      return addToCartMutation(variantId, quantity, newCart.id);
    }
    return addToCartMutation(variantId, quantity, cart.id);
  };

  const updateCartItem = async (lineId: string, quantity: number) => {
    if (!cart) return;
    const updatedCart = await updateCart(cart.id, lineId, quantity);
    queryClient.setQueryData([CART_QUERY_KEY], updatedCart);
  };

  const removeCartItem = async (lineId: string) => {
    if (!cart) return;
    const updatedCart = await removeFromCart(cart.id, lineId);
    queryClient.setQueryData([CART_QUERY_KEY], updatedCart);
  };

  return {
    cart,
    isLoading: isCartLoading || createCartMutation.isPending,
    addToCart,
    updateCartItem,
    removeCartItem,
  };
}