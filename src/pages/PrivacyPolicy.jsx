function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-16">
      <div className="section-container max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            Last updated: January 18, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-rasta-green">Introduction</h2>
            <p className="text-gray-700 mb-4">
              High Tide Tours ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your personal information 
              when you use our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-rasta-red">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Name and contact information (email, phone number)</li>
              <li>Booking and reservation details</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication preferences</li>
              <li>Feedback and correspondence</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-rasta-gold">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Process and manage your bookings</li>
              <li>Communicate with you about our services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-rasta-green">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-rasta-red">Cookies</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies to enhance your experience. You can manage your cookie preferences 
              through your browser settings or our cookie consent popup.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-rasta-gold">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Under South African law (POPIA), you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-rasta-green">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: privacy@hightidetours.co.za<br />
              Phone: +27 123 456 789
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
