/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { GlassWater, Flame, Sparkles, Utensils, Play } from 'lucide-react';

const whiskyImg = '/assets/whiskys.jpg';
const choppImg = '/assets/chopp.jpg';

interface MenuProps {
  onOpenBooking: () => void;
}

export default function Menu({ onOpenBooking }: MenuProps) {
  const images = {
    cocktail:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',

    whisky: whiskyImg,

    pizza:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',

    chopp: choppImg,
  };

  return (
    <section
      id="cardapio"
      className="relative py-36 bg-[#020617] overflow-hidden"
    >
      {/* Editorial Decorative Background Details */}
      <div className="absolute right-0 top-1/4 w-[40vw] h-[40vw] rounded-full bg-gold-accent/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute left-0 bottom-1/4 w-[35vh] h-[35vh] bg-french-red/10 blur-[120px] pointer-events-none"></div>

      {/* Paris inspired fine outline divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-10">

            {/* Elegant luxury tag */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-gold-accent tracking-[0.25em] font-bold uppercase flex items-center gap-2.5">
                <span className="w-10 h-px bg-gold-accent"></span>
                EXPÉRIENCE GASTRONOMIQUE
              </span>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight">
                Le Goût du <br />
                <span className="italic font-light text-gold-accent">
                  Spectacle.
                </span>
              </h2>

              <div className="w-16 h-[2px] bg-french-red"></div>
            </div>

            {/* Main text */}
            <div className="space-y-6">
              <p className="font-display text-lg sm:text-xl text-white font-medium max-w-sm leading-relaxed italic">
                “No La Torre, a gastronomia acompanha a intensidade de cada partida.”
              </p>

              {/* Minimalist details */}
              <div className="space-y-3 pt-4 border-t border-white/5 font-mono text-xs text-gray-300 tracking-wider">

                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
                  <span>Drinks autorais.</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-french-red" />
                  <span>Pizzas artesanais.</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
                  <span>Whiskys premium.</span>
                </div>

                <div className="flex items-center gap-3 font-semibold text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-french-red animate-pulse" />
                  <span>Chopps extremamente gelados.</span>
                </div>

              </div>

              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light mt-6 max-w-md">
                E uma experiência criada para transformar cada transmissão em uma noite memorável.
                Pratos e bebidas que compartilham do mesmo dinamismo que corre
                nos gramados mais importantes do Velho Continente.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold-accent hover:bg-white text-navy-deep font-stadium font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl shadow-gold-accent/10 hover:shadow-white/5 hover:scale-[1.02] cursor-pointer"
              >
                <span className="absolute inset-x-0 top-0 h-1/2 bg-white/20 rounded-t-full opacity-30"></span>

                <span>CONHECER A EXPERIÊNCIA</span>

                <Play className="w-3 h-3 fill-current stroke-none" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-5 relative">

            {/* Fine outline */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none -m-4"></div>

            {/* Cocktail */}
            <div className="col-span-7 h-64 rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg">
              <img
                src={images.cocktail}
                alt="Drinks autorais premium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-[9px] text-gold-accent tracking-widest uppercase block">
                  L'ART DE LA MIXOLOGIE
                </span>

                <span className="font-stadium text-xs font-bold text-white uppercase tracking-wider">
                  Drinks Autorais
                </span>
              </div>
            </div>

            {/* Whisky */}
            <div className="col-span-5 h-64 rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg">
              <img
                src={images.whisky}
                alt="Whiskys premium La Torre"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-115"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-[9px] text-gray-400 tracking-widest uppercase block">
                  SELECÇÃO GOLDEN
                </span>

                <span className="font-stadium text-xs font-bold text-white uppercase tracking-wider">
                  Whiskys Premium
                </span>
              </div>
            </div>

            {/* Pizza */}
            <div className="col-span-5 h-60 rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg">
              <img
                src={images.pizza}
                alt="Pizzas artesanais premium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[85%] saturate-120"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-[9px] text-gold-accent tracking-widest uppercase block">
                  WOOD-FIRED OUT OF FOCUS
                </span>

                <span className="font-stadium text-xs font-bold text-white uppercase tracking-wider">
                  Pizzas Artesanais
                </span>
              </div>
            </div>

            {/* Chopp */}
            <div className="col-span-7 h-60 rounded-2xl overflow-hidden relative group border border-gold-accent/20 shadow-xl gold-glow">

              <img
                src={images.chopp}
                alt="Chopp premium extremamente gelado"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-[9px] text-french-red font-bold tracking-widest uppercase block">
                  🔥 EXTREMAMENTE GELADOS
                </span>

                <span className="font-stadium text-xs font-bold text-white uppercase tracking-wider">
                  Chopps Glaciais
                </span>
              </div>

              <span className="absolute top-3 right-3 bg-french-red text-white py-0.5 px-2 rounded text-[8px] font-mono tracking-widest uppercase font-bold animate-pulse">
                -2°C TRINCANDO
              </span>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
