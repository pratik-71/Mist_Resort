import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Gallery.css';

const ALL_IMAGES = [
  '/image 2.jpeg',
  '/image 3.jpeg',
  '/image 4.jpeg',
  '/image 5.jpeg',
  '/image 6.jpeg',
  '/image 7.jpeg',
  '/image 9.jpeg',
  '/image 10.jpeg',
  '/image 11.jpeg'
];

const PREVIEW_IMAGES = ALL_IMAGES.slice(0, 5);

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  return (
    <>
      <section className="gallery-section" id="gallery">
        <h2>A Glimpse of Paradise</h2>
        <p>Discover the beauty that awaits</p>

        <div className="preview-marquee-container">
          <div className="preview-marquee-track">
            {/* First Set */}
            {ALL_IMAGES.map((src) => (
              <div key={`set1-${src}`} className="preview-item">
                <img src={src} alt="Mist Resort preview" loading="lazy" />
              </div>
            ))}
            {/* Second Set for seamless infinite loop */}
            {ALL_IMAGES.map((src) => (
              <div key={`set2-${src}`} className="preview-item">
                <img src={src} alt="Mist Resort preview" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="btn-more-container">
          <button className="btn-more" onClick={() => setIsModalOpen(true)}>
            View Gallery
          </button>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="gallery-modal"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          >
            <button className="btn-close" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            
            <div className="modal-grid">
              {ALL_IMAGES.map((src) => (
                <div key={src} className="modal-item">
                  <img src={src} alt="Mist Resort gallery" loading="lazy" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
