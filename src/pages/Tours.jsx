import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

function Tours() {
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
      ]
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
      ]
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
      ]
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

  return (
    <div className="min-h-screen">
      <Hero 
        title="Sacred Experiences Await"
        subtitle="From ocean rituals to herbal journeys. Every experience honours Khoi San heritage and nature connection."
        height="min-h-80"
      />

      <div className="section-container py-16">
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

        {/* Group Discounts */}
        <div className="bg-rasta-green/5 p-8 rounded-lg mb-16 border-l-4 border-rasta-green">
          <h2 className="text-3xl font-bold mb-6 text-rasta-green">👥 Group Discounts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-rasta-red">20% OFF</p>
              <p className="text-gray-700">4-6 guests</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-rasta-yellow">25% OFF</p>
              <p className="text-gray-700">6-8 guests</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-rasta-green">30% OFF + Photographer</p>
              <p className="text-gray-700">8+ guests</p>
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