import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookiePopup from './components/CookiePopup';
import WhatsAppButton from './components/WhatsAppButton';
import SocialMediaBanner from './components/SocialMediaBanner';
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CancellationPolicy from './pages/CancellationPolicy';
import BookingTerms from './pages/BookingTerms';

// Component to handle redirects from 404.html
function RedirectHandler() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if we were redirected from 404.html
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);
  
  return null;
}

function App() {
  return (
    <Router basename="/high-tide-tours">
      <RedirectHandler />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />}/>
            <Route path="/cancellation" element={<CancellationPolicy />}/>
            <Route path="/booking-terms" element={<BookingTerms />}/>
          </Routes>
          <SocialMediaBanner />
        </main>
        <Footer />
        <WhatsAppButton />
        <CookiePopup />
      </div>
    </Router>
  );
}

export default App;
