function TermsOfService() {
  return (
    <div className="min-h-screen py-16">
      <div className="section-container max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
          Terms of Service
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            Last updated: January 18, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-red mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By booking a tour with High Tide Tours ("we," "our," or "us"), you ("guest," "you," or "your") agree to be bound by these Terms of Service. If you do not agree to these terms, please do not book our services.
            </p>
            <p className="mb-4">
              High Tide Tours provides cannabis-friendly water sports and ocean adventure experiences in Cape Town, South Africa. All tours operate in compliance with South African law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-yellow mb-4">2. Age Requirements</h2>
            <p className="mb-4">
              <strong>All guests must be 18 years of age or older.</strong> Valid government-issued photo identification is required at check-in. No exceptions will be made.
            </p>
            <p className="mb-4">
              Our tours are designed as adult-only experiences due to the cannabis-friendly nature of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-green mb-4">3. Cannabis Consumption & Legal Compliance</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">3.1 Legal Framework</h3>
            <p className="mb-4">
              In 2018, South Africa's Constitutional Court decriminalized the private adult use and cultivation of cannabis. Our tours operate under this legal framework within private spaces.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">3.2 Optional Consumption</h3>
            <p className="mb-4">
              Cannabis consumption on our tours is <strong>entirely optional</strong>. Non-consumers are welcome and will enjoy the full tour experience.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">3.3 Guest Responsibilities</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal use quantities only (as defined by South African law)</li>
              <li>No public consumption - only in designated private areas on our vessels</li>
              <li>Guests are responsible for sourcing their own cannabis</li>
              <li>We provide guidance but do not supply cannabis products</li>
              <li>Compliance with all applicable laws is mandatory</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-red mb-4">4. Booking & Payment</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">4.1 Deposit Requirements</h3>
            <p className="mb-4">
              A <strong>50% non-refundable deposit</strong> is required at the time of booking to secure your reservation. The remaining 50% balance is due 7 days before your scheduled tour date.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">4.2 Late Bookings</h3>
            <p className="mb-4">
              Bookings made within 7 days of the tour date require <strong>100% payment upfront</strong>.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">4.3 Payment Methods</h3>
            <p className="mb-4">
              We accept all major credit cards, debit cards, and instant EFT via our secure payment partners Yoco and Stripe.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-yellow mb-4">5. Cancellations & Refunds</h2>
            <p className="mb-4">See our <a href="/cancellation-policy" className="text-rasta-green hover:underline">Cancellation Policy</a> for details. Summary: 30+ days = 100% refund, 15-29 days = 50%, 8-14 days = 25%, 0-7 days = non-refundable. Weather cancellations by us = full refund or reschedule.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-green mb-4">6. Safety & Liability</h2>
            <p className="mb-4"><strong>You acknowledge water activities involve risks.</strong> You assume all risks and release High Tide Tours from liability. You must be in good health, disclose medical conditions, follow safety instructions, and wear provided safety equipment. We recommend travel insurance.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-red mb-4">7. Code of Conduct</h2>
            <p className="mb-4">We maintain a safe, respectful environment. Prohibited: aggressive behavior, excessive intoxication, harassment, equipment damage, safety violations. We reserve the right to refuse service without refund.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-yellow mb-4">8. Photography & Weather</h2>
            <p className="mb-4">We may photograph tours for marketing. Inform your guide if you prefer not to be photographed. We reserve the right to cancel tours due to unsafe weather (full refund or reschedule within 12 months).</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-green mb-4">9. Governing Law</h2>
            <p className="mb-4">These terms are governed by South African law. Disputes shall be resolved in Cape Town courts. We may modify these terms at any time (check for updates).</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-red mb-4">10. Contact</h2>
            <p className="mb-4">Email: info@hightidetours.co.za | Phone/WhatsApp: +27 64 220 5618 | Address: V&A Waterfront, Cape Town</p>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-700"><strong>By booking, you acknowledge you have read and agree to these Terms of Service.</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
