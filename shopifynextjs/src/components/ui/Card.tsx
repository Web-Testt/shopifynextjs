import { forwardRef } from 'react';

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((
  { className, ...props }, ref) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 dark:border-gray-800 bg-card text-card-foreground shadow-sm ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Card.displayName = 'Card';

export { Card };