import Link from 'next/link';

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Accessibility Statement</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Our Commitment</h2>
        <p className="mb-4">
          At ShopifyNext, we are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Accessibility Features</h2>
        <p className="mb-4">
          Our website includes the following accessibility features:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Keyboard navigation support</li>
          <li>Screen reader compatibility</li>
          <li>High contrast mode support</li>
          <li>Resizable text and scalable UI</li>
          <li>ARIA labels and semantic HTML</li>
          <li>Focus indicators for interactive elements</li>
          <li>Alternative text for images</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Standards Compliance</h2>
        <p className="mb-4">
          We aim to adhere as closely as possible to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. These guidelines explain how to make web content more accessible for people with disabilities and user friendly for everyone.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Accessibility Tools</h2>
        <p className="mb-4">
          We recommend the following tools to enhance your browsing experience:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Screen readers like NVDA, VoiceOver, or JAWS</li>
          <li>Browser zoom functionality (Ctrl/Cmd + +/-)</li>
          <li>High contrast browser extensions</li>
          <li>Keyboard navigation (Tab, Shift+Tab, Enter, Space)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Feedback and Support</h2>
        <p className="mb-4">
          If you experience any difficulty accessing our website or have suggestions for improving accessibility, please contact our accessibility team:
        </p>
        <p className="mb-2">Email: <a href="mailto:accessibility@shopifynext.com" className="text-primary hover:underline">accessibility@shopifynext.com</a></p>
        <p className="mb-2">Phone: (123) 456-7890 (Monday-Friday, 9am-5pm EST)</p>
        <p className="mb-4">We welcome your feedback and will respond to accessibility inquiries within 3 business days.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Ongoing Efforts</h2>
        <p className="mb-4">
          We are continually working to improve the accessibility of our website through:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Regular accessibility audits</li>
          <li>User testing with assistive technologies</li>
          <li>Employee training on accessibility best practices</li>
          <li>Implementation of new accessibility features</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Third-Party Content</h2>
        <p className="mb-4">
          While we strive to ensure accessibility of our own content, we may link to third-party websites or embed third-party content that is not under our control. We cannot guarantee the accessibility of such content, but we welcome feedback if you encounter accessibility barriers on linked sites.
        </p>
      </section>

      <section className="border-t border-gray-200 dark:border-gray-800 pt-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          <Link href="/" className="text-primary hover:underline">Return to Homepage</Link>
        </p>
      </section>
    </div>
  );
}