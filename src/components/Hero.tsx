/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Play, Volume2, ArrowDown, Star } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Eiffel Tower line-art for a highly sophisticated, subtle French aesthetic
  const EiffelTowerSVG = () => (
    <svg 
      viewBox="0 0 100 220" 
      fill="none" 
      className="w-72 h-[550px] text-gold-accent/5 absolute right-4 md:right-16 bottom-0 pointer-events-none transition-all duration-1000 select-none hidden lg:block" 
      stroke="currentColor" 
      strokeWidth="0.6"
    >
      <path d="M 20,220 C 35,180 65,180 80,220" />
      <path d="M 25,160 Q 50,165 75,160" strokeWidth="0.8" />
      <path d="M 35,100 Q 50,103 65,100" strokeWidth="0.8" />
      <path d="M 20,220 L 40,90 L 45,15 L 55,15 L 60,90 L 80,220" />
      <path d="M 30,160 L 45,100 M 70,160 L 55,100" />
      <path d="M 22,200 L 35,160 M 78,200 L 65,160" />
      <line x1="20" y1="220" x2="80" y2="220" />
      <line x1="25" y1="160" x2="75" y2="160" />
      <line x1="35" y1="100" x2="65" y2="100" />
      <circle cx="50" cy="15" r="2" fill="currentColor" className="animate-pulse" />
    </svg>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] py-24">
      
      {/* CSS Animation Overrides for Champions League Atmosphere */}
      <style>{`
        .cl-particle {
          animation: floatParticle 8s ease-in-out infinite;
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.15; }
          50% { transform: translateY(-30px) translateX(15px) scale(1.15); opacity: 0.35; }
        }
        .shining-sweep::after {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: skewX(-25deg);
        }
        .shining-sweep:hover::after {
          animation: sweepSweep 1.2s forwards;
        }
        @keyframes sweepSweep {
          0% { left: -150%; }
          100% { left: 150%; }
        }
      `}</style>

      {/* Cinematic Ambient Overlays & Simulated Video Loop */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        
        {/* Background Image: Stadium with lights - glowing and blurred for cinema feeling */}
        <img
          src="https://images.unsplash.com/photo-1540747737956-378724044282?auto=format&fit=crop&w=1920&q=85"
          alt="Stadium Lights Cinematic Backdrop"
          className="w-full h-full object-cover object-center opacity-30 scale-105 animate-[pulse_12s_infinite_alternate] filter saturate-120"
          referrerPolicy="no-referrer"
        />

        {/* Floating Eiffel Tower silhouette watermark line art */}
        <EiffelTowerSVG />

        {/* Ambient Dark-Blue & Red Glowing Light flares simulating stadium screens & Paris night */}
        <div className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] rounded-full bg-french-red/10 blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-gold-accent/5 blur-[130px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/85 to-[#020813]/60"></div>
        
        {/* Fine Diagonal Tech lines for Champions League HUD aesthetics */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1.5px)] bg-[size:100%_4px] opacity-30 pointer-events-none"></div>

        {/* Champions League floating gold star particles */}
        <div className="absolute top-[30%] left-[15%] cl-particle text-gold-accent/20" style={{ animationDelay: '0s' }}><Star className="w-4 h-4 fill-current" /></div>
        <div className="absolute top-[20%] right-[25%] cl-particle text-gold-accent/20" style={{ animationDelay: '2s' }}><Star className="w-3 h-3 fill-current" /></div>
        <div className="absolute bottom-[35%] left-[30%] cl-particle text-gold-accent/15" style={{ animationDelay: '4s' }}><Star className="w-5 h-5" /></div>
        <div className="absolute bottom-[25%] right-[15%] cl-particle text-gold-accent/20" style={{ animationDelay: '1s' }}><Star className="w-3 h-3 fill-current" /></div>
      </div>

      {/* Floating Interactive Live Info Badge mimicking premium broadcast HUD */}
      <div className="absolute top-28 left-4 md:left-12 z-20 hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-french-red opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-french-red"></span>
        </span>
        <span className="font-mono text-[10px] uppercase text-white tracking-[0.2em] font-semibold">
          LIVE DO ESTÁDIO HOJE · 21H
        </span>
      </div>

      <div className="absolute top-28 right-4 md:right-12 z-20 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
        <Volume2 className="w-3.5 h-3.5 text-gold-accent animate-bounce" />
        <span className="font-mono text-[9px] uppercase text-gray-300 tracking-[0.15em]">
          ÁUDIO IMERSIVO JBL ATIVO
        </span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12 space-y-8">
        
        {/* Elegant Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 text-[10px] font-mono font-black rounded-full bg-navy-card/90 border border-gold-accent/30 text-gold-accent shadow-lg shadow-gold-accent/5 backdrop-blur-sm self-center"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-[0.25em] uppercase">PARIS RENCONTRE LE BRÉSIL</span>
        </motion.div>

        {/* Huge Display Heading (Monumental Título "LA TORRE SPORT BAR") */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-stadium text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight text-white leading-[0.85] select-none"
          >
            LA TORRE <br />
            <span className="font-display font-light lowercase italic tracking-wide text-transparent bg-gradient-to-r from-gold-accent via-white to-gold-accent bg-clip-text pr-2 filter drop-shadow-[0_4px_12px_rgba(212,175,55,0.25)]">
              Sport Bar.
            </span>
          </motion.h1>
        </div>

        {/* Custom French - Brazilian concept line with French Red border underlines */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-xl sm:text-2xl md:text-3xl text-ice-white font-medium max-w-3xl mx-auto tracking-wide italic"
        >
          “O futebol brasileiro visto pelos olhos de Paris.”
        </motion.p>

        {/* Trimmed Premium Description for quiet luxury breathing room */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs sm:text-sm leading-relaxed text-gray-300 max-w-xl mx-auto font-sans font-light tracking-wide"
        >
          Sinta a verdadeira energia dos maiores palcos da Champions League bem aqui em Curitiba.
          Imagem monumental, som imersivo de arena e gastronomia europeia refinada.
        </motion.p>

        {/* Call to Action Buttons with customized luxurious glows and interactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          
          {/* Main Booking Button with high depth golden glow and sweep */}
          <button
            onClick={() => onOpenBooking()}
            className="shining-sweep group relative w-full sm:w-auto px-10 py-5 rounded-full bg-gold-accent hover:bg-white text-navy-deep font-stadium font-black text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] overflow-hidden"
          >
            <span>RESERVAR MESA</span>
            <Play className="w-3 h-3 fill-current stroke-none" />
          </button>

          {/* Secondary Know more button with custom glassmorphism and subtle boundary border glow */}
          <a
            href="#historia"
            className="group relative w-full sm:w-auto px-10 py-5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-stadium font-black text-xs tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm cursor-pointer flex items-center justify-center hover:border-gold-accent hover:text-gold-accent active:scale-95"
          >
            <span>CONHECER O LA TORRE</span>
          </a>
        </motion.div>

        {/* Micro stats banner matching European Lounge HUD aesthetics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="pt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-white/5 text-gray-400 font-mono text-[10px]"
        >
          <div className="flex flex-col items-center space-y-1">
            <span className="font-stadium text-base md:text-lg font-black text-white tracking-wider">MÉGAPHONE 120"</span>
            <span className="text-[9px] text-gold-accent uppercase tracking-widest font-medium">PAINEL LED 4K</span>
          </div>
          <div className="flex flex-col items-center border-l border-r border-white/5 space-y-1">
            <span className="font-stadium text-base md:text-lg font-black text-white tracking-wider">SALON PRIVÉ</span>
            <span className="text-[9px] text-french-red uppercase tracking-widest font-medium">PS5 & COUROS</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center space-y-1">
            <span className="font-stadium text-base md:text-lg font-black text-white tracking-wider">CLUB SÓCIO</span>
            <span className="text-[9px] text-gold-accent uppercase tracking-widest font-medium">ACCÈS PRIVILÈGE</span>
          </div>
        </motion.div>

      </div>

      {/* Floating Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
        <span className="font-mono text-[9px] text-gray-500 tracking-[0.2em] uppercase">DESCUBRA</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-gold-accent" />
        </motion.div>
      </div>

    </section>
  );
}
