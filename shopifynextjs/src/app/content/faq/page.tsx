import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';

export default function FAQPage() {
  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'To place an order, simply browse our products, add items to your cart, and proceed to checkout. You can create an account or checkout as a guest.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and Shopify Payments. You can also use Apple Pay and Google Pay for a faster checkout experience.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times vary depending on your location and the shipping method selected. Standard shipping typically takes 3-5 business days within the continental US.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy on most items. Products must be in their original condition and packaging. Please visit our Returns page for more details.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order has shipped, you will receive a tracking number via email. You can also track your order by logging into your account and visiting the Orders section.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to many international destinations. Shipping costs and delivery times vary by country. You can see shipping options and costs at checkout.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 dark:border-gray-800 rounded-lg">
            <AccordionTrigger className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <span className="text-left font-medium">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="p-4 pt-0 text-gray-600 dark:text-gray-400">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}