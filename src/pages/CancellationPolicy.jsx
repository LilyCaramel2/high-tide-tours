function CancellationPolicy() {
  return (
    <div className="min-h-screen py-16">
      <div className="section-container max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
          Cancellation & Refund Policy
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            Last updated: January 18, 2026
          </p>

          <div className="bg-yellow-50 border-l-4 border-rasta-yellow p-6 mb-8">
            <p className="text-lg font-semibold mb-2">Important</p>
            <p>Please read this cancellation policy carefully before booking. By completing your reservation, you agree to the terms outlined below.</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-red mb-4">Deposit & Payment Structure</h2>
            <div className="bg-gray-100 p-6 rounded-lg mb-4">
              <p className="font-semibold mb-2">50% Deposit Model:</p>
              <ul className="list-disc pl-6">
                <li><strong>At Booking:</strong> 50% non-refundable deposit required to secure reservation</li>
                <li><strong>7 Days Before Tour:</strong> Remaining 50% balance due</li>
                <li><strong>Bookings Within 7 Days:</strong> 100% payment required upfront</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600">Example: R1,200 tour = R600 deposit + R600 balance due 7 days before</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-yellow mb-4">Guest Cancellation Policy</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Cancellation Timeline</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Refund Amount</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 px-4 py-2"><strong>30+ days before tour</strong></td>
                    <td className="border border-gray-300 px-4 py-2"><strong className="text-rasta-green">100% refund</strong></td>
                    <td className="border border-gray-300 px-4 py-2">Full deposit returned</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-2"><strong>15-29 days before tour</strong></td>
                    <td className="border border-gray-300 px-4 py-2"><strong className="text-rasta-yellow">50% refund</strong></td>
                    <td className="border border-gray-300 px-4 py-2">Half of total booking</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="border border-gray-300 px-4 py-2"><strong>8-14 days before tour</strong></td>
                    <td className="border border-gray-300 px-4 py-2"><strong className="text-orange-600">25% refund</strong></td>
                    <td className="border border-gray-300 px-4 py-2">Quarter of total booking</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 px-4 py-2"><strong>0-7 days before tour</strong></td>
                    <td className="border border-gray-300 px-4 py-2"><strong className="text-rasta-red">No refund</strong></td>
                    <td className="border border-gray-300 px-4 py-2">Non-refundable</td>
                  </tr>
                  <tr className="bg-red-100">
                    <td className="border border-gray-300 px-4 py-2"><strong>No-show</strong></td>
                    <td className="border border-gray-300 px-4 py-2"><strong className="text-rasta-red">No refund</strong></td>
                    <td className="border border-gray-300 px-4 py-2">100% forfeited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-green mb-4">Weather Cancellations (By Operator)</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="mb-4"><strong>Your safety is our priority.</strong> If we cancel your tour due to unsafe weather or sea conditions, you have two options:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Option 1: Full Refund</strong> - 100% of your payment returned within 5-7 business days</li>
                <li><strong>Option 2: Reschedule</strong> - Move your tour to any available date within 12 months at no additional charge</li>
              </ul>
              <p className="text-sm text-gray-700">Weather cancellations apply to conditions such as: high winds, dangerous swells, lightning, extreme heat, or poor visibility.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-red mb-4">Rescheduling Requests</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Date Changes</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>14+ days notice:</strong> First rescheduling is FREE (subject to availability)</li>
              <li><strong>7-13 days notice:</strong> R200 rescheduling fee applies</li>
              <li><strong>Within 7 days:</strong> Subject to availability, treated as cancellation if no alternate date available</li>
              <li><strong>Additional changes:</strong> R200 fee for each subsequent rescheduling</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">Group Size Changes</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Increase:</strong> Pay difference before tour date</li>
              <li><strong>Decrease (14+ days notice):</strong> Pro-rated refund of difference</li>
              <li><strong>Decrease (within 14 days):</strong> No refund for reduced guests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-yellow mb-4">Refund Processing</h2>
            <p className="mb-4"><strong>Timeline:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Approved refunds processed within 5-7 business days</li>
              <li>Funds appear in your account within 10-14 days (depending on your bank)</li>
              <li>Refunds issued to original payment method</li>
              <li>You'll receive email confirmation when refund is processed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-green mb-4">How to Cancel or Reschedule</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="mb-4"><strong>Step 1:</strong> Contact us as soon as possible</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Email: info@hightidetours.co.za</li>
                <li>WhatsApp: +27 64 220 5618</li>
                <li>Phone: +27 64 220 5618</li>
              </ul>
              <p className="mb-4"><strong>Step 2:</strong> Provide your booking reference number and preferred action (cancel or reschedule)</p>
              <p className="mb-4"><strong>Step 3:</strong> Receive confirmation email with refund/rescheduling details</p>
              <p className="text-sm text-gray-700">Cancellation requests must be made in writing (email/WhatsApp) for record-keeping.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-red mb-4">Special Circumstances</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Medical Emergencies</h3>
            <p className="mb-4">In cases of documented medical emergencies (hospitalization, serious illness), we may offer rescheduling options outside standard policy. Medical documentation required.</p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Travel Restrictions</h3>
            <p className="mb-4">Government-imposed travel restrictions or border closures may qualify for full refund or extended rescheduling period. Case-by-case basis.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-yellow mb-4">Important Notes</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>All refund calculations based on total booking amount (not just deposit)</li>
              <li>Cancellation timeline calculated from tour start date, not booking date</li>
              <li>Refunds subject to payment processing fees where applicable</li>
              <li>Group bookings follow same cancellation policy per person</li>
              <li>Gift vouchers subject to separate terms (12-month validity)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-green mb-4">Travel Insurance Recommendation</h2>
            <p className="mb-4">We strongly recommend purchasing travel insurance that covers trip cancellations, medical emergencies, and unforeseen circumstances. Travel insurance may reimburse non-refundable amounts in covered situations.</p>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-700">
              <strong>Questions about our cancellation policy?</strong><br/>
              Contact us: info@hightidetours.co.za | +27 64 220 5618
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CancellationPolicy;
