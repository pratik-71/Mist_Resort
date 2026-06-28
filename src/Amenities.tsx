import { Utensils, Wind, Waves, Car, Gamepad2, Tent, Mountain, Leaf } from 'lucide-react';
import './Amenities.css';

const amenitiesData = [
  {
    title: 'Delicious Dining',
    icon: <Utensils size={36} strokeWidth={1.5} />,
  },
  {
    title: 'Air Conditioning',
    icon: <Wind size={36} strokeWidth={1.5} />,
  },
  {
    title: 'Swimming Pool',
    icon: <Waves size={36} strokeWidth={1.5} />,
  },
  {
    title: 'Private Parking',
    icon: <Car size={36} strokeWidth={1.5} />,
  },
  {
    title: 'Indoor Games',
    icon: <Gamepad2 size={36} strokeWidth={1.5} />,
  },
  {
    title: 'Outdoor Activities',
    icon: <Tent size={36} strokeWidth={1.5} />,
  },
  {
    title: 'Breathtaking Mountain View',
    icon: <Mountain size={36} strokeWidth={1.5} />,
  },
  {
    title: 'Nature Paradise',
    icon: <Leaf size={36} strokeWidth={1.5} />,
  },
];

export default function Amenities() {
  return (
    <section className="amenities-section" id="amenities">
      <h2>Amenities</h2>
      <p>Everything you need for a perfect stay</p>
      
      <div className="amenities-grid">
        {amenitiesData.map((item, index) => (
          <div key={index} className="amenity-card">
            <div className="amenity-icon">
              {item.icon}
            </div>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
