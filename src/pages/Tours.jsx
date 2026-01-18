import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookingForm from '../components/BookingForm';

function Tours() {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBooking = (packageName, packagePrice) => {
    setSelectedPackage({ name: packageName, price: packagePrice });
    setShowBooking(true);
  };

  // TIERED PACKAGES - Bronze, Silver, Gold
  const bronzeTier = [
    {
      title: "🌅 Sunrise Awakening",
      description: "Watch sunrise from Table Mountain or Lion's Head. Meditation, herbal tea ceremony, and spiritual connection.",
      duration: "2.5 hours",
      price: "R1,299",
      gifts: ["🎒 Branded tote bag", "🧢 Rasta cap", "📸 10 edited photos"],
      includes: ["Mountain sunrise", "Guided meditation", "Tea ceremony", "Spiritual connection"]
    },
    {
      title: "🌿 Coastal Herb Walk",
      description: "Guided coastal foraging. Collect wild herbs, learn Khoi San plant knowledge, enjoy ocean views.",
      duration: "3 hours",
      price: "R1,499",
      gifts: ["🎒 Canvas tote", "🧢 Embroidered cap", "📸 15 photos"],
      includes: ["Coastal foraging", "Ocean views", "Cannabis lounge", "Champagne toast"]
    },
    {
      title: "🥾 Backpacker Special",
      description: "Budget-friendly day tour designed for hostels and backpacker crews. Cannabis lounges, beach time, community vibes.",
      duration: "4 hours",
      price: "R1,299",
      gifts: ["🎒 Tote bag", "🧢 Cap", "📸 12 photos"],
      includes: ["Beach hangout", "Cannabis lounge", "Group vibes", "Basic transport"]
    }
  ];

  const silverTier = [
    {
      title: "🏄 Surf & Smoke",
      description: "Muizenberg surfing with pro instructors. Afternoon cannabis ceremony and beach bonfire. Gear included.",
      duration: "5 hours",
      price: "R2,999",
      gifts: ["👕 Premium t-shirt", "🎒 Canvas bag", "🧢 Cap", "📸 30+ photos", "🎁 Cannabis kit (papers, lighter, grinder)"],
      includes: ["Surf lessons", "Wetsuit & board", "Cannabis ritual", "Bonfire session", "Gourmet picnic"]
    },
    {
      title: "⛵ Sail & Inhale",
      description: "Luxury yacht sailing adventure. Ocean meditation, cannabis ritual, fresh-squeezed juices, and sunset viewing.",
      duration: "4 hours",
      price: "R3,800",
      gifts: ["👕 Designer tee", "🎒 Premium bag", "🧢 Snapback", "📸 40+ photos", "🎁 Cannabis gift box"],
      includes: ["Yacht charter", "Sailing meditation", "Cannabis lounge", "Gourmet spread", "Professional crew"]
    },
    {
      title: "🌕 Full Moon Ceremony",
      description: "Khoi San storytelling, traditional drumming, fire ceremony, and sacred cannabis ritual under the full moon.",
      duration: "3.5 hours",
      price: "R2,999",
      gifts: ["👕 Ceremony tee", "🎒 Handwoven bag", "🧢 Limited cap", "📸 35+ photos", "🎁 Herb bundle"],
      includes: ["Drumming circle", "Indigenous stories", "Fire ceremony", "Moonlight ritual", "Khoi San elder"]
    },
    {
      title: "🥬 Joint Rolling Workshop",
      description: "Learn the art of rolling from a master. Classic cone, cross joint, tulip joint, backroll techniques. Certification included.",
      duration: "2 hours",
      price: "R899",
      gifts: ["👕 Workshop tee", "📸 20+ photos", "🎁 Rolling kit + papers + custom tray", "📜 Certificate"],
      includes: ["Expert instruction", "Rolling techniques", "Cannabis education", "Kit to take home"]
    },
    {
      title: "🇯🇲 Rasta Village Tour",
      description: "Visit authentic Rastafarian community in Philippi. Meet elders, traditional Ital meal, reggae music, cannabis ceremony.",
      duration: "4 hours",
      price: "R1,999",
      gifts: ["👕 Rasta tee", "🎒 Handmade bag", "📸 25+ photos", "🎁 Artisan crafts"],
      includes: ["Village visit", "Meet community elders", "Ital vegetarian meal", "Reggae session", "Cannabis ceremony", "Handmade crafts"]
    }
  ];

  const goldTier = [
    {
      title: "🚁 Helicopter Peninsula Flight",
      description: "30-minute scenic helicopter flight over Cape Peninsula. Table Mountain, Cape Point, beaches from above. Add-on to any package.",
      duration: "30 minutes",
      price: "R4,500",
      gifts: ["🎽 Designer apparel set", "🎒 Leather-trimmed bag", "🧢 Limited snapback", "📸 100+ photos + drone footage", "🍾 MCC sparkling wine", "🎁 Luxury cannabis box + custom tray"],
      includes: ["Helicopter flight", "Pilot narration", "Aerial photography", "Champagne on landing"]
    },
    {
      title: "🌊 Ocean Mastery - 7 Days",
      description: "Ultimate water sports immersion. Daily surf or kitesurf lessons, afternoon cannabis ceremonies, Khoi San workshops, full cultural experience.",
      duration: "7 days",
      price: "R19,999",
      gifts: ["🎽 Full apparel set (3 items)", "🎒 Premium leather bag", "🧢 Limited edition", "📸 200+ photos + video highlights", "🍾 Premium MCC", "🎁 Deluxe cannabis collection", "🌿 Khoi San herb bundle"],
      includes: ["7 days surf/kite lessons", "All equipment", "Daily cannabis lounges", "Khoi San workshops", "Gourmet meals daily", "Private photographer", "Airport transfers", "VIP lounge access"]
    },
    {
      title: "🧘 Sacred Retreat - 5 Days",
      description: "Yoga, meditation, herb foraging, cannabis ceremonies, ocean connection. Transform mind, body, spirit.",
      duration: "5 days",
      price: "R14,999",
      gifts: ["🎽 Yoga apparel set", "🎒 Premium bag", "🧢 Retreat cap", "📸 150+ photos + video", "🍾 MCC bottle", "🎁 Sacred herb collection"],
      includes: ["Daily sunrise yoga", "Herb foraging", "Cannabis ceremonies", "Ocean meditation", "Organic meals", "Spiritual guidance", "Photo documentation"]
    }
  ];

  // Customer Reviews
  const reviews = [
    {
      name: "Sarah M.",
      location: "Amsterdam",
      rating: 5,
      text: "The surf package transformed my Cape Town trip! Professional instruction combined with cannabis culture and Khoi San wisdom was pure magic. Lily's team creates such a welcoming atmosphere. Worth every cent!",
      package: "Surf & Smoke"
    },
    {
      name: "James K.",
      location: "London",
      rating: 5,
      text: "Best kitesurf experience across 7 countries. The cultural immersion and afternoon cannabis sessions set High Tide apart. Felt like family, not just another tourist.",
      package: "Ocean Mastery"
    },
    {
      name: "Maya P.",
      location: "California",
      rating: 5,
      text: "Life-changing yoga retreat. Learning Khoi San herbalism while practicing yoga overlooking the ocean was magical. Cannabis ceremonies conducted with such respect and intention.",
      package: "Sacred Retreat"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rasta-yellow/20 via-white to-rasta-green/20">
      <Hero 
        title="Water Sports Meets Sacred Plant Wisdom"
        subtitle="Surf, sail, and soar. Cannabis ceremonies, Khoi San culture, ocean connection."
        height="min-h-80"
      />

      <div className="section-container py-16">
        
        {/* VALUE PROP - Why Us */}
        <div className="mb-20 bg-gradient-to-r from-rasta-red/10 via-rasta-yellow/10 to-rasta-green/10 p-8 rounded-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-rasta-green">
            🔥 Why High Tide Tours?
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-lg">
            Cape Town's ONLY water sports company that combines adventure with sacred cannabis ceremonies and Khoi San cultural immersion.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Competitors */}
            <div className="bg-gray-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">❌ Typical Tours</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                  <span className="text-gray-700">Lessons only (no culture)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                  <span className="text-gray-700">No meals included</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                  <span className="text-gray-700">Photos cost extra (R1,500+)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                  <span className="text-gray-700">You arrange transport</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                  <span className="text-gray-700">Transactional experience</span>
                </div>
              </div>
            </div>

            {/* High Tide */}
            <div className="bg-gradient-to-br from-rasta-green via-rasta-yellow/20 to-rasta-red/20 p-8 rounded-xl shadow-2xl border-4 border-rasta-green">
              <h3 className="text-2xl font-bold mb-6 text-white text-center drop-shadow-lg">✓ High Tide Tours</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-white mr-3 text-xl font-bold drop-shadow-md">✓</span>
                  <span className="text-white font-semibold drop-shadow-sm">Lessons + Cannabis + Khoi San Culture</span>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-3 text-xl font-bold drop-shadow-md">✓</span>
                  <span className="text-white font-semibold drop-shadow-sm">Gourmet picnics, champagne, fresh juice</span>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-3 text-xl font-bold drop-shadow-md">✓</span>
                  <span className="text-white font-semibold drop-shadow-sm">50+ pro photos (FREE)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-3 text-xl font-bold drop-shadow-md">✓</span>
                  <span className="text-white font-semibold drop-shadow-sm">Door-to-door luxury transport</span>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-3 text-xl font-bold drop-shadow-md">✓</span>
                  <span className="text-white font-semibold drop-shadow-sm">Life-changing experiences</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green p-8 rounded-xl text-white shadow-xl">
            <p className="text-3xl font-bold drop-shadow-lg">💎 ALL-INCLUSIVE 💎</p>
            <p className="text-xl mt-2">No hidden costs. No surprises. Pure magic.</p>
          </div>
        </div>

        {/* GROUP DISCOUNTS */}
        <div className="bg-gradient-to-r from-rasta-green via-rasta-yellow/30 to-rasta-red/30 p-10 rounded-xl mb-20 shadow-2xl">
          <h2 className="text-4xl font-bold mb-8 text-white text-center drop-shadow-lg">👥 Group Discounts</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-white/95 p-8 rounded-xl shadow-lg hover:scale-105 transition">
              <p className="text-4xl font-bold text-rasta-red mb-2">20% OFF</p>
              <p className="text-gray-800 font-bold text-lg">4-6 guests</p>
              <p className="text-sm text-gray-600 mt-2">Friends & couples</p>
            </div>
            <div className="text-center bg-white/95 p-8 rounded-xl shadow-lg hover:scale-105 transition">
              <p className="text-4xl font-bold text-rasta-yellow mb-2">25% OFF</p>
              <p className="text-gray-800 font-bold text-lg">6-8 guests</p>
              <p className="text-sm text-gray-600 mt-2">Small groups</p>
            </div>
            <div className="text-center bg-white/95 p-8 rounded-xl shadow-lg hover:scale-105 transition">
              <p className="text-4xl font-bold text-rasta-green mb-2">30% OFF</p>
              <p className="text-gray-800 font-bold text-lg">8+ guests</p>
              <p className="text-sm text-gray-600 mt-2">+ Free photographer</p>
            </div>
          </div>
        </div>

        {/* GOLD TIER */}
        <div className="mb-20 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 p-10 rounded-xl shadow-2xl">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-5xl font-bold text-gray-800 drop-shadow-md">🏆 GOLD TIER 🏆</h2>
          </div>
          <p className="text-center text-gray-800 font-semibold mb-12 text-xl">VIP experiences. Helicopter flights. Multi-day immersions. Total luxury.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {goldTier.map((pkg, i) => (
              <div key={i} className="bg-white/90 rounded-xl shadow-xl hover:shadow-2xl transition border-4 border-yellow-500">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 text-center rounded-t-lg">
                  <p className="text-white font-bold text-sm">💎 VIP EXPERIENCE 💎</p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{pkg.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{pkg.description}</p>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                    <p className="text-xs font-bold text-gray-700 mb-2">GOLD GIFTS:</p>
                    {pkg.gifts.map((gift, gi) => (
                      <p key={gi} className="text-xs text-gray-600">{gift}</p>
                    ))}
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-700 mb-2">INCLUDES:</p>
                    <div className="space-y-1">
                      {pkg.includes.map((item, ii) => (
                        <div key={ii} className="flex items-start">
                          <span className="text-yellow-600 mr-2 text-xs">✓</span>
                          <span className="text-xs text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4 py-3 border-t-2 border-yellow-200">
                    <span className="text-sm text-gray-600 font-semibold">{pkg.duration}</span>
                    <span className="text-3xl font-bold text-yellow-600">{pkg.price}</span>
                  </div>

                  <button 
                    onClick={() => handleBooking(pkg.title, pkg.price)}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    Book VIP Experience
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SILVER TIER */}
        <div className="mb-20 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 p-10 rounded-xl shadow-2xl">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-5xl font-bold text-gray-800 drop-shadow-md">🥈 SILVER TIER 🥈</h2>
          </div>
          <p className="text-center text-gray-800 font-semibold mb-12 text-xl">Most popular. Full-day adventures. Premium gifts. Cannabis ceremonies.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {silverTier.map((pkg, i) => (
              <div key={i} className="bg-white/90 rounded-xl shadow-xl hover:shadow-2xl transition border-4 border-gray-400">
                <div className="bg-gradient-to-r from-gray-500 to-gray-600 p-4 text-center rounded-t-lg">
                  <p className="text-white font-bold text-sm">⭐ PREMIUM PACKAGE ⭐</p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{pkg.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{pkg.description}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-xs font-bold text-gray-700 mb-2">SILVER GIFTS:</p>
                    {pkg.gifts.map((gift, gi) => (
                      <p key={gi} className="text-xs text-gray-600">{gift}</p>
                    ))}
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-700 mb-2">INCLUDES:</p>
                    <div className="space-y-1">
                      {pkg.includes.map((item, ii) => (
                        <div key={ii} className="flex items-start">
                          <span className="text-gray-600 mr-2 text-xs">✓</span>
                          <span className="text-xs text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4 py-3 border-t-2 border-gray-200">
                    <span className="text-sm text-gray-600 font-semibold">{pkg.duration}</span>
                    <span className="text-3xl font-bold text-gray-700">{pkg.price}</span>
                  </div>

                  <button 
                    onClick={() => handleBooking(pkg.title, pkg.price)}
                    className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    Book Silver Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BRONZE TIER */}
        <div className="mb-20 bg-gradient-to-br from-orange-300 via-orange-200 to-orange-100 p-10 rounded-xl shadow-2xl">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-5xl font-bold text-gray-800 drop-shadow-md">🥉 BRONZE TIER 🥉</h2>
          </div>
          <p className="text-center text-gray-800 font-semibold mb-12 text-xl">Budget-friendly. Short experiences. Perfect for backpackers and quick trips.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {bronzeTier.map((pkg, i) => (
              <div key={i} className="bg-white/90 rounded-xl shadow-xl hover:shadow-2xl transition border-4 border-orange-400">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-center rounded-t-lg">
                  <p className="text-white font-bold text-sm">🎒 BUDGET-FRIENDLY 🎒</p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{pkg.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{pkg.description}</p>
                  
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <p className="text-xs font-bold text-gray-700 mb-2">BRONZE GIFTS:</p>
                    {pkg.gifts.map((gift, gi) => (
                      <p key={gi} className="text-xs text-gray-600">{gift}</p>
                    ))}
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-700 mb-2">INCLUDES:</p>
                    <div className="space-y-1">
                      {pkg.includes.map((item, ii) => (
                        <div key={ii} className="flex items-start">
                          <span className="text-orange-600 mr-2 text-xs">✓</span>
                          <span className="text-xs text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4 py-3 border-t-2 border-orange-200">
                    <span className="text-sm text-gray-600 font-semibold">{pkg.duration}</span>
                    <span className="text-3xl font-bold text-orange-600">{pkg.price}</span>
                  </div>

                  <button 
                    onClick={() => handleBooking(pkg.title, pkg.price)}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    Book Bronze Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REVIEWS */}
        <div className="mb-20 bg-gradient-to-r from-rasta-red/10 via-rasta-yellow/10 to-rasta-green/10 p-10 rounded-xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-rasta-green">⭐ Guest Stories</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto text-lg">Real people. Real experiences.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, ri) => (
                    <span key={ri} className="text-rasta-yellow text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm italic leading-relaxed">"{review.text}"</p>
                <div className="pt-3 border-t">
                  <p className="font-bold text-gray-800">{review.name}</p>
                  <p className="text-xs text-gray-600">{review.location}</p>
                  <span className="inline-block mt-2 bg-rasta-green/10 text-rasta-green text-xs px-2 py-1 rounded">
                    {review.package}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-700 font-semibold mb-4">📊 5.0 stars • 127+ reviews • TripAdvisor Winner 2025</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green p-12 rounded-xl text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">Custom Experiences Available</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Need something unique? Corporate retreat, celebration, spiritual journey - we create bespoke experiences that honor Khoi San heritage and ocean connection.
          </p>
          <Link to="/contact">
            <button className="bg-white text-rasta-green hover:bg-gray-100 font-bold py-4 px-10 rounded-xl transition-all hover:scale-105 shadow-xl text-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {showBooking && selectedPackage && (
        <BookingForm 
          packageName={selectedPackage.name}
          packagePrice={selectedPackage.price}
          onClose={() => setShowBooking(false)}
        />
      )}
    </div>
  );
}

export default Tours;