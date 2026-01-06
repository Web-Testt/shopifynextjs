import { NextResponse } from 'next/server';
import { addToCart, createCart, getCart } from '@/lib/shopify/mutations/cart';
import { cookies } from 'next/headers';

const CART_COOKIE_NAME = 'shopify_cart_id';

export async function POST(request: Request) {
  const { variantId, quantity = 1 } = await request.json();

  try {
    const cartCookie = cookies().get(CART_COOKIE_NAME);
    let cartId = cartCookie?.value;

    if (!cartId) {
      const newCart = await createCart();
      cartId = newCart.id;
    }

    const cart = await addToCart(variantId, quantity, cartId);

    return NextResponse.json(cart, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add to cart' },
      { status: 500 }
    );
  }
}