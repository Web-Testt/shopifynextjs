import { ContactForm } from '@/components/Account/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-bold mb-4">Customer Service</h3>
          <p className="mb-2">Email: support@shopifynext.com</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-4">Hours: Mon-Fri, 9am-5pm EST</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Headquarters</h3>
          <p className="mb-1">123 Commerce Street</p>
          <p className="mb-1">Suite 100</p>
          <p className="mb-1">New York, NY 10001</p>
          <p>United States</p>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
        <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
        <ContactForm />
      </div>
    </div>
  );
}