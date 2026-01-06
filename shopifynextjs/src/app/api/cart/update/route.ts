import { NextResponse } from 'next/server';
import { updateCart } from '@/lib/shopify/mutations/cart';
import { getCart } from '@/lib/shopify/mutations/cart';

export async function POST(request: Request) {
  const { lineId, quantity } = await request.json();

  try {
    const cart = await getCart();
    
    if (!cart) {
      return NextResponse.json(
        { error: 'Cart not found' },
        { status: 404 }
      );
    }

    const updatedCart = await updateCart(cart.id, lineId, quantity);

    return NextResponse.json(updatedCart, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update cart' },
      { status: 500 }
    );
  }
}