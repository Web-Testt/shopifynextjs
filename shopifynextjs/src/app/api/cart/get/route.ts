import { NextResponse } from 'next/server';
import { getCart } from '@/lib/shopify/mutations/cart';

export async function GET() {
  try {
    const cart = await getCart();
    return NextResponse.json(cart, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get cart' },
      { status: 500 }
    );
  }
}