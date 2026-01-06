import { NextResponse } from 'next/server';
import { signOut } from 'next-auth/react';

export async function GET() {
  try {
    await signOut({ redirect: false });
    return NextResponse.json(
      { message: 'Logout successful' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred during logout' },
      { status: 500 }
    );
  }
}