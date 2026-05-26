/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Tv, Gamepad2, Users, Music4, GlassWater, ArrowUpRight } from 'lucide-react';
import { EventRoom } from '../types';
import salaParisImg from '../../assets/sala-paris.jpg';

interface ReservationsProps {
  onOpenBooking: (area?: string) => void;
}

export default function Reservations({ onOpenBooking }: ReservationsProps) {
  const rooms: EventRoom[] = [
    {
      id: 'principal',
      title: 'Salão Principal',
      capacity: 'Até 50 pessoas',
      screens: ['3x TVs de 75”', '1x Mega Telão de 120”'],
      sound: 'Som Imersivo Integrado de Estádio',
      features: ['Ideal para grandes torcidas', 'Acomodação em mesas capitonê', 'Ampla visão de todos os ângulos'],
      description: 'O epicentro do bar. Sinta a vibração coletiva dos gols com som de última geração e telas dispostas estrategicamente por todo o espaço físico.',
      tag: 'O ESTÁDIO DO LA TORRE',
      bgImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'paris',
      title: 'Sala Paris',
      capacity: 'Até 20 pessoas',
      screens: ['1x Smart TV de 75” 4K'],
      sound: 'Console JBL Boombox com Bluetooth independente',
      features: ['PlayStation 5 com Copa/FIFA', 'Atendimento Garçom Exclusivo', 'Sofás premium de Couro Nobre'],
      description: 'Nosso espaço VIP ultraconservado e privativo. Perfeito para grupos que desejam focar na sua própria zoeira, jogar PS5 ou assistir à partida com total privacidade.',
      tag: 'L’ESPACE PRIVÉ',
      bgImage: salaParisImg,
    },
    {
      id: 'externa',
      title: 'Área Externa',
      capacity: 'Sob Consulta',
      screens: ['TVs de LED Dispostas'],
      sound: 'Som ambiente customizado',
      features: ['Espaço aberto arejado', 'Perfeito para noites quentes', 'Deck de madeira iluminado'],
      description: 'Um refúgio descontraído e elegante ao ar livre, decorado com luzes de varal vintage. Ideal para um chopp descompromissado acompanhado de boas risadas.',
      tag: 'LE JARDIN DE L’ESTÁDIO',
      bgImage: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="reservas" className="relative py-32 bg-[#020813] overflow-hidden">
      
      {/* Decorative vertical golden strip mirroring stadium sidelines */}
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-accent/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs text-french-red tracking-[0.2em] font-bold uppercase block">
              🎟️ LUGARES VIP DISPONÍVEIS
            </span>
            <h2 className="font-stadium text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
              Seu lugar garantido <br />
              <span className="font-display font-light text-transparent bg-gradient-to-r from-white via-gold-accent to-white bg-clip-text italic lowercase block normal-case pr-1 mt-1">
                antes do apito inicial.
              </span>
            </h2>
            <p className="font-sans text-sm text-gray-350 leading-relaxed font-light max-w-xl">
              O La Torre possui áreas exclusivas para reservas individuais ou corporativas. Salas temáticas, telões independentes, som premium, karaokê, PlayStation 5 e atendimento diferenciado elevam seu evento para outra divisão.
            </p>
          </div>
          <div className="lg:col-span-5 text-left lg:text-right">
            <button
              onClick={() => onOpenBooking()}
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-french-red to-red-800 hover:from-white hover:to-white text-white hover:text-navy-deep font-stadium font-black text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-french-red/10 hover:shadow-white/5 hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-x-0 top-0 h-1/2 bg-white/10 rounded-t-full opacity-20"></span>
              <span>INICIAR RESERVA DE EVENTO</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Ambient Cards List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              key={room.id}
              className="group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-navy-card/35 border border-white/5 hover:border-gold-accent/20 transition-all duration-300 shadow-2xl h-[520px]"
            >
              
              {/* Image banner inside card */}
              <div className="relative h-48 overflow-hidden border-b border-white/5 shrink-0">
                <img
                  src={room.bgImage}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Visual shade and tag cover on thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-card via-transparent to-black/40" />
                
                <span className="absolute top-4 left-4 bg-navy-card/95 backdrop-blur-md px-3 py-1 rounded-full border border-gold-accent/30 font-mono text-[9px] text-gold-accent tracking-widest uppercase">
                  {room.tag}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="font-stadium text-lg font-extrabold text-white uppercase tracking-wider">
                    {room.title}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-french-red text-white py-0.5 font-mono text-[9px] font-bold">
                    {room.capacity}
                  </span>
                </div>
              </div>

              {/* Body Text */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed font-light mb-6 line-clamp-3">
                    {room.description}
                  </p>

                  {/* Technical Highlights */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-200">
                      <Tv className="w-4 h-4 text-gold-accent shrink-0" />
                      <span className="text-gray-350 text-[11px] font-light">
                        {room.screens.join(' & ')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-gray-200">
                      <Music4 className="w-4 h-4 text-french-red shrink-0" />
                      <span className="text-gray-350 text-[11px] font-light line-clamp-1">
                        {room.sound}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-gray-200">
                      <Gamepad2 className="w-4 h-4 text-gold-accent shrink-0" />
                      <span className="text-gray-350 text-[11px] font-light line-clamp-1">
                        {room.features[0]} · {room.features[1]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card CTA Trigger Button */}
                <div className="pt-6 border-t border-white/5">
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="w-full py-3.5 px-4 rounded-xl font-stadium font-extrabold text-xs tracking-[0.15em] text-white uppercase border border-white/10 bg-white/3 hover:bg-gold-accent hover:text-navy-deep hover:border-gold-accent hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>RESERVAR ESTE ESPAÇO</span>
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
