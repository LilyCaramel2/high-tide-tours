import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full z-50">
        <nav className="section-container !py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🌊</span>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
              HIGH TIDE TOURS
            </h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-rasta-green transition">Home</a>
            <a href="#tours" className="hover:text-rasta-green transition">Tours</a>
            <a href="#ceremonies" className="hover:text-rasta-green transition">Ceremonies</a>
            <a href="#pricing" className="hover:text-rasta-green transition">Pricing</a>
            <a href="#contact" className="hover:text-rasta-green transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center rasta-gradient">
        <div className="section-container text-center text-white">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Cannabis Tourism + Water Sports
          </h2>
          <p className="text-2xl md:text-3xl mb-8 drop-shadow-lg">
            Luxury 420 Tours, Ceremonies & Ocean Adventures in Cape Town
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#tours" className="btn-primary">
              Explore Tours
            </a>
            <a href="#contact" className="bg-white text-rasta-green hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="section-container">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="rasta-gradient bg-clip-text text-transparent">Our Tours</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tour Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
            <div className="h-48 bg-gradient-to-br from-rasta-red to-rasta-yellow"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Ocean Bliss</h3>
              <p className="text-gray-600 mb-4">Yacht + beaches + cannabis lounges</p>
              <p className="text-3xl font-bold text-rasta-green mb-4">R3,800</p>
              <button className="w-full btn-primary">Book Now</button>
            </div>
          </div>

          {/* Tour Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
            <div className="h-48 bg-gradient-to-br from-rasta-yellow to-rasta-green"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Peninsula High</h3>
              <p className="text-gray-600 mb-4">Cape Point + scenic drives + lounges</p>
              <p className="text-3xl font-bold text-rasta-green mb-4">R3,800</p>
              <button className="w-full btn-primary">Book Now</button>
            </div>
          </div>

          {/* Tour Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
            <div className="h-48 bg-gradient-to-br from-rasta-green to-rasta-red"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Winelands Elevated</h3>
              <p className="text-gray-600 mb-4">Wine + cannabis pairings</p>
              <p className="text-3xl font-bold text-rasta-green mb-4">R3,800</p>
              <button className="w-full btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Ceremonies Section */}
      <section id="ceremonies" className="bg-gray-100 section-container">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="rasta-gradient bg-clip-text text-transparent">Ceremony Experiences</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-4">🌕</div>
            <h3 className="text-2xl font-bold mb-2">Full Moon Ritual</h3>
            <p className="text-gray-600 mb-4">Koi San storytelling, drumming, fire ceremony</p>
            <p className="text-3xl font-bold text-rasta-green">R2,999</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-4">🌅</div>
            <h3 className="text-2xl font-bold mb-2">Sunrise Awakening</h3>
            <p className="text-gray-600 mb-4">Table Mountain meditation + cannabis</p>
            <p className="text-3xl font-bold text-rasta-green">R1,999</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-4">🥁</div>
            <h3 className="text-2xl font-bold mb-2">Drumming Circle</h3>
            <p className="text-gray-600 mb-4">African stories + cannabis</p>
            <p className="text-3xl font-bold text-rasta-green">R1,799</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="rasta-gradient bg-clip-text text-transparent">Get In Touch</span>
        </h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-4 text-center">
            <p><strong>Email:</strong> <a href="mailto:hightidetours@gmail.com" className="text-rasta-green hover:underline">hightidetours@gmail.com</a></p>
            <p><strong>Phone:</strong> +27 64 220 5618</p>
            <p><strong>Instagram:</strong> <a href="https://instagram.com/hightidetours" className="text-rasta-green hover:underline">@hightidetours</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="section-container text-center">
          <p className="text-lg mb-2">🌊 High Tide Tours</p>
          <p className="text-gray-400">Cannabis Tourism + Water Sports | Cape Town, South Africa</p>
          <p className="text-gray-500 text-sm mt-4">© 2026 High Tide Tours. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
