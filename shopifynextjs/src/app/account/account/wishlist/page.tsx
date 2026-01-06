import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/middleware';
import { redirect } from 'next/navigation';
import { WishlistView } from '@/components/Account/WishlistView';

export default async function WishlistPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      <WishlistView userId={session.user.id} />
    </div>
  );
}