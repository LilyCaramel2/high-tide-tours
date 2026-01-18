import Hero from '../components/Hero';

function About() {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Our Story: Herbs, Heritage & Healing Waters"
        subtitle="Honouring Khoi San traditions while creating transformative, sustainable tourism experiences."
        height="min-h-80"
      />

      <div className="section-container py-16">
        {/* Khoi San Honour */}
        <div className="bg-gradient-to-r from-rasta-green/20 via-rasta-yellow/20 to-rasta-red/20 p-8 rounded-lg mb-16 border-l-4 border-rasta-green">
          <h2 className="text-3xl font-bold mb-6 text-rasta-green">🌾 Honouring Khoi San Heritage</h2>
          <p className="text-gray-700 mb-4 text-lg">
            High Tide Tours is built on deep respect for the Khoi San people—the original stewards of these sacred lands. 
            Our commitment goes beyond acknowledgement: we actively honour Khoi San knowledge of herbs, plants, and ocean connection 
            that sustained communities for thousands of years.
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            Every tour centres indigenous wisdom about foraging, sacred plants, and spiritual connection to place. 
            A portion of every booking supports Khoi San communities, land stewardship, and the preservation of traditional knowledge.
          </p>
          <p className="text-gray-700 text-lg font-semibold">
            "The land remembers. We listen. We honour. We respect." — High Tide Tours Mission
          </p>
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-rasta-green">Our Story</h2>
            <p className="text-gray-700 mb-4">
              High Tide Tours was born from a vision to create transformative experiences that blend Cape Town's 
              stunning ocean, Khoi San herbalism traditions, and conscious cannabis culture.
            </p>
            <p className="text-gray-700 mb-4">
              Founded by Lily Godden, a digital entrepreneur and ocean lover, High Tide Tours emerged from years of sailing, 
              foraging research, and deep commitment to sustainable, ethical tourism that honours the land and its original peoples.
            </p>
            <p className="text-gray-700">
              We don't just offer tours—we create sacred journeys that connect people with heritage, nature, and their own potential for healing.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-rasta-red">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              To provide world-class, ethically-grounded experiences that showcase Cape Town's natural beauty while honouring 
              Khoi San traditions, promoting sustainable practices, and facilitating personal and spiritual growth.
            </p>
            <p className="text-gray-700 mb-4">
              We create meaningful connections between people, the ocean, wild herbs, and indigenous knowledge—all within a framework 
              of responsibility, safety, and respect for all beings.
            </p>
            <p className="text-gray-700">
              Every tour is a ceremony honouring the land, the sea, and the wisdom of those who came before us.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-rasta-yellow">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-rasta-green">
              <h3 className="text-2xl font-bold mb-3 text-rasta-green">🌿 Sacred Herb Experiences</h3>
              <p className="text-gray-700">Learn traditional Khoi San herbalism, wild foraging, and the sacred plants that have healed communities for millennia.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-rasta-red">
              <h3 className="text-2xl font-bold mb-3 text-rasta-red">🌊 Ocean Rituals & Sailing</h3>
              <p className="text-gray-700">Explore Cape Town's sacred waters through sailing, scuba diving, and ceremonial experiences honouring the ocean.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-rasta-yellow">
              <h3 className="text-2xl font-bold mb-3 text-amber-600">✨ Spiritual Ceremonies</h3>
              <p className="text-gray-700">Full moon rituals, sunrise meditations, and drumming circles connecting you to indigenous traditions and your own spirit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-rasta-green">
              <h3 className="text-2xl font-bold mb-3 text-rasta-green">🏖️ Sustainable Luxury</h3>
              <p className="text-gray-700">Premium experiences designed with environmental responsibility and respect for the natural world at their core.</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-rasta-green">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-rasta-green">🛡️ Safety First</h3>
              <p className="text-gray-700">All experiences prioritize participant safety with certified guides, proper equipment, and rigorous protocols.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-rasta-red">⚖️ Legal & Responsible</h3>
              <p className="text-gray-700">We operate within South African law and promote conscious, ethical cannabis use and community respect.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-rasta-yellow">🌍 Eco-Conscious</h3>
              <p className="text-gray-700">Environmental sustainability, ocean protection, and land stewardship guide every decision we make.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-rasta-green">🙏 Respect & Honour</h3>
              <p className="text-gray-700">Deep reverence for Khoi San heritage, indigenous wisdom, and the sacred nature of land and water.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;