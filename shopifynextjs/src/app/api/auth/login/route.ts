import { NextResponse } from 'next/server';
import { signIn } from 'next-auth/react';
import { authOptions } from '@/lib/auth/middleware';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: 'Login successful' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 }
    );
  }
}