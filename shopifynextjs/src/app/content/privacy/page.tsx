export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose dark:prose-invert space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-3">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, place an order, or contact customer service. This may include your name, email address, shipping address, payment information, and other personal details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, process transactions, communicate with you, and personalize your shopping experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">3. Information Sharing</h2>
          <p>
            We do not share your personal information with third parties except as necessary to provide our services (e.g., payment processors, shipping carriers) or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You can manage your account settings and preferences through your account dashboard.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">6. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">7. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">8. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our data practices, please contact us at privacy@shopifynext.com.
          </p>
        </section>
      </div>
    </div>
  );
}