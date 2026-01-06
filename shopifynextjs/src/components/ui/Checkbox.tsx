import { forwardRef } from 'react';
import { Check } from 'lucide-react';

const Checkbox = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((
  { className, ...props }, ref) => {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={props['aria-checked']}
      className={`h-4 w-4 rounded border border-gray-300 dark:border-gray-700 ${className}`}
      ref={ref}
      {...props}
    >
      {props['aria-checked'] && <Check className="h-4 w-4 text-primary" />}
    </button>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };