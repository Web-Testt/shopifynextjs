import { prisma } from '@/lib/db/client';
import { AddressForm } from './AddressForm';
import { Button } from '../ui/Button';

export async function AddressList({ userId }: { userId: string }) {
  const addresses = await prisma.address.findMany({
    where: { userId },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <AddressForm userId={userId} />
      </div>
      {addresses.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            You haven't saved any addresses yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((address) => (
            <div key={address.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold">
                  {address.addressData.name}
                  {address.isDefault && (
                    <span className="ml-2 text-xs bg-primary text-white px-2 py-1 rounded">
                      Default
                    </span>
                  )}
                </h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </div>
              </div>
              <p>{address.addressData.address1}</p>
              {address.addressData.address2 && <p>{address.addressData.address2}</p>}
              <p>{address.addressData.city}, {address.addressData.province} {address.addressData.zip}</p>
              <p>{address.addressData.country}</p>
              <p className="mt-2">Phone: {address.addressData.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}