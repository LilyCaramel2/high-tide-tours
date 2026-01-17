function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="section-container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
            About High Tide Tours
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Pioneering responsible cannabis tourism in Cape Town since 2024
          </p>
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-rasta-green">Our Story</h2>
            <p className="text-gray-700 mb-4">
              High Tide Tours was born from a passion for Cape Town's stunning coastline 
              and a vision to create unique, legal cannabis tourism experiences.
            </p>
            <p className="text-gray-700 mb-4">
              We combine the natural beauty of the Western Cape with responsible cannabis 
              consumption, offering unforgettable adventures on and around the water.
            </p>
            <p className="text-gray-700">
              Our team consists of experienced sailors, certified guides, and cannabis 
              enthusiasts who are dedicated to providing safe, legal, and memorable experiences.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-rasta-red">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              To provide world-class cannabis tourism experiences that showcase Cape Town's 
              natural beauty while promoting responsible consumption and environmental stewardship.
            </p>
            <p className="text-gray-700 mb-4">
              We believe in creating meaningful connections between people, nature, and culture 
              through carefully curated experiences.
            </p>
            <p className="text-gray-700">
              Every tour is designed with safety, sustainability, and authenticity in mind.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-rasta-gold">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-rasta-green">Safety First</h3>
              <p className="text-gray-700">All experiences prioritize participant safety with certified guides and proper equipment.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-rasta-red">Legal & Responsible</h3>
              <p className="text-gray-700">We operate within South African law and promote responsible cannabis consumption.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-rasta-gold">Eco-Conscious</h3>
              <p className="text-gray-700">Environmental sustainability guides our operations and tour practices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
