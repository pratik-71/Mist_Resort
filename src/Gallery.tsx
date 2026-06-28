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

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                <div key={src} className="modal-item" onClick={() => setSelectedImage(src)}>
                  <img src={src} alt="Mist Resort gallery" loading="lazy" />
                </div>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="btn-close-lightbox" onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}>
              <X size={32} />
            </button>
            <img src={selectedImage} alt="Full screen" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
