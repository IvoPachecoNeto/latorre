/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageSquare, CalendarClock, Trophy, PhoneCall, MapPin, Instagram, Play, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] pt-28 overflow-hidden select-none">
      
      {/* Decorative vertical lines and subtle upper border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-accent/25 to-transparent"></div>
      
      {/* Left and Right side auras */}
      <div className="absolute left-0 bottom-0 w-[30vw] h-[30vw] bg-french-red/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-[25vw] h-[25vw] bg-gold-accent/5 blur-[120px] pointer-events-none"></div>

      {/* ========================================================== */}
      {/* CTA SECTION: O JOGO COMEÇA AQUI */}
      {/* ========================================================== */}
      <div className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="relative rounded-2xl overflow-hidden bg-[#03091e]/80 border border-gold-accent/20 py-16 px-8 md:px-16 text-center shadow-[0_0_40px_rgba(212,175,55,0.06)]">
          
          {/* Backdrop visual elements */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80"
              alt="Live stadium turf glowing"
              className="w-full h-full object-cover opacity-15 filter contrast-125 brightness-[35%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/95 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="font-mono text-xs text-gold-accent tracking-[0.25em] font-black uppercase block">
              ⚽ ÚLTIMOS ACESSOS PARA O JOGO DE HOJE
            </span>

            <h2 className="font-stadium text-4.5xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              O Jogo Começa Aqui.
            </h2>

            <p className="font-sans text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-lg mx-auto">
              Garanta seu lounge privativo ou mesa prioritária e viva a intensidade da Champions League em um ambiente cinematográfico sem paralelos.
            </p>

            {/* CTA Option Buttons with glow sweeps */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 max-w-md mx-auto">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-accent hover:bg-white text-navy-deep font-stadium font-black text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-white/5 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>RESERVAR AGORA</span>
                <Play className="w-3 h-3 fill-current stroke-none" />
              </button>

              <a
                href="https://wa.me/5541999999999"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold-accent/40 text-white font-stadium font-black text-xs tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5 hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 text-gold-accent" />
                <span>WHATSAPP DIRETO</span>
              </a>
            </div>

          </div>

          {/* Golden glow boundary lines */}
          <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-accent to-transparent"></span>
        </div>
      </div>

      {/* ========================================================== */}
      {/* COORDENADAS E RODAPÉ */}
      {/* ========================================================== */}
      <div className="border-t border-white/5 bg-[#01030a] relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Column 1: Address and Brand Details */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="font-stadium font-black text-lg tracking-[0.15em] text-white uppercase leading-none">
                La Torre Sport Bar
              </span>
              <span className="font-mono text-[9px] text-gold-accent tracking-[0.25em] uppercase mt-1.5 font-bold">
                PARIS MEETS CURITIBA · BATEL
              </span>
            </div>

            <p className="font-sans text-xs text-gray-400 leading-relaxed font-light max-w-sm">
              Um ambiente nobre projetado para torcedores exigentes. Alta mixologia, pizzas artesanais de fermentação natural e áudio de estádio integrado à tecnologia 4K.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-gray-300">
                <MapPin className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                <div className="font-sans font-light">
                  <p className="font-semibold text-white">Av. Vicente Machado, 770</p>
                  <p className="text-gray-400">Batel · Curitiba - PR · CEP 80420-011</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-300 font-sans font-light">
                <CalendarClock className="w-4 h-4 text-french-red shrink-0" />
                <span>Terça a Domingo das 18h às 01h</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-stadium text-[10px] font-bold text-white uppercase tracking-[0.2em] border-b border-white/5 pb-2.5">
              MENU DO ESPAÇO
            </h4>
            <ul className="space-y-3 font-stadium text-xs uppercase tracking-wider font-semibold">
              <li>
                <a href="#historia" className="text-gray-400 hover:text-gold-accent transition-colors">Notre Histoire</a>
              </li>
              <li>
                <a href="#experiencia" className="text-gray-400 hover:text-gold-accent transition-colors">L'Expérience</a>
              </li>
              <li>
                <a href="#cardapio" className="text-gray-400 hover:text-gold-accent transition-colors">L Gastronomie</a>
              </li>
              <li>
                <a href="#reservas" className="text-gray-400 hover:text-gold-accent transition-colors">Salas & Reservas</a>
              </li>
              <li>
                <a href="#socio" className="text-gray-400 hover:text-gold-accent transition-colors">Sócio VIP Club</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Network Connections */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-stadium text-[10px] font-bold text-white uppercase tracking-[0.2em] border-b border-white/5 pb-2.5">
              CONECTE-SE AO BAR
            </h4>
            
            <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
              Receba semanalmente o cronograma das transmissões oficiais da Champions League e Libertadores direto na sua tela.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/latorresportbar/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-gold-accent hover:border-gold-accent/40 hover:bg-white/10 transition-all cursor-pointer"
                title="Siga no Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-gold-accent hover:border-gold-accent/40 hover:bg-white/10 transition-all cursor-pointer"
                title="Siga no TikTok"
              >
                <Trophy className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5541999999999"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-gold-accent hover:border-gold-accent/40 hover:bg-white/10 transition-all cursor-pointer"
                title="Chamar no WhatsApp"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest font-semibold block">
                CONCIEGE TELEFÔNICO DIRECT:
              </span>
              <span className="font-mono text-xs text-white mt-1 block">
                +55 (41) 3333-7770
              </span>
            </div>
          </div>

        </div>

        {/* License Legals bottom row */}
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-gray-500">
          <span>
            © {currentYear} LA TORRE SPORT BAR · TODOS OS DIREITOS RESERVADOS.
          </span>
          <div className="flex items-center gap-4">
            <span className="text-gray-650 flex items-center gap-1">
              Desenvolvido com carinho focado na experiência premium do cliente 🇫🇷🇧🇷
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
