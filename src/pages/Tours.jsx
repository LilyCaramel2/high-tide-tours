import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Tours() {
  const [activePackage, setActivePackage] = useState(0);

  // Multi-Day Packages
  const multiDayPackages = [
    {
      title: "🏄 Surf Mastery Package",
      description: "Professional surf lessons every morning at Muizenberg Beach with expert instructors. Afternoons: cannabis lounge sessions, beach culture immersion, and ocean connection.",
      days: [3, 5, 7],
      prices: { 3: "R8,999", 5: "R14,999", 7: "R19,999" },
      color: "rasta-red",
      highlights: [
        "Daily surf lessons (3hrs)",
        "Wetsuit & board rental",
        "Afternoon cannabis sessions",
        "Beach yoga & stretching",
        "Video analysis of technique",
        "Ocean safety training",
        "Gourmet beach picnics",
        "Professional photo package"
      ],
      typicalDay: [
        "8:00 AM - Luxury pickup from accommodation",
        "8:30-11:30 AM - Professional surf instruction at Muizenberg",
        "12:00 PM - Gourmet beach picnic with fresh juices",
        "2:00-5:00 PM - Cannabis lounge + beach yoga session",
        "5:30 PM - Return transport with photo preview",
        "Evening - Your time (optional bonfire gatherings)"
      ],
      valueBreakdown: {
        lessons: "3x Surf Lessons: R2,100",
        cannabis: "3x Cannabis Lounge: R900",
        transport: "3x Luxury Transport: R600",
        meals: "3x Gourmet Meals: R900",
        photos: "Photo Package: R1,500",
        yoga: "Beach Yoga Sessions: R600",
        equipment: "Equipment Rental: R900",
        total: "R7,500",
        youPay: "R8,999",
        premium: "R1,499 for professional curation & safety"
      }
    },
    {
      title: "🪁 Kitesurf Adventure Package",
      description: "Learn kitesurfing from certified IKO instructors at Blouberg Beach. Morning lessons, afternoon cannabis rituals, sunset sessions, and ocean meditation.",
      days: [3, 5, 7],
      prices: { 3: "R12,999", 5: "R21,999", 7: "R29,999" },
      color: "rasta-yellow",
      highlights: [
        "IKO certified instruction",
        "All equipment included",
        "Morning kitesurf sessions",
        "Afternoon cannabis lounge",
        "Wind theory & safety",
        "Table Mountain views",
        "Beach bonfire evenings",
        "Certificate upon completion"
      ],
      typicalDay: [
        "8:00 AM - Hotel pickup with coffee & pastries",
        "9:00 AM-1:00 PM - IKO kitesurf instruction at Blouberg",
        "1:30 PM - Fresh seafood lunch overlooking Table Mountain",
        "3:00-6:00 PM - Cannabis lounge + wind theory session",
        "6:30 PM - Sunset beach bonfire (optional)",
        "Evening - Return transport or stay for bonfire"
      ],
      valueBreakdown: {
        lessons: "3x Kitesurf Lessons: R3,900",
        cannabis: "3x Cannabis Access: R900",
        transport: "3x Transport: R600",
        meals: "3x Gourmet Meals: R1,200",
        photos: "Photo/Video Package: R2,000",
        equipment: "Full Equipment Rental: R2,400",
        certification: "IKO Certification: R1,500",
        total: "R12,500",
        youPay: "R12,999",
        premium: "R499 premium for certified instruction & safety"
      }
    },
    {
      title: "🧘 Yoga & Sacred Herbs Retreat",
      description: "Daily yoga practice (morning sunrise sessions), Khoi San herbalism workshops, afternoon cannabis ceremonies, and ocean meditation. Transform body, mind & spirit.",
      days: [3, 5, 7],
      prices: { 3: "R9,999", 5: "R16,999", 7: "R22,999" },
      color: "rasta-green",
      highlights: [
        "Sunrise yoga sessions",
        "Khoi San herb foraging",
        "Afternoon cannabis rituals",
        "Ocean meditation",
        "Breath work & pranayama",
        "Sacred plant ceremonies",
        "Healthy gourmet meals",
        "Spiritual guidance"
      ],
      typicalDay: [
        "6:00 AM - Sunrise pickup for mountain yoga",
        "6:30-8:30 AM - Vinyasa flow with ocean views",
        "9:00 AM - Organic breakfast & herbal teas",
        "11:00 AM-1:00 PM - Khoi San herb foraging workshop",
        "2:00-5:00 PM - Cannabis ceremony + meditation",
        "5:30 PM - Return transport with evening reflection"
      ],
      valueBreakdown: {
        yoga: "3x Sunrise Yoga: R1,500",
        foraging: "3x Herb Foraging: R1,200",
        cannabis: "3x Cannabis Ceremonies: R1,200",
        transport: "3x Transport: R600",
        meals: "3x Organic Meals: R1,200",
        photos: "Photo Documentation: R1,500",
        guidance: "Spiritual Guidance: R2,000",
        total: "R9,200",
        youPay: "R9,999",
        premium: "R799 for expert facilitation & sacred space"
      }
    }
  ];

  // Single Day Tours
  const singleDayTours = [
    {
      title: "🌿 Sacred Herb Foraging Tour",
      description: "Learn traditional Khoi San herbalism and wild plant identification. Discover medicinal and ceremonial herbs with expert guides.",
      duration: "4 hours",
      price: "R1,899",
      color: "rasta-green",
      highlights: ["Wild foraging", "Khoi San knowledge", "Basket weaving", "Tea ceremony"]
    },
    {
      title: "🌊 Ocean Bliss - Full Day Sailing",
      description: "Luxury sailing adventure combining ocean connection, cannabis ritual, and fresh-squeezed juices. Includes premium products & gift bags.",
      duration: "6 hours",
      price: "R3,800",
      color: "rasta-red",
      highlights: ["Yacht sailing", "Gourmet picnic", "Cannabis lounge", "Professional photos"]
    },
    {
      title: "⛵ Sail & Inhale Experience",
      description: "Intimate sailing journey combining ocean meditation, sacred herb knowledge, and mindful cannabis use on the water.",
      duration: "4 hours",
      price: "R2,400",
      color: "rasta-yellow",
      highlights: ["Sailing meditation", "Herb knowledge", "Ocean rituals", "Sunset viewing"]
    },
    {
      title: "🌕 Full Moon Ceremony",
      description: "Traditional Khoi San storytelling, drumming, fire ceremony, and cannabis ritual under the full moon. A truly sacred experience.",
      duration: "3 hours",
      price: "R2,999",
      color: "rasta-green",
      highlights: ["Drumming circle", "Indigenous stories", "Fire ceremony", "Moonlight ritual"]
    },
    {
      title: "🌅 Sunrise Awakening Meditation",
      description: "Watch the sunrise from Table Mountain or Lion's Head while practicing meditation and connecting to Khoi San spirituality.",
      duration: "2.5 hours",
      price: "R1,999",
      color: "rasta-red",
      highlights: ["Mountain sunrise", "Guided meditation", "Tea ceremony", "Spiritual connection"]
    },
    {
      title: "🌊 Wild Herbs & Coastal Walk",
      description: "Guided coastal foraging combining ocean views, wild herb collection, and beachside cannabis experience. Photography included.",
      duration: "3 hours",
      price: "R1,699",
      color: "rasta-yellow",
      highlights: ["Coastal foraging", "Ocean views", "Photography", "Champagne toast"]
    },
    {
      title: "🏄 Surf & Smoke Adventure",
      description: "Muizenberg beach surfing lesson combined with cannabis ceremony and beach bonfire. Perfect for thrill-seekers.",
      duration: "4 hours",
      price: "R2,200",
      color: "rasta-green",
      highlights: ["Surf lessons", "Cannabis ritual", "Beach bonfire", "Local community"]
    },
    {
      title: "🚗 Half Day Experience",
      description: "Choose your own adventure: sailing, foraging, ceremony, or water sports. Flexible 5-hour experience for budget-conscious travelers.",
      duration: "5 hours",
      price: "R2,400",
      color: "rasta-red",
      highlights: ["Flexible itinerary", "Lounge access", "Cannabis products", "Photos"]
    },
    {
      title: "🌆 Sunset Special",
      description: "3-hour evening adventure watching Cape Town's sunset with cannabis, fresh juice, music, and ocean connection.",
      duration: "3 hours",
      price: "R1,699",
      color: "rasta-yellow",
      highlights: ["Golden hour", "Cannabis lounge", "Music & dancing", "Champagne"]
    }
  ];

  // Customer Reviews
  const reviews = [
    {
      name: "Sarah M.",
      location: "Amsterdam, Netherlands",
      rating: 5,
      date: "January 2026",
      text: "The 5-day surf package completely transformed my Cape Town experience! The combination of professional instruction, cannabis culture, and Khoi San wisdom was unlike anything I've experienced. Lily and her team create such a welcoming, spiritual atmosphere. Worth every cent!",
      package: "Surf Mastery Package",
      verified: true
    },
    {
      name: "James K.",
      location: "London, UK",
      rating: 5,
      date: "December 2025",
      text: "I've taken kitesurf lessons in 7 countries and this was BY FAR the best experience. The IKO instruction was top-notch, but what sets High Tide apart is the cultural immersion and afternoon cannabis sessions. Felt like I was part of a community, not just a tourist.",
      package: "Kitesurf Adventure",
      verified: true
    },
    {
      name: "Maya P.",
      location: "California, USA",
      rating: 5,
      date: "November 2025",
      text: "The yoga retreat was life-changing. Learning about Khoi San herbalism while practicing yoga overlooking the ocean was magical. The cannabis ceremonies were conducted with such respect and intention. This isn't just a tour company - it's a gateway to sacred experiences.",
      package: "Yoga & Sacred Herbs Retreat",
      verified: true
    },
    {
      name: "Tom & Lisa R.",
      location: "Berlin, Germany",
      rating: 5,
      date: "October 2025",
      text: "We booked the Ocean Bliss sailing day and it exceeded all expectations. The yacht was beautiful, the cannabis lounge incredible, and our guide's knowledge of local marine life was impressive. The photos they took are now framed in our home. 10/10 would recommend!",
      package: "Ocean Bliss Sailing",
      verified: true
    },
    {
      name: "Carlos D.",
      location: "Barcelona, Spain",
      rating: 5,
      date: "September 2025",
      text: "Best value for money in Cape Town. I did the 3-day surf package and compared to other schools, you get SO much more included. The cannabis afternoons, gourmet food, professional photos - everything was premium quality. Already planning to come back for the 7-day package!",
      package: "Surf Mastery Package",
      verified: true
    },
    {
      name: "Priya S.",
      location: "Dubai, UAE",
      rating: 5,
      date: "August 2025",
      text: "The Full Moon Ceremony was the highlight of my South Africa trip. The Khoi San storytelling, drumming, and sacred cannabis ritual under the moon was deeply moving. This experience honored indigenous culture with such authenticity and reverence. Absolutely unforgettable.",
      package: "Full Moon Ceremony",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero 
        title="Sacred Experiences Await"
        subtitle="From ocean rituals to herbal journeys. Every experience honours Khoi San heritage and nature connection."
        height="min-h-80"
      />

      <div className="section-container py-16">
        
        {/* WHY CHOOSE US - Value Proposition */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
            🔥 Why Choose High Tide Tours?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            We're not just another tour company. We're a cultural movement combining adventure sports with sacred plant wisdom.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Competitors Column */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">❌ Typical Competitors Offer</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span className="text-gray-700">Lessons only (no cultural immersion)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span className="text-gray-700">No meals or refreshments included</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span className="text-gray-700">Photos cost extra (R1,500+)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span className="text-gray-700">Basic instruction with no spiritual context</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span className="text-gray-700">You arrange your own transport</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span className="text-gray-700">Bare-bones, transactional experience</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span className="text-gray-700">No cannabis culture or sacred rituals</span>
                </div>
              </div>
            </div>

            {/* High Tide Column */}
            <div className="bg-gradient-to-br from-rasta-green/10 to-rasta-yellow/10 p-8 rounded-lg border-2 border-rasta-green shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-rasta-green text-center">✓ High Tide Tours Includes</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-rasta-green mr-3 text-xl font-bold">✓</span>
                  <span className="text-gray-800 font-semibold">Lessons + Cannabis Lounges + Khoi San Culture</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rasta-green mr-3 text-xl font-bold">✓</span>
                  <span className="text-gray-800 font-semibold">Gourmet picnics, champagne & fresh juices</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rasta-green mr-3 text-xl font-bold">✓</span>
                  <span className="text-gray-800 font-semibold">50+ professional photos (NO extra cost)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rasta-green mr-3 text-xl font-bold">✓</span>
                  <span className="text-gray-800 font-semibold">Sacred plant ceremonies & spiritual guidance</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rasta-green mr-3 text-xl font-bold">✓</span>
                  <span className="text-gray-800 font-semibold">Luxury door-to-door transport included</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rasta-green mr-3 text-xl font-bold">✓</span>
                  <span className="text-gray-800 font-semibold">Gift bags + premium cannabis products</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rasta-green mr-3 text-xl font-bold">✓</span>
                  <span className="text-gray-800 font-semibold">Life-changing, transformative experiences</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green p-6 rounded-lg text-white max-w-4xl mx-auto">
            <p className="text-2xl font-bold">💎 ALL-INCLUSIVE EXPERIENCES 💎</p>
            <p className="text-lg mt-2">No hidden costs. No surprises. Just pure magic.</p>
          </div>
        </div>

        {/* GROUP DISCOUNTS - Moved Higher */}
        <div className="bg-rasta-green/5 p-8 rounded-lg mb-20 border-l-4 border-rasta-green">
          <h2 className="text-3xl font-bold mb-6 text-rasta-green text-center">👥 Group Discounts - Bring Your Crew!</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-rasta-red mb-2">20% OFF</p>
              <p className="text-gray-700 font-semibold">4-6 guests</p>
              <p className="text-sm text-gray-600 mt-2">Perfect for friends & couples</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-rasta-yellow mb-2">25% OFF</p>
              <p className="text-gray-700 font-semibold">6-8 guests</p>
              <p className="text-sm text-gray-600 mt-2">Ideal for small groups</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-rasta-green mb-2">30% OFF + Photographer</p>
              <p className="text-gray-700 font-semibold">8+ guests</p>
              <p className="text-sm text-gray-600 mt-2">Corporate retreats & celebrations</p>
            </div>
          </div>
        </div>

        {/* Multi-Day Packages Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
            🌊 Multi-Day Immersion Packages
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Deep-dive experiences combining daily lessons with afternoon cannabis sessions, ocean connection, and cultural immersion. 
            Choose 3, 5, or 7-day packages.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {multiDayPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition border-t-4 border-rasta-green">
                {/* All-Inclusive Badge */}
                <div className="bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green p-3 text-center">
                  <p className="text-white font-bold text-sm">💎 ALL-INCLUSIVE - NO HIDDEN COSTS 💎</p>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-rasta-green">{pkg.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{pkg.description}</p>
                  
                  {/* Package Duration Options */}
                  <div className="mb-6 bg-gradient-to-r from-rasta-red/10 via-rasta-yellow/10 to-rasta-green/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-rasta-green mb-3">CHOOSE YOUR DURATION:</p>
                    {pkg.days.map((days) => (
                      <div key={days} className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">{days} Days</span>
                        <span className="text-xl font-bold text-rasta-red">{pkg.prices[days]}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-rasta-green mb-3">PACKAGE INCLUDES:</p>
                    <div className="space-y-2">
                      {pkg.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start">
                          <span className="text-rasta-green mr-2">✓</span>
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Typical Day Preview */}
                  <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-rasta-green mb-3">📅 TYPICAL DAY:</p>
                    <div className="space-y-2">
                      {pkg.typicalDay.map((item, i) => (
                        <p key={i} className="text-xs text-gray-700 leading-relaxed">{item}</p>
                      ))}
                    </div>
                  </div>

                  {/* Value Breakdown */}
                  <div className="mb-6 bg-rasta-yellow/10 p-4 rounded-lg border border-rasta-yellow">
                    <p className="text-sm font-semibold text-rasta-green mb-3">🧮 VALUE BREAKDOWN (3-Day):</p>
                    <div className="space-y-1 text-xs text-gray-700">
                      <p>{pkg.valueBreakdown.lessons}</p>
                      <p>{pkg.valueBreakdown.cannabis}</p>
                      <p>{pkg.valueBreakdown.transport}</p>
                      <p>{pkg.valueBreakdown.meals}</p>
                      <p>{pkg.valueBreakdown.photos}</p>
                      <p className="font-bold text-sm text-gray-800 pt-2 border-t">If Booked Separately: {pkg.valueBreakdown.total}</p>
                      <p className="font-bold text-lg text-rasta-red">You Pay: {pkg.valueBreakdown.youPay}</p>
                      <p className="text-xs text-rasta-green italic">{pkg.valueBreakdown.premium}</p>
                    </div>
                  </div>
                  
                  <button className="btn-primary w-full mt-4">Book This Package</button>
                </div>
              </div>
            ))}
          </div>

          {/* Multi-Day Package Benefits */}
          <div className="bg-rasta-green/5 p-8 rounded-lg border-l-4 border-rasta-green">
            <h3 className="text-2xl font-bold mb-4 text-rasta-green">✨ Multi-Day Package Perks</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-rasta-red mb-2">🏨 Accommodation Options</h4>
                <p className="text-gray-700 text-sm">We can arrange beachfront accommodation at partner guesthouses (additional cost).</p>
              </div>
              <div>
                <h4 className="font-bold text-rasta-yellow mb-2">🚗 Daily Transport</h4>
                <p className="text-gray-700 text-sm">Door-to-door pickup and drop-off for every session included in all packages.</p>
              </div>
              <div>
                <h4 className="font-bold text-rasta-green mb-2">📸 Video & Photo Package</h4>
                <p className="text-gray-700 text-sm">Comprehensive photo/video documentation of your entire journey with daily edits.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CUSTOMER REVIEWS SECTION */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
            ⭐ What Our Guests Say
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
            Real experiences from travelers who've journeyed with us.
          </p>

          {/* Trust Badges */}
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
              <div className="text-3xl">⭐</div>
              <div>
                <p className="font-bold text-rasta-green">5.0 Average Rating</p>
                <p className="text-sm text-gray-600">Based on 127+ reviews</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
              <div className="text-3xl">🏆</div>
              <div>
                <p className="font-bold text-rasta-green">TripAdvisor Travellers' Choice</p>
                <p className="text-sm text-gray-600">2025 Winner</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
              <div className="text-3xl">✓</div>
              <div>
                <p className="font-bold text-rasta-green">Verified Reviews</p>
                <p className="text-sm text-gray-600">100% Authentic</p>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                {/* Stars */}
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-rasta-yellow text-xl">⭐</span>
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-gray-700 mb-4 leading-relaxed text-sm italic">"{review.text}"</p>
                
                {/* Package Badge */}
                <div className="mb-3">
                  <span className="bg-rasta-green/10 text-rasta-green text-xs px-3 py-1 rounded-full font-semibold">
                    {review.package}
                  </span>
                </div>
                
                {/* Reviewer Info */}
                <div className="flex justify-between items-center pt-3 border-t">
                  <div>
                    <p className="font-bold text-gray-800">{review.name}</p>
                    <p className="text-xs text-gray-600">{review.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600">{review.date}</p>
                    {review.verified && (
                      <p className="text-xs text-rasta-green font-semibold">✓ Verified</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Platform Links */}
          <div className="bg-gradient-to-r from-rasta-red/10 via-rasta-yellow/10 to-rasta-green/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-6 text-rasta-green">📱 See More Reviews & Book Direct</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <a 
                href="https://www.tripadvisor.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white px-8 py-4 rounded-lg shadow-md hover:shadow-xl transition flex items-center gap-3 font-semibold text-gray-800 hover:text-rasta-green"
              >
                <span className="text-2xl">🦉</span>
                <div>
                  <p className="text-sm font-bold">TripAdvisor</p>
                  <p className="text-xs text-gray-600">127 Reviews • 5.0★</p>
                </div>
              </a>
              <a 
                href="https://www.booking.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white px-8 py-4 rounded-lg shadow-md hover:shadow-xl transition flex items-center gap-3 font-semibold text-gray-800 hover:text-rasta-green"
              >
                <span className="text-2xl">🏨</span>
                <div>
                  <p className="text-sm font-bold">Booking.com</p>
                  <p className="text-xs text-gray-600">94 Reviews • 9.8/10</p>
                </div>
              </a>
              <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white px-8 py-4 rounded-lg shadow-md hover:shadow-xl transition flex items-center gap-3 font-semibold text-gray-800 hover:text-rasta-green"
              >
                <span className="text-2xl">🗺️</span>
                <div>
                  <p className="text-sm font-bold">Google Reviews</p>
                  <p className="text-xs text-gray-600">156 Reviews • 4.9★</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Single Day Tours Section */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
            🌿 Single Day Experiences
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Perfect for travelers with limited time. Each experience is crafted to honour Khoi San heritage and ocean connection.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {singleDayTours.map((tour, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-2xl transition border-t-4 border-rasta-green">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-rasta-green">{tour.title}</h3>
                  <p className="text-gray-700 mb-4">{tour.description}</p>
                  
                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-rasta-green mb-2">INCLUDES:</p>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-rasta-yellow/20 text-rasta-green px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className="flex justify-between items-center mb-4 py-4 border-t border-gray-200">
                    <span className="text-sm text-gray-600 font-semibold">{tour.duration}</span>
                    <span className="text-2xl font-bold text-rasta-red">{tour.price}</span>
                  </div>
                  <button className="btn-primary w-full">Book This Experience</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Tours Inclusions */}
        <div className="bg-gradient-to-r from-rasta-red/10 via-rasta-yellow/10 to-rasta-green/10 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-rasta-green">✨ What's Included in All Tours</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-rasta-green mb-3">🚗 Transportation</h3>
              <p className="text-gray-700">Luxury door-to-door transport in comfortable, climate-controlled vehicles.</p>
            </div>
            <div>
              <h3 className="font-bold text-rasta-red mb-3">🍃 Premium Cannabis</h3>
              <p className="text-gray-700">Access to cannabis lounges, premium products, and lounge memberships.</p>
            </div>
            <div>
              <h3 className="font-bold text-rasta-yellow mb-3">📸 Professional Photos</h3>
              <p className="text-gray-700">50+ edited photos from your experience delivered within 24 hours.</p>
            </div>
            <div>
              <h3 className="font-bold text-rasta-green mb-3">🥂 Gourmet Refreshments</h3>
              <p className="text-gray-700">Fresh juices, champagne, and gourmet snacks included.</p>
            </div>
            <div>
              <h3 className="font-bold text-rasta-red mb-3">🎁 Gift Bags</h3>
              <p className="text-gray-700">Take-home gifts and premium cannabis products as mementos.</p>
            </div>
            <div>
              <h3 className="font-bold text-rasta-yellow mb-3">🙏 Expert Guides</h3>
              <p className="text-gray-700">Certified guides with Khoi San heritage knowledge and sailing expertise.</p>
            </div>
          </div>
        </div>

        {/* Custom Experiences CTA */}
        <div className="text-center bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green p-12 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Custom Experiences Available</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Have a unique vision? Let's create a bespoke experience just for you—whether it's a special celebration, 
            corporate retreat, or spiritual journey. All experiences honour Khoi San heritage and ocean stewardship.
          </p>
          <Link to="/contact">
            <button className="bg-white text-rasta-green hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all hover:scale-105">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tours;