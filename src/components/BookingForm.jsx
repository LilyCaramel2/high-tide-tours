import { useState } from 'react';

function BookingForm({ packageName, packagePrice, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: packageName || '',
    dates: '',
    numPeople: 1,
    specialRequests: ''
  });
  const [showPayment, setShowPayment] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('ZAR');

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const depositAmount = 'R500';
  
  const paymentDetails = {
    ZAR: {
      name: 'MS LM GODDEN',
      bank: 'Capitec Bank',
      accountNumber: '1893142181',
      branchCode: '470010',
      reference: `${formData.name.replace(/\s+/g, '')}-${packageName?.split(' ')[0] || 'BOOKING'}`
    },
    EUR: {
      name: 'Melissa Amanda Godden',
      iban: 'BE97 9671 5373 3949',
      swift: 'TRWIBEB1XXX',
      bank: 'Wise, Rue du Trône 100, 3rd floor, Brussels, 1050, Belgium',
      amount: '€25',
      reference: `${formData.name.replace(/\s+/g, '')}-${packageName?.split(' ')[0] || 'BOOKING'}`
    },
    GBP: {
      name: 'Melissa Amanda Godden',
      iban: 'GB91 TRWI 2314 7052 5401 65',
      swift: 'TRWIGB2LXXX',
      bank: 'Wise Payments Limited, 1st Floor, Worship Square, 65 Clifton Street, London, EC2A 4JE, UK',
      amount: '£20',
      reference: `${formData.name.replace(/\s+/g, '')}-${packageName?.split(' ')[0] || 'BOOKING'}`
    },
    USD: {
      name: 'Melissa Amanda Godden',
      accountNumber: '8312540542',
      routingNumber: '026073150',
      swift: 'CMFGUS33',
      bank: 'Community Federal Savings Bank, 89-16 Jamaica Ave, Woodhaven, NY, 11421, USA',
      amount: '$30',
      reference: `${formData.name.replace(/\s+/g, '')}-${packageName?.split(' ')[0] || 'BOOKING'}`
    }
  };

  const whatsappMessage = `Hi! I've just booked: ${packageName}%0A%0ABooking Details:%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ADates: ${formData.dates}%0APeople: ${formData.numPeople}%0A%0AI will transfer the ${selectedCurrency === 'ZAR' ? depositAmount : paymentDetails[selectedCurrency].amount} deposit now!%0A%0AReference: ${paymentDetails[selectedCurrency].reference}`;

  if (showPayment) {
    const details = paymentDetails[selectedCurrency];
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-lg max-w-2xl w-full p-8 my-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-rasta-green">💰 Secure Your Booking</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
          </div>

          <div className="bg-rasta-yellow/10 p-6 rounded-lg mb-6 border-l-4 border-rasta-yellow">
            <p className="text-lg font-bold text-gray-800 mb-2">📋 Booking Confirmed for Review!</p>
            <p className="text-gray-700">Package: <strong>{packageName}</strong></p>
            <p className="text-gray-700">Guest: <strong>{formData.name}</strong></p>
            <p className="text-gray-700">Dates: <strong>{formData.dates}</strong></p>
            <p className="text-gray-700">People: <strong>{formData.numPeople}</strong></p>
          </div>

          {/* Currency Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Select Your Currency:</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['ZAR', 'EUR', 'GBP', 'USD'].map((currency) => (
                <button
                  key={currency}
                  onClick={() => setSelectedCurrency(currency)}
                  className={`p-3 rounded-lg font-semibold transition ${
                    selectedCurrency === currency
                      ? 'bg-rasta-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {currency === 'ZAR' && '🇿🇦 ZAR (South Africa)'}
                  {currency === 'EUR' && '🇪🇺 EUR (Europe)'}
                  {currency === 'GBP' && '🇬🇧 GBP (UK)'}
                  {currency === 'USD' && '🇺🇸 USD (USA)'}
                </button>
              ))}
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-gradient-to-r from-rasta-red/10 via-rasta-yellow/10 to-rasta-green/10 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-rasta-green mb-4">💳 Payment Details ({selectedCurrency})</h3>
            <div className="space-y-3 text-gray-800">
              <div className="flex justify-between">
                <span className="font-semibold">Account Holder:</span>
                <span className="text-right">{details.name}</span>
              </div>
              
              {selectedCurrency === 'ZAR' && (
                <>
                  <div className="flex justify-between">
                    <span className="font-semibold">Bank:</span>
                    <span>{details.bank}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Account Number:</span>
                    <span className="font-mono bg-white px-2 py-1 rounded">{details.accountNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Branch Code:</span>
                    <span className="font-mono bg-white px-2 py-1 rounded">{details.branchCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Deposit Amount:</span>
                    <span className="text-2xl font-bold text-rasta-red">{depositAmount}</span>
                  </div>
                </>
              )}
              
              {(selectedCurrency === 'EUR' || selectedCurrency === 'GBP') && (
                <>
                  <div className="flex justify-between">
                    <span className="font-semibold">IBAN:</span>
                    <span className="font-mono bg-white px-2 py-1 rounded text-sm">{details.iban}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">SWIFT/BIC:</span>
                    <span className="font-mono bg-white px-2 py-1 rounded">{details.swift}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-semibold">Bank:</span>
                    <span className="text-right text-sm">{details.bank}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Deposit Amount:</span>
                    <span className="text-2xl font-bold text-rasta-red">{details.amount}</span>
                  </div>
                </>
              )}
              
              {selectedCurrency === 'USD' && (
                <>
                  <div className="flex justify-between">
                    <span className="font-semibold">Account Number:</span>
                    <span className="font-mono bg-white px-2 py-1 rounded">{details.accountNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Routing Number:</span>
                    <span className="font-mono bg-white px-2 py-1 rounded">{details.routingNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">SWIFT/BIC:</span>
                    <span className="font-mono bg-white px-2 py-1 rounded">{details.swift}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-semibold">Bank:</span>
                    <span className="text-right text-sm">{details.bank}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Deposit Amount:</span>
                    <span className="text-2xl font-bold text-rasta-red">{details.amount}</span>
                  </div>
                </>
              )}
              
              <div className="flex justify-between pt-3 border-t-2 border-rasta-green">
                <span className="font-semibold">Payment Reference:</span>
                <span className="font-mono bg-white px-2 py-1 rounded text-sm">{details.reference}</span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-rasta-green/10 p-6 rounded-lg mb-6">
            <h4 className="font-bold text-rasta-green mb-3">📝 Next Steps:</h4>
            <ol className="space-y-2 text-gray-700">
              <li>✅ Transfer the deposit to the account above</li>
              <li>✅ Use the payment reference exactly as shown</li>
              <li>✅ Click the WhatsApp button below to confirm payment</li>
              <li>✅ We'll email you confirmation within 2 hours</li>
              <li>✅ Balance due 48 hours before your tour date</li>
            </ol>
          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/27642205618?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green text-white font-bold py-4 px-6 rounded-lg text-center hover:scale-105 transition-all mb-4"
          >
            💬 Confirm Booking via WhatsApp
          </a>

          <p className="text-center text-sm text-gray-600">
            You'll also receive a confirmation email at <strong>{formData.email}</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-2xl w-full p-8 my-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-rasta-green">📝 Book Your Experience</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rasta-green focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rasta-green focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone (WhatsApp) *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rasta-green focus:border-transparent"
                placeholder="+27 xx xxx xxxx"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Package Selected</label>
            <input
              type="text"
              name="package"
              value={formData.package}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              readOnly
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Dates *</label>
              <input
                type="text"
                name="dates"
                required
                value={formData.dates}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rasta-green focus:border-transparent"
                placeholder="e.g., Feb 15-17, 2026"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Number of People *</label>
              <input
                type="number"
                name="numPeople"
                required
                min="1"
                value={formData.numPeople}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rasta-green focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests (Optional)</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rasta-green focus:border-transparent"
              placeholder="Dietary requirements, experience level, special occasions, etc."
            />
          </div>

          <div className="bg-rasta-yellow/10 p-4 rounded-lg border-l-4 border-rasta-yellow">
            <p className="text-sm text-gray-700">
              <strong>Deposit:</strong> R500 secures your booking. Balance due 48 hours before tour.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green text-white font-bold py-4 px-6 rounded-lg hover:scale-105 transition-all"
          >
            Continue to Payment Details →
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;