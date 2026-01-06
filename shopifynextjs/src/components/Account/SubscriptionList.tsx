import { Button } from '../ui/Button';

export function SubscriptionList({ userId }: { userId: string }) {
  return (
    <div className="text-center py-12">
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        You don't have any active subscriptions.
      </p>
      <Button>Browse Subscription Products</Button>
    </div>
  );
}