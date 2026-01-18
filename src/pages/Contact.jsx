function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to experience Cape Town's ocean magic? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-rasta-green">Send us a Message</h2>
            <form className="space-y-4" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Name *</label>
                <input 
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rasta-green"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email *</label>
                <input 
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rasta-green"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Phone (WhatsApp)</label>
                <input 
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rasta-green"
                  placeholder="+27 xx xxx xxxx"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message *</label>
                <textarea 
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rasta-green"
                  placeholder="Tell us about your ideal experience..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message 🚀
              </button>
            </form>
            
            {/* WhatsApp Direct Button */}
            <div className="mt-6 pt-6 border-t">
              <p className="text-center text-sm text-gray-600 mb-3">Prefer instant chat?</p>
              <a 
                href="https://wa.me/27642205618?text=Hi!%20I'd%20like%20to%20know%20more%20about%20High%20Tide%20Tours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-center transition"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-rasta-red">Contact Information</h3>
              <div className="space-y-3">
                <p className="flex items-start text-gray-700">
                  <span className="font-bold mr-2 mt-1">📧</span>
                  <div>
                    <span className="font-bold">Email:</span><br />
                    <a href="mailto:digitalnomadcapetown@gmail.com" className="text-rasta-green hover:underline">
                      digitalnomadcapetown@gmail.com
                    </a>
                  </div>
                </p>
                <p className="flex items-start text-gray-700">
                  <span className="font-bold mr-2 mt-1">📱</span>
                  <div>
                    <span className="font-bold">Phone/WhatsApp:</span><br />
                    <a href="tel:+27642205618" className="text-rasta-green hover:underline">
                      +27 64 220 5618
                    </a>
                  </div>
                </p>
                <p className="flex items-start text-gray-700">
                  <span className="font-bold mr-2 mt-1">📍</span>
                  <div>
                    <span className="font-bold">Office Address:</span><br />
                    Be Easy, 17 Sixth Ave<br />
                    Fish Hoek, 7975<br />
                    Cape Town, South Africa
                  </div>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-rasta-yellow">Operating Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-bold">Monday - Saturday:</span> 8:00 AM - 6:00 PM</p>
                <p><span className="font-bold">Sunday:</span> 9:00 AM - 5:00 PM</p>
                <p className="text-sm text-gray-600 mt-3">
                  🌊 Tours operate daily based on weather conditions
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Follow Us</h3>
              <p className="text-white mb-4">
                Stay connected for the latest tours, tips, and special offers!
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/hightidetours" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-rasta-green px-4 py-2 rounded font-bold hover:bg-gray-100 transition"
                >
                  📸 Instagram
                </a>
                <a 
                  href="https://facebook.com/hightidetours" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-rasta-green px-4 py-2 rounded font-bold hover:bg-gray-100 transition"
                >
                  👍 Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-rasta-green text-center">📍 Find Us on the Map</h3>
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8288842366895!2d18.431445315214696!3d-34.13477208056754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc43b0a1c6b5e3%3A0x7c8f8f8f8f8f8f8f!2s17%20Sixth%20Ave%2C%20Fish%20Hoek%2C%20Cape%20Town%2C%207975!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="High Tide Tours Office Location"
            ></iframe>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            🚗 Free parking available | 🚌 Public transport accessible | 🌊 5 min walk to beach
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;