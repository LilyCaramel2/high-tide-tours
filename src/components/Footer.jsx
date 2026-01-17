import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌊</span>
              <h3 className="text-xl font-bold">HIGH TIDE TOURS</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Luxury cannabis tourism + water sports experiences in Cape Town.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-rasta-yellow">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-rasta-green transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-rasta-green transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-400 hover:text-rasta-green transition">
                  Our Tours
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-rasta-green transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-rasta-green transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 text-rasta-yellow">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="//privacy-policy" className="text-gray-400 hover:text-rasta-green transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                            <Link to="/terms" className="text-gray-400 hover:text-rasta-green transition">
                  Terms of Service
                            </Link>
              </li>
                        <li>
                                      <Link to="/cancellation" className="text-gray-400 hover:text-rasta-green transition">
                                                      Cancellation Policy
                                                    </Link>
                                    </li>
                        <li>
                                      <Link to="/booking-terms" className="text-gray-400 hover:text-rasta-green transition">
                                                      Booking Terms
                                                    </Link>
                                    </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-rasta-yellow">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:info@hightidetours.co.za" className="hover:text-rasta-green transition">
                  info@hightidetours.co.za
                </a>
              </li>
              <li>
                <a href="tel:+27642205618" className="hover:text-rasta-green transition">
                  +27 64 220 5618
                </a>
              </li>
              <li>
                <a href="https://wa.me/27642205618" className="hover:text-rasta-green transition" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="https://instagram.com/hightidetours" className="hover:text-rasta-green transition" target="_blank" rel="noopener noreferrer">
                  @hightidetours
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} High Tide Tours. All rights reserved.</p>
          <p className="mt-2">Cannabis Tourism + Water Sports | Cape Town, South Africa</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
