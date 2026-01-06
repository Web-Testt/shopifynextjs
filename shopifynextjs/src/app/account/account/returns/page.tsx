import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/middleware';
import { redirect } from 'next/navigation';
import { ReturnList } from '@/components/Account/ReturnList';

export default async function ReturnsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Returns</h1>
      <ReturnList userId={session.user.id} />
    </div>
  );
}