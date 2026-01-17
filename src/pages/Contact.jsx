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
            Ready to experience Cape Town from the water? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-rasta-green">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rasta-green"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rasta-green"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rasta-green"
                  placeholder="+27 123 456 789"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rasta-green"
                  placeholder="Tell us about your ideal experience..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-rasta-red">Contact Information</h3>
              <div className="space-y-3">
                <p className="flex items-center text-gray-700">
                  <span className="font-bold mr-2">📧 Email:</span>
                  info@hightidetours.co.za
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="font-bold mr-2">📱 Phone:</span>
                  +27 123 456 789
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="font-bold mr-2">📍 Location:</span>
                  V&A Waterfront, Cape Town
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-rasta-gold">Operating Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-bold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-bold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                <p><span className="font-bold">Sunday:</span> By appointment only</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Follow Us</h3>
              <p className="text-white mb-4">
                Stay connected for the latest tours, tips, and special offers!
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-rasta-green px-4 py-2 rounded font-bold hover:bg-gray-100 transition">
                  Instagram
                </button>
                <button className="bg-white text-rasta-green px-4 py-2 rounded font-bold hover:bg-gray-100 transition">
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
