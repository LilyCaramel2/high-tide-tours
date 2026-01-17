function Tours() {
  const tours = [
    {
      title: "Sunset Sailing Session",
      description: "Experience Cape Town's stunning sunset from the water with a cannabis-friendly sailing adventure.",
      duration: "3 hours",
      price: "R1,200",
      color: "rasta-red"
    },
    {
      title: "High Tide Harbor Cruise",
      description: "Relaxed harbor cruise with beautiful views, perfect for first-timers and experienced sailors alike.",
      duration: "2 hours",
      price: "R850",
      color: "rasta-green"
    },
    {
      title: "Ocean Adventure Package",
      description: "Full day on the water including sailing, kayaking, and a beachside cannabis ceremony.",
      duration: "6 hours",
      price: "R2,500",
      color: "rasta-gold"
    },
    {
      title: "Private Charter Experience",
      description: "Fully customizable private sailing charter for groups up to 8 people.",
      duration: "4 hours",
      price: "R4,000",
      color: "rasta-yellow"
    },
    {
      title: "Cannabis Ceremony",
      description: "Traditional and modern cannabis experiences in scenic Cape Town locations.",
      duration: "2 hours",
      price: "R600",
      color: "rasta-red"
    },
    {
      title: "Water Sports Package",
      description: "Kayaking, paddleboarding, and other water sports with optional cannabis elements.",
      duration: "3 hours",
      price: "R950",
      color: "rasta-green"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
            Our Tours & Experiences
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choose from our curated selection of cannabis-friendly adventures
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className={`h-3 bg-${tour.color}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{tour.title}</h3>
                <p className="text-gray-700 mb-4">{tour.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Duration: {tour.duration}</span>
                  <span className={`text-xl font-bold text-${tour.color}`}>{tour.price}</span>
                </div>
                <button className="btn-primary w-full">Book Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Custom Experiences Available</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have something specific in mind? We can create a custom experience just for you.
          </p>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Tours;
