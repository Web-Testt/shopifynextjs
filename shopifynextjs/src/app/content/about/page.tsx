export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="prose dark:prose-invert">
        <p className="mb-4">
          Welcome to ShopifyNext, your premier destination for high-quality products and exceptional shopping experiences.
        </p>
        <p className="mb-4">
          Founded in 2023, we've been dedicated to bringing you the best products at competitive prices, with a focus on customer satisfaction and innovative shopping solutions.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to revolutionize the way you shop online by providing a seamless, personalized experience that combines the best of technology with exceptional customer service.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Wide selection of high-quality products</li>
          <li>Competitive pricing and regular deals</li>
          <li>Fast and reliable shipping</li>
          <li>Exceptional customer service</li>
          <li>Secure and easy checkout process</li>
          <li>Personalized shopping experience</li>
        </ul>
      </div>
    </div>
  );
}