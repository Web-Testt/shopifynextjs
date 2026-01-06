import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useToastHook } from '../ui/Toast';
import { prisma } from '@/lib/db/client';

export function AddressForm({ userId }: { userId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    country: '',
    zip: '',
    phone: '',
    isDefault: false,
  });
  const toast = useToastHook();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await prisma.address.create({
        data: {
          userId,
          addressData: formData,
          isDefault: formData.isDefault,
        },
      });

      toast.success('Address saved successfully');
      setIsOpen(false);
      setFormData({
        name: '',
        address1: '',
        address2: '',
        city: '',
        province: '',
        country: '',
        zip: '',
        phone: '',
        isDefault: false,
      });
    } catch (error) {
      toast.error('Failed to save address');
    }
  };

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)}>
        Add New Address
      </Button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h3 className="font-bold mb-4">Add New Address</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone
          </label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="address1" className="block text-sm font-medium mb-1">
          Address Line 1
        </label>
        <Input
          id="address1"
          value={formData.address1}
          onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="address2" className="block text-sm font-medium mb-1">
          Address Line 2 (Optional)
        </label>
        <Input
          id="address2"
          value={formData.address2}
          onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium mb-1">
            City
          </label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="province" className="block text-sm font-medium mb-1">
            Province/State
          </label>
          <Input
            id="province"
            value={formData.province}
            onChange={(e) => setFormData({ ...formData, province: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="zip" className="block text-sm font-medium mb-1">
            Postal Code
          </label>
          <Input
            id="zip"
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium mb-1">
          Country
        </label>
        <Input
          id="country"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="isDefault"
          checked={formData.isDefault}
          onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
          className="h-4 w-4"
        />
        <label htmlFor="isDefault" className="text-sm">
          Set as default address
        </label>
      </div>
      <div className="flex space-x-2">
        <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button type="submit">
          Save Address
        </Button>
      </div>
    </form>
  );
}