import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if cookie consent has already been given
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
    // In a real implementation, this would set cookies and send analytics
    console.log('Cookies accepted');
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
    // In a real implementation, this would only set essential cookies
    console.log('Cookies declined');
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-bold mb-2">We use cookies</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We use cookies and similar technologies to enhance your shopping experience, personalize content, and analyze traffic. By clicking "Accept", you consent to our use of cookies. You can manage your preferences or withdraw consent at any time.
            </p>
            <div className="mt-2">
              <a href="/privacy#cookies" className="text-sm text-primary hover:underline">
                Learn more about our cookie policy
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button onClick={handleDecline} variant="outline" size="sm">
              Decline
            </Button>
            <Button onClick={handleAccept} size="sm">
              Accept
            </Button>
          </div>
          <button
            onClick={() => setShowConsent(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="Close cookie consent"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}