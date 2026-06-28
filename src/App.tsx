import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import Lenis from 'lenis';
import Gallery from './Gallery';
import Amenities from './Amenities';
import Footer from './Footer';
import BookingModal from './BookingModal';

import './App.css';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Initialize smooth scrolling and scroll listener
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Staggered text variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }
    }
  };

  return (
    <main className="app-container">
      <div className="hero-wrapper">
        {/* Background Image */}
      <div className="hero-background">
        <motion.img
          src="/image 11.jpeg"
          alt="Mist Resort view"
          className="hero-image"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <section className="hero-section">
        {/* Sleek Edge-to-Edge Navbar */}
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <h2 className="logo">MIST RESORT</h2>
          <div className="nav-links">
            <a href="#villas">Villas</a>
            <a href="#experiences">Experiences</a>
            <a href="#dining">Dining</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="btn-nav-book" onClick={() => setIsBookingModalOpen(true)}>
            Reserve
          </button>
        </nav>

        {/* Minimalist Centered Hero */}
        <div className="hero-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="hero-subtitle">
              Welcome to your sanctuary
            </motion.p>
            <h1 className="hero-title">
              {['Escape', 'to', 'Paradise.'].map((word, i) => (
                <span key={i} className="word-wrapper">
                  <motion.span variants={itemVariants} style={{ display: 'inline-block', marginRight: '0.3em' }}>
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
          </motion.div>


        </div>
      </section>
      </div>
      
      {/* Gallery Section */}
      <Gallery />

      {/* Amenities Section */}
      <Amenities />

      {/* Footer Section */}
      <Footer onBookNowClick={() => setIsBookingModalOpen(true)} />

      {/* Sticky Bottom Mobile Bar */}
      <div className="sticky-bottom-bar">
        <button className="btn-sticky-book" onClick={() => setIsBookingModalOpen(true)}>
          Book Now
        </button>
        <a href="https://wa.me/918888097275" target="_blank" rel="noopener noreferrer" className="btn-sticky-wa" aria-label="WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </main>
  );
}

export default App;
