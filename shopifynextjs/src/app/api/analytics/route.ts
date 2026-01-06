import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/client';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Store analytics data in database
    await prisma.$executeRaw`
      INSERT INTO analytics (data, created_at)
      VALUES (${JSON.stringify(data)}, NOW())
    `;
    
    return NextResponse.json(
      { message: 'Analytics data received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to process analytics data' },
      { status: 500 }
    );
  }
}