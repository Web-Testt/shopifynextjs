'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { sendErrorToAnalytics } from '@/lib/utils/errorHandling';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to analytics
    sendErrorToAnalytics(error);
    
    // Log to console for debugging
    console.error('Global error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold mb-6">Something went wrong</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We're sorry for the inconvenience. Our team has been notified and we're working to fix this issue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => reset()} className="w-full sm:w-auto">
            Try Again
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/'} className="w-full sm:w-auto">
            Go to Homepage
          </Button>
        </div>
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Error ID: {error.digest || 'unknown'}
        </div>
      </div>
    </div>
  );
}