export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Returns Policy</h1>
      <div className="prose dark:prose-invert space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-3">1. Return Eligibility</h2>
          <p>
            Most items can be returned within 30 days of delivery for a full refund. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">2. Non-Returnable Items</h2>
          <p>
            Certain items cannot be returned, including perishable goods, personalized items, and items marked as final sale. Please check the product description for specific return eligibility.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">3. How to Initiate a Return</h2>
          <p>
            To initiate a return, log in to your account, go to the Orders section, select the order containing the item you want to return, and follow the return instructions. You can also contact our customer service team for assistance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">4. Return Shipping</h2>
          <p>
            You are responsible for return shipping costs unless the item is defective or we made an error in your order. We recommend using a trackable shipping service and purchasing shipping insurance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">5. Refund Processing</h2>
          <p>
            Once we receive your return and inspect the item, we will process your refund. Refunds are typically issued to the original payment method within 5-7 business days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">6. Exchanges</h2>
          <p>
            We currently do not offer direct exchanges. If you need a different size or color, please return your item for a refund and place a new order.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">7. Contact Us</h2>
          <p>
            If you have any questions about our returns policy or need assistance with a return, please contact our customer service team at returns@shopifynext.com.
          </p>
        </section>
      </div>
    </div>
  );
}