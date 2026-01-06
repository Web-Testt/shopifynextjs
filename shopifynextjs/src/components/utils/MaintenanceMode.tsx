import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';

export function MaintenanceMode() {
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    // Check if maintenance mode is enabled
    const maintenanceEnd = localStorage.getItem('maintenanceEnd');
    
    if (maintenanceEnd) {
      const endTime = new Date(parseInt(maintenanceEnd)).getTime();
      const now = new Date().getTime();
      
      if (endTime > now) {
        setIsMaintenance(true);
        
        // Start countdown
        const interval = setInterval(() => {
          const remaining = Math.ceil((endTime - new Date().getTime()) / 1000);
          setCountdown(remaining);
          
          if (remaining <= 0) {
            clearInterval(interval);
            setIsMaintenance(false);
            localStorage.removeItem('maintenanceEnd');
          }
        }, 1000);
        
        return () => clearInterval(interval);
      } else {
        localStorage.removeItem('maintenanceEnd');
      }
    }
  }, []);

  if (!isMaintenance) return null;

  const formatCountdown = () => {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">🚧 Maintenance Mode</h1>
        <p className="text-lg mb-6">
          We're currently performing maintenance to improve your shopping experience.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We'll be back shortly. Thank you for your patience!
        </p>
        <div className="mb-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Estimated time remaining:</p>
          <div className="text-2xl font-mono font-bold">
            {formatCountdown()}
          </div>
        </div>
        <Button onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
      </div>
    </div>
  );
}