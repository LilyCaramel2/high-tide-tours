function BookingTerms() {
  return (
    <div className="min-h-screen py-16">
      <div className="section-container max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
          Booking Terms & Conditions
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            Last updated: January 18, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-red mb-4">What's Included in Your Tour</h2>
            <div className="bg-green-50 border-l-4 border-rasta-green p-6">
              <h3 className="text-xl font-semibold mb-3">All Tours Include:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Professional Crew:</strong> Experienced captain and guides</li>
                <li><strong>Safety Equipment:</strong> Life jackets, first aid kit, emergency gear</li>
                <li><strong>Refreshments:</strong> Water, soft drinks, light snacks</li>
                <li><strong>Onboard Facilities:</strong> Restroom, seating, shade</li>
                <li><strong>Insurance:</strong> Full liability coverage for all passengers</li>
                <li><strong>Cannabis-Friendly Environment:</strong> Private vessel for legal consumption</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-yellow mb-4">What to Bring</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-rasta-red">Required:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Valid photo ID (18+ verification)</li>
                  <li>Booking confirmation</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-rasta-green">Recommended:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sunscreen (SPF 30+)</li>
                  <li>Sunglasses & hat</li>
                  <li>Light jacket (evening tours)</li>
                  <li>Camera/phone</li>
                  <li>Swimwear & towel (if swimming)</li>
                  <li>Motion sickness medication (if needed)</li>
                  <li>Personal cannabis (if consuming)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-green mb-4">Meeting Point & Arrival</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4">
              <p className="mb-3"><strong>Location:</strong> V&A Waterfront Marina, Cape Town</p>
              <p className="mb-3"><strong>Arrival Time:</strong> Please arrive <strong>15 minutes before</strong> your scheduled departure</p>
              <p className="mb-3"><strong>Check-in:</strong> Report to High Tide Tours desk at the marina</p>
              <p className="text-sm">Exact meeting point details will be provided in your booking confirmation email.</p>
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Late Arrival Policy</h3>
            <p className="mb-2">⏰ <strong>Tours depart on time.</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Late arrivals may not be accommodated</li>
              <li>No refunds for missed departures due to late arrival</li>
              <li>Subject to standard cancellation policy</li>
            </ul>
            <p className="text-sm text-gray-600">Please plan for traffic and parking. Contact us immediately if you're running late: +27 64 220 5618</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-red mb-4">Group Sizes & Private Charters</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Tour Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Min Guests</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Max Guests</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Sunset Sailing Session</td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">12</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Harbor Cruise</td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">10</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Private Charter</td>
                    <td className="border border-gray-300 px-4 py-2">6</td>
                    <td className="border border-gray-300 px-4 py-2">15</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600">Private charters available upon request. Contact us for custom group experiences and corporate events.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-yellow mb-4">Health & Safety Requirements</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Medical Disclosure</h3>
            <p className="mb-4">You must disclose any medical conditions that may affect your ability to participate safely, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Heart conditions or high blood pressure</li>
              <li>Respiratory issues (asthma, COPD)</li>
              <li>Pregnancy</li>
              <li>Recent surgery or injuries</li>
              <li>Mobility limitations</li>
              <li>Severe allergies</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">Restrictions</h3>
            <div className="bg-red-50 border-l-4 border-rasta-red p-6">
              <p className="mb-2"><strong>Cannot Participate:</strong></p>
              <ul className="list-disc pl-6">
                <li>Pregnant guests (due to boat movement and safety risks)</li>
                <li>Guests with severe mobility limitations (unless discussed in advance)</li>
                <li>Guests under the influence of alcohol or drugs at check-in</li>
                <li>Children under 18 years old</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-green mb-4">Cannabis Consumption Guidelines</h2>
            <div className="bg-yellow-50 border-l-4 border-rasta-yellow p-6">
              <h3 className="font-semibold mb-3">Important Reminders:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consumption is Optional:</strong> You don't have to consume cannabis to enjoy our tours</li>
                <li><strong>Guest Provides:</strong> You are responsible for sourcing your own cannabis from legal sources</li>
                <li><strong>We Provide Guidance:</strong> Referrals to legal dispensaries and cannabis lounges available</li>
                <li><strong>Personal Use Only:</strong> Quantities must comply with South African law</li>
                <li><strong>Private Consumption:</strong> Only in designated areas on our private vessel</li>
                <li><strong>Respect Others:</strong> Be considerate of non-consuming guests</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-red mb-4">Weather & Sea Conditions</h2>
            <p className="mb-4"><strong>Safety is our top priority.</strong> Tours may be modified or cancelled due to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>High winds or dangerous swells</li>
              <li>Lightning or storms</li>
              <li>Poor visibility (fog)</li>
              <li>Extreme heat warnings</li>
              <li>Any conditions deemed unsafe by our captain</li>
            </ul>
            <p className="mb-2">In the event of operator cancellation, you will receive:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Option 1:</strong> Full refund (100%)</li>
              <li><strong>Option 2:</strong> Reschedule to any date within 12 months (no fee)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-yellow mb-4">Travel Insurance</h2>
            <p className="mb-4">We <strong>strongly recommend</strong> purchasing travel insurance that covers:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Trip cancellations and interruptions</li>
              <li>Medical emergencies</li>
              <li>Lost or damaged personal belongings</li>
              <li>Unforeseen circumstances preventing travel</li>
            </ul>
            <p className="text-sm text-gray-600">Travel insurance may reimburse you for non-refundable amounts in covered situations beyond our control.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-green mb-4">Photography & Social Media</h2>
            <p className="mb-4">Our crew may photograph or video record tours for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Social media content</li>
              <li>Website marketing</li>
              <li>Promotional materials</li>
            </ul>
            <p className="mb-4">By participating, you grant us permission to use images containing you. <strong>If you prefer not to be photographed,</strong> please inform your guide at check-in.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-red mb-4">Lost & Found</h2>
            <p className="mb-4">While we take care to secure our vessels, High Tide Tours is <strong>not responsible for lost, stolen, or damaged personal belongings.</strong></p>
            <p className="mb-2">Please:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Keep valuables secure</li>
              <li>Don't leave items unattended</li>
              <li>Store electronics in waterproof cases</li>
              <li>Report lost items immediately to crew</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-rasta-yellow mb-4">Special Dietary Requirements</h2>
            <p className="mb-4">We provide light refreshments and snacks. If you have dietary restrictions or allergies, please inform us at the time of booking.</p>
            <p className="text-sm text-gray-600">We will make reasonable efforts to accommodate dietary needs but cannot guarantee allergen-free environments.</p>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-700">
              <strong>Questions about booking requirements?</strong><br/>
              Email: info@hightidetours.co.za | Phone/WhatsApp: +27 64 220 5618
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
            <p className="font-semibold mb-2">Related Policies:</p>
            <ul className="list-disc pl-6">
              <li><a href="/terms-of-service" className="text-rasta-green hover:underline">Terms of Service</a></li>
              <li><a href="/cancellation-policy" className="text-rasta-green hover:underline">Cancellation & Refund Policy</a></li>
              <li><a href="/privacy-policy" className="text-rasta-green hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingTerms;
