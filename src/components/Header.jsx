import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-50 top-0">
      <nav className="section-container !py-4 flex justify-between items-center">
        {/* Logo - Large Left */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-[60px] h-[60px] md:w-[60px] md:h-[60px] sm:w-[45px] sm:h-[45px] bg-gradient-to-br from-rasta-red via-rasta-yellow to-rasta-green rounded-lg flex items-center justify-center">
            <span className="text-2xl">🌊</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
              HIGH TIDE TOURS
            </h1>
            <p className="text-xs text-gray-500">Cannabis + Water Adventures</p>
          </div>
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="hover:text-rasta-green transition font-medium">
            Home
          </Link>
          <Link to="/about" className="hover:text-rasta-green transition font-medium">
            About
          </Link>
          <Link to="/tours" className="hover:text-rasta-green transition font-medium">
            Tours
          </Link>
          <Link to="/blog" className="hover:text-rasta-green transition font-medium">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-rasta-green transition font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button - Right */}
        <button className="md:hidden text-2xl">
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Header;
