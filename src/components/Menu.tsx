/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { GlassWater, Flame, Sparkles, Utensils, Play } from 'lucide-react';

interface MenuProps {
  onOpenBooking: () => void;
}

export default function Menu({ onOpenBooking }: MenuProps) {
  // Cinematic photos representing the high-end gastronomy aspects the user requested
  const images = {
    cocktail: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80', // Close up cocktail
    whisky: 'https://www.google.com/imgres?q=WHISKYS%20PREMIUM&imgurl=https%3A%2F%2Fwww.casadabebida.com.br%2Fimg%2Fnews%2Fwhisky-bom-ate-r300-aqui-so-entra-custo-beneficio-com-estilo_1_600.png&imgrefurl=https%3A%2F%2Fwww.casadabebida.com.br%2Fblog%2F15%2F07%2F2025%2Fwhisky-bom-ate-r300-aqui-so-entra-custo-beneficio-com-estilo%2F&docid=JsHPYiTox7QL_M&tbnid=CjomlZ4tqakaKM&vet=12ahUKEwi70rLvhNiUAxVFrpUCHWvYFaEQnPAOegQIORAB..i&w=600&h=456&hcb=2&ved=2ahUKEwi70rLvhNiUAxVFrpUCHWvYFaEQnPAOegQIORAB', // Premium pour
    pizza: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', // Wood fired blurred background
    chopp: 'https://www.google.com/imgres?q=CHOPP&imgurl=https%3A%2F%2Fcdn.awsli.com.br%2F600x450%2F2613%2F2613735%2Fproduto%2F220435192%2Fchopp-m07cjb58az.JPG&imgrefurl=https%3A%2F%2Fwww.cerradeira.com.br%2Fchopp&docid=pZiAWoMeLkqJlM&tbnid=aOrf-mYAhFZURM&vet=12ahUKEwjqnOPShdiUAxVZr5UCHYKEOJwQnPAOegQIGBAB..i&w=423&h=450&hcb=2&ved=2ahUKEwjqnOPShdiUAxVZr5UCHYKEOJwQnPAOegQIGBAB', // Frosty cold draft beer
  };

  return (
    <section id="cardapio" className="relative py-36 bg-[#020617] overflow-hidden">
      
      {/* Editorial Decorative Background Details */}
      <div className="absolute right-0 top-1/4 w-[40vw] h-[40vw] rounded-full bg-gold-accent/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute left-0 bottom-1/4 w-[35vh] h-[35vh] bg-french-red/10 blur-[120px] pointer-events-none"></div>
      
      {/* Paris inspired fine outline divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Text Arrangement (High breathing room & Silent luxury) */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Elegant luxury tag */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-gold-accent tracking-[0.25em] font-bold uppercase flex items-center gap-2.5">
                <span className="w-10 h-px bg-gold-accent"></span>
                EXPÉRIENCE GASTRONOMIQUE
              </span>
              
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight">
                Le Goût du <br />
                <span className="italic font-light text-gold-accent">Spectacle.</span>
              </h2>
              <div className="w-16 h-[2px] bg-french-red"></div>
            </div>

            {/* Main emotional menu text provided by user */}
            <div className="space-y-6">
              <p className="font-display text-lg sm:text-xl text-white font-medium max-w-sm leading-relaxed italic">
                “No La Torre, a gastronomia acompanha a intensidade de cada partida.”
              </p>

              {/* Minimalist aligned details lines */}
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
                E uma experiência criada para transformar cada transmissão em uma noite memorável. Pratos e bebidas que compartilham do mesmo dinamismo que corre nos gramados mais importantes do Velho Continente.
              </p>
            </div>

            {/* Golden luxury glow CTA button */}
            <div className="pt-6">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold-accent hover:bg-white text-navy-deep font-stadium font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl shadow-gold-accent/10 hover:shadow-white/5 hover:scale-[1.02] cursor-pointer"
              >
                {/* Shiny sweep effect */}
                <span className="absolute inset-x-0 top-0 h-1/2 bg-white/20 rounded-t-full opacity-30"></span>
                <span>CONHECER A EXPERIÊNCIA</span>
                <Play className="w-3 h-3 fill-current stroke-none" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Cinematic Bento Photo Layout (Minimalist and extremely high contrast) */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-5 relative">
            
            {/* Fine architectural lines as watermark background details */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none -m-4"></div>
            
            {/* Picture 1: Premium cocktail with sharp close cup detail */}
            <div className="col-span-7 h-64 rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg">
              <img
                src={images.cocktail}
                alt="Luxury Cocktail close up"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-[9px] text-gold-accent tracking-widest uppercase block">L'ART DE LA MIXOLOGIE</span>
                <span className="font-stadium text-xs font-bold text-white uppercase tracking-wider">Drinks Autorais</span>
              </div>
            </div>

            {/* Picture 2: Pouring gold whisky into fine crystal */}
            <div className="col-span-5 h-64 rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg">
              <img
                src={images.whisky}
                alt="Premium whisky pouring"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-115"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-[9px] text-gray-400 tracking-widest uppercase block">SELECÇÃO GOLDEN</span>
                <span className="font-stadium text-xs font-bold text-white uppercase tracking-wider">Whiskys Premium</span>
              </div>
            </div>

            {/* Picture 3: Wood fired pizza blurred/out-of-focus background */}
            <div className="col-span-5 h-60 rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg">
              <img
                src={images.pizza}
                alt="Gourmet artisan pizza"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[85%] saturate-120"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-[9px] text-gold-accent tracking-widest uppercase block">WOOD-FIRED OUT OF FOCUS</span>
                <span className="font-stadium text-xs font-bold text-white uppercase tracking-wider">Pizzas Artesanais</span>
              </div>
            </div>

            {/* Picture 4: Frosty double chopp draft beer overflowing */}
            <div className="col-span-7 h-60 rounded-2xl overflow-hidden relative group border border-gold-accent/20 shadow-xl gold-glow">
              <img
                src={images.chopp}
                alt="Coldest draft beer Stella"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-[9px] text-french-red font-bold tracking-widest uppercase block">🔥 EXTREMAMENTE GELADOS</span>
                <span className="font-stadium text-xs font-bold text-white uppercase tracking-wider">Chopps Gaciais</span>
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
