/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Landmark, Flame, Compass, Heart, MapPin } from 'lucide-react';

const torreImg = '/assets/torre.jpg';
export default function History() {
  return (
    <section id="historia" className="relative py-32 bg-navy-deep overflow-hidden">
      
      {/* Decorative Paris Eiffel outline background layer if needed, or elegant golden blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-french-red/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute right-0 bottom-10 w-[300px] h-[300px] rounded-full bg-gold-accent/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Decorative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column: The Epic Tale */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-gold-accent tracking-widest uppercase font-semibold flex items-center gap-2">
                <span className="w-6 h-px bg-gold-accent"></span>
                NOTRE HISTOIRE
              </span>
              
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
                Uma francesa. <br />
                <span className="italic font-light text-gold-accent">Um sonho.</span> <br />
                O país do futebol.
              </h2>
            </div>

            <div className="space-y-6 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              <p className="font-display text-base sm:text-lg text-white font-medium italic">
                O La Torre nasceu da paixão de uma francesa pelo Brasil.
              </p>
              
              <p>
                Inspirada pela atmosfera vibrante das arquibancadas brasileiras, a fundadora imaginou um ponto de encontro exclusivo onde a energia do torcedor se pudesse aliar à sofisticação clássica de Paris. 
              </p>
              
              <blockquote className="border-l border-gold-accent pl-4 my-6 italic text-gray-200 bg-white/3 py-3 pr-4 rounded-r-lg">
                “Um ambiente cinematográfico projetado para quem sente o jogo como uma verdadeira final de campeonato.”
              </blockquote>

              <p>
                Cada detalhe — do som envolvente aos telões suspensos — foi desenhado para aproximar nações e criar o primeiro sports lounge de alta costura em Curitiba.
              </p>
            </div>

            {/* French/Brazilian Union Badges */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded bg-white/5 text-gold-accent">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-stadium text-xs font-bold text-white uppercase tracking-wider">REQUINTE DE PARIS</h4>
                  <p className="text-[11px] text-gray-400">Lounges privativos aconchegantes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded bg-white/5 text-french-red">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-stadium text-xs font-bold text-white uppercase tracking-wider">ALMA BRASILEIRA</h4>
                  <p className="text-[11px] text-gray-400">Torcida pulsante, chopp trincando</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Photo Frames */}
          <div className="lg:col-span-6 relative">
            
            {/* Visual Frame 1: Grand Eiffel Tower representation (The French Inspiration) */}
            <div className="relative z-10 w-[70%] aspect-[1:1.1] rounded-2xl overflow-hidden glass-panel shadow-2xl group transition-all duration-500 hover:scale-[1.01]">
              <div className="absolute inset-0 bg-navy-deep/20 group-hover:bg-transparent transition-colors z-10" />
              <img
               src="/assets/torre.jpg"
                alt="Eiffel Tower Paris Night"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-navy-deep/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded">
                <span className="font-mono text-[9px] text-gold-accent uppercase tracking-widest block">FOUNDER INSPIRATION</span>
                <span className="font-stadium text-xs text-white font-bold uppercase tracking-wider">Paris, França</span>
              </div>
            </div>

            {/* Visual Frame 2: Elegant Premium Sports Bar Drinks & Seating (French meets stadiums) */}
            <div className="absolute right-0 top-12 z-20 w-[55%] aspect-square rounded-2xl overflow-hidden glass-panel shadow-2xl group border-2 border-gold-accent/20 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-navy-deep/20 group-hover:bg-transparent transition-colors z-10" />
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=80"
                alt="Cocktail Luxury Sports Bar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 z-25 bg-navy-deep/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded">
                <span className="font-mono text-[9px] text-french-red uppercase tracking-widest block">NOTURNO BATEL</span>
                <span className="font-stadium text-xs text-white font-bold uppercase tracking-wider">Drinks Autoriais</span>
              </div>
            </div>

            {/* Visual Frame 3: Vibrating fans atmosphere inside bar (Soccer Intensity) */}
            <div className="absolute -bottom-12 right-12 z-10 w-[45%] aspect-[1.3] rounded-xl overflow-hidden glass-panel-light shadow-xl group border border-white/10 transition-all duration-300 hover:scale-[1.02] hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
                alt="Soccer stadium fans cheers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Dynamic floating decorative gold tag */}
            <div className="absolute -left-6 bottom-4 z-20 p-4 rounded-xl bg-gradient-to-br from-navy-card to-navy-deep border border-gold-accent/30 shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-accent/10 flex items-center justify-center text-gold-accent animate-pulse">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="font-stadium text-xs font-bold text-white block">PAIXÃO MUNDIAL</span>
                <span className="font-mono text-[9px] text-gray-400">O esporte une nações</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
