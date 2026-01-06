import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/middleware';
import { redirect } from 'next/navigation';
import { OrderDetail } from '@/components/Account/OrderDetail';

export default async function OrderDetailPage({
  params,
}: {
  params: { orderId: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <OrderDetail orderId={params.orderId} userId={session.user.id} />
    </div>
  );
}