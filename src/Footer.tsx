import { CalendarCheck, Camera, MessageCircle, Star } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  onBookNowClick: () => void;
}

export default function Footer({ onBookNowClick }: FooterProps) {
  // Actual client links
  const INSTAGRAM_LINK = "https://www.instagram.com/mist_farm_resort_/";
  const WHATSAPP_LINK = "https://wa.me/918888097275"; // Client's number with 91 country code
  const REVIEW_LINK = "https://www.google.com/maps/place/Mist+Farm+%26+resort/@18.9603255,73.4364748,792m/data=!3m1!1e3!4m11!3m10!1s0x3be7f93a8c61399d:0x464913b4f99dc8cb!5m2!4m1!1i2!8m2!3d18.9603255!4d73.4390497!9m1!1b1!16s%2Fg%2F11z5w7mh3g?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="footer-section">
      <div className="footer-links">
        <button className="footer-btn primary" onClick={onBookNowClick}>
          <CalendarCheck size={18} />
          Book Now
        </button>
        
        <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="footer-btn">
          <Camera size={18} />
          Instagram
        </a>
        
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="footer-btn">
          <MessageCircle size={18} />
          WhatsApp
        </a>
        
        <a href={REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="footer-btn">
          <Star size={18} />
          Add Review
        </a>
      </div>

      <h2 className="footer-thank-you">Thank You</h2>
      
      <div className="footer-bottom">
       
      </div>
    </footer>
  );
}
