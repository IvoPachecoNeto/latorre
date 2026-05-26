/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import StadiumExperience from './components/StadiumExperience';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import VipCard from './components/VipCard';
import Ambassador from './components/Ambassador';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ReservasModal from './components/ReservasModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedInitialArea, setSelectedInitialArea] = useState<string>('paris');

  const handleOpenBooking = (area?: string) => {
    if (area) {
      setSelectedInitialArea(area);
    } else {
      setSelectedInitialArea('paris');
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-navy-deep text-white antialiased overflow-x-hidden selection:bg-gold-accent selection:text-navy-deep relative">
      
      {/* Editorial Decorative Background Lights */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-french-red/10 rounded-full blur-[150px] opacity-20 pointer-events-none z-0"></div>
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] opacity-35 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-gold-accent/5 rounded-full blur-[150px] opacity-15 pointer-events-none z-0"></div>
      
      {/* Luxury Left Edge Accents */}
      <div className="absolute top-[20%] left-0 w-[2px] h-32 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-40 z-10 hidden lg:block"></div>
      <div className="absolute top-[60%] left-0 w-[px] h-32 bg-gradient-to-b from-transparent via-french-red to-transparent opacity-30 z-10 hidden lg:block"></div>

      {/* Floating Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Cinematic Hero Segment */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Interactive Storyteller Layer */}
      <History />

      {/* Stadium Experience Modules Grid */}
      <StadiumExperience />

      {/* Culinary Tab Menu Map */}
      <Menu onOpenBooking={() => handleOpenBooking()} />

      {/* Private Room Allocations & Booking Integrations */}
      <Reservations onOpenBooking={handleOpenBooking} />

      {/* VIP Sócio 3D Rotating Credit Card Canvas */}
      <VipCard />

      {/* Editorial Journalist Ambassador Spread (Cristian Toledo) */}
      <Ambassador />

      {/* Cinematic lightbox media walls */}
      <Gallery />

      {/* Bottom CTA Banner + Official Brand Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Reservation modal trigger */}
      <ReservasModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialArea={selectedInitialArea}
      />
      
    </div>
  );
}
