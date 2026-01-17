import Hero from '../components/Hero';

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Tours Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
            Featured Experiences
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-rasta-green">High Tide Tours</h3>
              <p className="text-gray-700 mb-4">Experience Cape Town's waters with a twist. Cannabis-friendly sailing adventures.</p>
              <button className="btn-primary">Learn More</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-rasta-red">Cannabis Ceremonies</h3>
              <p className="text-gray-700 mb-4">Traditional and modern cannabis experiences in stunning locations.</p>
              <button className="btn-primary">Learn More</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-rasta-gold">Water Sports</h3>
              <p className="text-gray-700 mb-4">Kayaking, paddleboarding, and ocean adventures in paradise.</p>
              <button className="btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Welcome to High Tide Tours</h2>
            <p className="text-lg text-gray-700 mb-8">
              Combining Cape Town's stunning coastline with responsible cannabis tourism. 
              We offer unique, legal, and unforgettable experiences on the water and beyond.
            </p>
            <button className="btn-secondary">Discover Our Story</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
