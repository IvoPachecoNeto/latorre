/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Tv, Volume2, Gamepad2, Users, Trophy, ChevronRight, Zap } from 'lucide-react';

export default function StadiumExperience() {
  const experiences = [
    {
      num: '01',
      title: 'TELÕES GIGANTES',
      desc: '5 telas de 75” + mega telão de 120”. Cada lance em escala de estádio com definição 4K cristalina.',
      icon: Tv,
      badge: '120 POLEGADAS',
      borderClass: 'hover:border-gold-accent/40',
      iconColor: 'text-gold-accent',
    },
    {
      num: '02',
      title: 'SOM IMERSIVO',
      desc: 'Áudio pensado para fazer você sentir a torcida vibrando e arrepiar como se estivesse no meio da geral.',
      icon: Volume2,
      badge: 'SOM IMERSIVO JBL',
      borderClass: 'hover:border-french-red/40',
      iconColor: 'text-french-red',
    },
    {
      num: '03',
      title: 'PLAYSTATION 5',
      desc: 'Desafios lendários, torneios exclusivos e entretenimento gamer na Sala Paris antes do apito inicial.',
      icon: Gamepad2,
      badge: 'DUALSENSE WIRELESS',
      borderClass: 'hover:border-gold-accent/40',
      iconColor: 'text-gold-accent',
    },
    {
      num: '04',
      title: 'CLIMA DE TORCIDA',
      desc: 'Luzes programadas, comemorações com fumaça, grito de gol e a legítima energia da arquibancada brasileira.',
      icon: Zap,
      badge: 'LUZES INTEGRADAS',
      borderClass: 'hover:border-french-red/40',
      iconColor: 'text-french-red',
    },
    {
      num: '05',
      title: 'EVENTOS E TRANSMISSÕES',
      desc: 'Champions League, Libertadores, Brasileirão, Premier League, Copa do Mundo e grandes lutas do UFC ao vivo.',
      icon: Trophy,
      badge: 'TODOS OS JOGOS',
      borderClass: 'hover:border-gold-accent/40',
      iconColor: 'text-gold-accent',
    },
  ];

  return (
    <section id="experiencia" className="relative py-32 bg-[#020813] overflow-hidden">
      
      {/* Decorative stadium glowing backdrop lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(193,18,31,0.08),transparent_60%)]"></div>
      
      {/* Curved glowing line mimicking soccer yard line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[1px] bg-gradient-to-r from-transparent via-gold-accent/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Block of section */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-xs text-french-red tracking-[0.2em] font-bold uppercase flex items-center justify-center gap-2">
            💯 EXPERIÊNCIA DE ARENA
          </span>
          <h2 className="font-stadium text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Mais do que assistir futebol. <br />
            <span className="font-display font-light text-transparent bg-gradient-to-r from-white via-gold-accent to-white bg-clip-text italic lowercase block normal-case pr-1 mt-1">
              sentir o jogo.
            </span>
          </h2>
          <div className="w-16 h-1 bg-french-red mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Elegant Cards Grid with 5 elements, styled beautifully */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {experiences.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={item.num}
                className={`relative group bg-navy-card/45 rounded-2xl p-8 border border-white/5 transition-all duration-300 hover:bg-navy-card/85 hover:shadow-2xl hover:shadow-black/50 ${item.borderClass} ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Numeric index card header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-semibold text-gray-400 group-hover:text-gold-accent transition-colors">
                    [{item.num}]
                  </span>
                  
                  {/* Miniature decorative mini tag */}
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 text-gray-500 tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Aesthetic Ring Floating Icon */}
                <div className="relative mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                    <IconComponent className={`w-6 h-6 ${item.iconColor} transition-transform group-hover:scale-110`} />
                  </div>
                  {/* Subtle blur ring light behind the logo */}
                  <span className={`absolute -inset-2 rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                    index % 2 === 0 ? 'bg-gold-accent' : 'bg-french-red'
                  }`}></span>
                </div>

                {/* Text elements */}
                <h3 className="font-stadium text-base font-extrabold text-white tracking-widest uppercase mb-3 flex items-center gap-1.5">
                  <span>{item.title}</span>
                  <ChevronRight className="w-4 h-4 text-gold-accent/40 group-hover:text-gold-accent transition-all duration-300 group-hover:translate-x-1" />
                </h3>
                  
                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors">
                  {item.desc}
                </p>

                {/* Card footer decorative lines */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-accent via-french-red to-gold-accent transition-all duration-300 group-hover:w-full rounded-b-2xl"></span>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
