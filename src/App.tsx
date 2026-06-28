import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Gallery from './Gallery';
import Amenities from './Amenities';
import Footer from './Footer';
import BookingModal from './BookingModal';
import './App.css';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
        <nav className="navbar">
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            <p className="hero-subtitle">WELCOME TO YOUR SANCTUARY</p>
            <h1 className="hero-title">Escape to Serenity.</h1>
          </motion.div>

          <motion.div 
            className="action-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <a 
              href="https://maps.app.goo.gl/wF1HEkSSJPGag4aL8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline"
            >
              <MapPin size={18} strokeWidth={1.5} />
              Location
            </a>
            <button className="btn-solid" onClick={() => setIsBookingModalOpen(true)}>
              Book Now
            </button>
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

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </main>
  );
}

export default App;
