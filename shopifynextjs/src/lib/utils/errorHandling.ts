export async function sendErrorToAnalytics(error: Error) {
  try {
    // Only send errors in production
    if (process.env.NODE_ENV === 'production') {
      const errorData = {
        message: error.message,
        stack: error.stack,
        digest: error.digest,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };

      await fetch('/api/error', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorData),
      });
    }
  } catch (analyticsError) {
    console.error('Failed to send error to analytics:', analyticsError);
  }
}