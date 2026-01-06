import { SignupForm } from '@/components/Account/SignupForm';

export default function SignupPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
      <SignupForm />
    </div>
  );
}