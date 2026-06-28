import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './BookingModal.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  // Replace this with the actual client's WhatsApp number (include country code, no +)
  const WHATSAPP_NUMBER = '918888097275'; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `Hi Mist Resort! I would like to book a stay.%0A%0AName - ${name}%0ACheck in - ${checkIn}%0ACheck out - ${checkOut}%0ANumber of guest - ${guests}%0A%0APlease let me know the availability and pricing.`;
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Close the modal
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="booking-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="booking-modal"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button className="btn-modal-close" onClick={onClose}>
              <X size={24} />
            </button>
            
            <h3>Book Your Paradise</h3>
            <p>Send us your details and all to confirm your booking instantly via WhatsApp!</p>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="check-in">Check-in</label>
                  <input 
                    type="date" 
                    id="check-in"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="check-out">Check-out</label>
                  <input 
                    type="date" 
                    id="check-out"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <input 
                  type="number"
                  id="guests"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-submit-booking">
                Continue to WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
