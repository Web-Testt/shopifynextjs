import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/middleware';
import { redirect } from 'next/navigation';
import { SettingsForm } from '@/components/Account/SettingsForm';

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
      <SettingsForm userId={session.user.id} email={session.user.email || ''} />
    </div>
  );
}