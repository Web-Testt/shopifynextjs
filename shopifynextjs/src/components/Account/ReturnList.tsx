import { prisma } from '@/lib/db/client';
import { Button } from '../ui/Button';

export async function ReturnList({ userId }: { userId: string }) {
  const returns = await prisma.returnRequest.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button>Request a Return</Button>
      </div>
      {returns.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            You haven't requested any returns yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {returns.map((returnRequest) => (
            <div key={returnRequest.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Return #{returnRequest.id}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Order #{returnRequest.orderId}
                  </p>
                  <p className="text-sm">
                    Status: <span className={`font-semibold ${
                      returnRequest.status === 'APPROVED' ? 'text-green-600' :
                      returnRequest.status === 'REJECTED' ? 'text-red-600' :
                      'text-yellow-600'
                    }`}>{
                      returnRequest.status
                    }</span>
                  </p>
                  <p className="text-sm mt-2">
                    Reason: {returnRequest.reason}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(returnRequest.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}