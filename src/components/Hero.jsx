import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rasta-red via-rasta-yellow to-rasta-green relative">
      <div className="section-container text-center text-white relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
          Cannabis Tourism + Water Sports
        </h1>
        <p className="text-2xl md:text-3xl mb-8 drop-shadow-lg">
          Luxury 420 Tours, Ceremonies & Ocean Adventures in Cape Town
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/tours"
            className="bg-white text-rasta-green hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Explore Tours
          </Link>
          <Link
            to="/contact"
            className="bg-gray-900 text-white hover:bg-gray-800 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-white"
          >
            Book Now
          </Link>
        </div>
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
    </section>
  );
}

export default Hero;
