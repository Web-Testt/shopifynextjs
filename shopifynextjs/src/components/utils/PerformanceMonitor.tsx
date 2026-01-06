import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function PerformanceMonitor() {
  const router = useRouter();

  useEffect(() => {
    // Measure page load performance
    const measurePerformance = () => {
      if (window.performance) {
        const timing = window.performance.timing;
        const navigation = window.performance.getEntriesByType('navigation')[0];
        
        const metrics = {
          page: window.location.pathname,
          loadTime: timing.loadEventEnd - timing.navigationStart,
          domInteractive: timing.domInteractive - timing.navigationStart,
          domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
          firstPaint: timing.firstContentfulPaint ? timing.firstContentfulPaint - timing.navigationStart : null,
          navigationType: navigation ? navigation.type : 'unknown',
          timestamp: new Date().toISOString(),
        };

        // In a real implementation, this would send to analytics
        console.log('Performance metrics:', metrics);
        
        // Send to analytics service
        if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true') {
          sendAnalytics(metrics);
        }
      }
    };

    // Measure route changes
    const handleRouteChange = (url: string) => {
      const start = performance.now();
      
      setTimeout(() => {
        const end = performance.now();
        const routeMetrics = {
          route: url,
          loadTime: end - start,
          timestamp: new Date().toISOString(),
        };
        
        console.log('Route change metrics:', routeMetrics);
        
        if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true') {
          sendAnalytics(routeMetrics);
        }
      }, 100);
    };

    // Send analytics data to backend
    const sendAnalytics = async (data: any) => {
      try {
        await fetch('/api/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.error('Analytics error:', error);
      }
    };

    // Initial measurement
    measurePerformance();
    
    // Track route changes
    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return null;
}