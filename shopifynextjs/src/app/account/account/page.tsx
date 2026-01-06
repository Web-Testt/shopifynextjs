import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/middleware';
import { redirect } from 'next/navigation';
import { AccountDashboard } from '@/components/Account/AccountDashboard';

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>
      <AccountDashboard userId={session.user.id} />
    </div>
  );
}