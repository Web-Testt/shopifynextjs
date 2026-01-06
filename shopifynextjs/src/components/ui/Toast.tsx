import { useToast, ToastProvider as RadixToastProvider } from '@radix-ui/react-toast';
import { useEffect } from 'react';

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <RadixToastProvider>{children}</RadixToastProvider>;
}

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map(({ id, title, description, variant }) => (
        <div
          key={id}
          className={`p-4 rounded-lg shadow-lg ${
            variant === 'success' ? 'bg-green-500 text-white' :
            variant === 'error' ? 'bg-red-500 text-white' :
            'bg-gray-800 text-white'
          }`}
        >
          {title && <h3 className="font-bold">{title}</h3>}
          {description && <p className="text-sm">{description}</p>}
        </div>
      ))}
    </div>
  );
}

export function useToastHook() {
  const { toast } = useToast();

  return {
    success: (title: string, description?: string) => {
      toast({ title, description, variant: 'success' });
    },
    error: (title: string, description?: string) => {
      toast({ title, description, variant: 'error' });
    },
    info: (title: string, description?: string) => {
      toast({ title, description, variant: 'info' });
    },
  };
}