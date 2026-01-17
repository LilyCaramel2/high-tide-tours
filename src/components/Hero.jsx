import { Link } from 'react-router-dom';

function Hero({ 
  title = "Sacred Herbs, Foraging & Ocean Adventures",
  subtitle = "Luxury nature experiences honoring Khoi San heritage, wild foraging, sacred plant wisdom & water sports in Cape Town",
  primaryButton = { text: "Explore Tours", link: "/tours" },
  secondaryButton = { text: "Book Now", link: "/contact" },
  backgroundImage = null,
  height = "min-h-screen"
}) {
  return (
    <section 
      className={`${height} flex items-center justify-center bg-gradient-to-br from-rasta-red via-rasta-yellow to-rasta-green relative overflow-hidden`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="section-container text-center text-white relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl mb-8 drop-shadow-lg max-w-4xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButton && (
            <Link
              to={primaryButton.link}
              className="bg-white text-rasta-green hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              {primaryButton.text}
            </Link>
          )}
          {secondaryButton && (
            <Link
              to={secondaryButton.link}
              className="bg-gray-900 text-white hover:bg-gray-800 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-white hover:scale-105"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </section>
  );
}

export default Hero;
