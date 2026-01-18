import Hero from '../components/Hero';

function Home() {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Sacred Waters, Healing Herbs"
        subtitle="Experience Cape Town's ocean and Khoi San herbalism traditions. Sustainable, ethical, transformative tours."
        ctaText="Discover Your Journey"
      />
      
      {/* Featured Tours Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
            Sacred Experiences
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-rasta-green">
              <h3 className="text-2xl font-bold mb-4 text-rasta-green">🌿 Khoi San Herbalism</h3>
              <p className="text-gray-700 mb-4">Learn traditional knowledge of wild herbs, sacred plants, and foraging practices from the land's original stewards.</p>
              <button className="btn-primary">Learn More</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-rasta-red">
              <h3 className="text-2xl font-bold mb-4 text-rasta-red">🌊 Ocean Rituals</h3>
              <p className="text-gray-700 mb-4">Sail Cape Town's sacred waters, connect with nature, and experience cannabis ceremonies in stunning coastal settings.</p>
              <button className="btn-primary">Learn More</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-rasta-yellow">
              <h3 className="text-2xl font-bold mb-4 text-amber-600">✨ Spiritual Journeys</h3>
              <p className="text-gray-700 mb-4">Full moon ceremonies, sunrise meditations, and drumming circles honouring indigenous traditions and ocean connection.</p>
              <button className="btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Khoi San Honour Section */}
      <section className="py-16 bg-gradient-to-r from-rasta-red/10 via-rasta-yellow/10 to-rasta-green/10">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-rasta-green">Honouring Khoi San Heritage</h2>
            <p className="text-lg text-gray-700 mb-8">
              Every tour honours the original stewards of these sacred lands. High Tide Tours is built on respect for Khoi San traditions, 
              wisdom, and connection to the ocean and herbs that have sustained communities for millennia. A portion of every booking 
              supports Khoi San communities and land stewardship initiatives.
            </p>
            <button className="btn-secondary">Learn Our Commitment</button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Sustainable Luxury Tourism</h2>
            <p className="text-lg text-gray-700 mb-8">
              We combine Cape Town's stunning coastline with ethical cannabis tourism, Khoi San knowledge, and a commitment to 
              environmental stewardship. Every experience is carefully curated to respect people, culture, and the ocean we love.
            </p>
            <button className="btn-secondary">Discover Our Story</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;