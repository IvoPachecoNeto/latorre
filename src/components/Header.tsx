/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Trophy, MessageSquare, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (area?: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'História', href: '#historia' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Espaços & Reservas', href: '#reservas' },
    { label: 'Sócio VIP', href: '#socio' },
    { label: 'Embaixador', href: '#embaixador' },
    { label: 'Galeria', href: '#galeria' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3 bg-navy-deep/85 backdrop-blur-md shadow-lg border-b border-gold-accent/10 px-4 md:px-8' : 'py-5 bg-transparent px-4 md:px-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo Treatment */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-card via-french-red to-navy-deep flex items-center justify-center border border-gold-accent/50 group-hover:border-gold-accent transition-all duration-300 shadow-md">
                <span className="font-display font-bold text-lg text-white group-hover:scale-110 transition-transform">L</span>
                <span className="font-stadium font-bold text-xs text-gold-accent absolute -bottom-1 -right-1 bg-navy-card px-1 rounded border border-white/20">T</span>
              </div>
              {/* French indicator light glow */}
              <span className="absolute -top-0.5 -left-0.5 w-2 h-2 rounded-full bg-french-red animate-pulse-slow"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-stadium font-black text-sm tracking-widest text-white leading-none uppercase group-hover:text-gold-accent transition-colors">
                La Torre
              </span>
              <span className="font-mono text-[9px] text-gold-accent tracking-widest uppercase mt-0.5">
                Sport Bar · Batel
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-stadium text-xs font-semibold tracking-widest text-gray-300 hover:text-gold-accent transition-colors uppercase relative py-1.5 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Header Controls / CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="Perguntas rápidas no WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2 rounded-full border border-gold-accent text-xs font-stadium font-bold tracking-widest text-gold-accent hover:bg-gold-accent hover:text-navy-deep transition-all duration-300 shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>RESERVAR MESA</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-1.5 rounded-lg border border-white/10 hover:border-gold-accent/40 bg-navy-card/65 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </motion.header>

      {/* Fullscreen Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-y-0 right-0 w-full sm:max-w-md z-50 glass-panel shadow-2xl flex flex-col justify-between"
          >
            <div className="p-6">
              {/* Header inside Mobile Menu */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-french-red/20 border border-gold-accent flex items-center justify-center">
                    <span className="text-white font-display font-medium text-xs">LT</span>
                  </div>
                  <span className="font-stadium font-black text-xs text-white uppercase tracking-wider">
                    La Torre Sport Bar
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Stack */}
              <nav className="flex flex-col gap-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-stadium text-lg font-bold uppercase tracking-wider text-gray-250 hover:text-gold-accent transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs font-mono text-gold-accent/40">0{index + 1}.</span>
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* CTA at Bottom of Mobile Menu */}
            <div className="p-6 border-t border-white/5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <Trophy className="w-4 h-4 text-gold-accent" />
                <span>O melhor Sports Bar de Curitiba</span>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-lg bg-gold-accent font-stadium font-bold text-xs uppercase tracking-widest text-navy-deep hover:bg-white transition-all text-center flex items-center justify-center cursor-pointer"
              >
                RESERVAR MESA AGORA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
