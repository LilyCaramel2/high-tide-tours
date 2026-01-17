import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/declined cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 shadow-2xl z-50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">🍪 We use cookies</h3>
            <p className="text-sm text-gray-300">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.{' '}
              <Link to="/privacy-policy" className="text-rasta-yellow hover:text-rasta-green underline">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDecline}
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition font-medium"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-gradient-to-r from-rasta-red to-rasta-yellow hover:from-rasta-red-light hover:to-rasta-yellow-light text-white rounded-lg transition font-medium shadow-lg"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookiePopup;
