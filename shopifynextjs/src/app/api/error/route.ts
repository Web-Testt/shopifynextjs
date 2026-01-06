import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/client';

export async function POST(request: Request) {
  try {
    const errorData = await request.json();
    
    // Store error in database
    await prisma.errorLog.create({
      data: {
        message: errorData.message,
        stack: errorData.stack,
        digest: errorData.digest,
        url: errorData.url,
        userAgent: errorData.userAgent,
        metadata: errorData,
      },
    });
    
    // In a real implementation, you might also send to an error monitoring service
    // like Sentry, Bugsnag, etc.
    
    return NextResponse.json(
      { message: 'Error logged successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error logging failed:', error);
    return NextResponse.json(
      { error: 'Failed to log error' },
      { status: 500 }
    );
  }
}