/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Newspaper, Quote } from 'lucide-react';

export default function Ambassador() {
  const mediaPasses = [
    { name: 'RPC TV' },
    { name: 'RICTV' },
    { name: 'Banda B' },
    { name: 'Tribuna do Paraná' },
    { name: 'Rede Massa' },
  ];

  return (
    <section id="embaixador" className="relative py-36 bg-[#020617] overflow-hidden">
      
      {/* Cinematic Spotlight Glow behind portrait frame */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-accent/5 blur-[120px] pointer-events-none"></div>

      {/* Union line divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-accent/25 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid: Editorial column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Elegant Portrait Column with custom editorial tag */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex flex-col items-center">
            
            {/* Visual background luxury framing highlighting journalistic layout */}
            <div className="absolute -top-6 -left-6 z-0 w-32 h-32 border-t-[3px] border-l-[3px] border-gold-accent/45 transition-all duration-500 rounded-tl-xl hover:scale-105"></div>
            <div className="absolute -bottom-6 -right-6 z-0 w-32 h-32 border-b-[3px] border-r-[3px] border-french-red/45 transition-all duration-500 rounded-br-xl hover:scale-105"></div>

            {/* Main Picture Portrait with subtle spotlight lens flare and black-and-white treatment */}
            <div className="relative w-full z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/4] group bg-navy-deep">
              <img
                src="https://www.google.com/imgres?q=cristian%20toledo&imgurl=https%3A%2F%2Fwww.basicacomunicacoes.com.br%2Fnovo%2Fwp-content%2Fuploads%2F2024%2F05%2FWhatsApp-Image-2024-05-23-at-15.13.28.jpeg&imgrefurl=https%3A%2F%2Fwww.basicacomunicacoes.com.br%2Fpalestrantes%2Fcristian-toledo%2F&docid=GVbQE9DPS91TVM&tbnid=wMk3TGEa805k0M&vet=12ahUKEwjj6teGhNiUAxVzKrkGHdbqJPEQnPAOegQIHhAB..i&w=959&h=1280&hcb=2&ved=2ahUKEwjj6teGhNiUAxVzKrkGHdbqJPEQnPAOegQIHhAB"
                alt="Cristian Toledo Oficial Ambassador"
                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 filter grayscale brightness-95 hover:grayscale-0 duration-500 contrast-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Gold light leak effect simulating theatrical stadium lights */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none z-10" />
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gold-accent/15 to-transparent pointer-events-none z-15" />
              
              {/* Bottom tag block inside picture */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="font-mono text-[9px] text-gold-accent tracking-[0.25em] font-black uppercase block">
                  EMBAIXADOR OFICIAL
                </span>
                <h3 className="font-stadium text-2xl font-black text-white uppercase tracking-wider mt-1.5">
                  Cristian Toledo
                </h3>
                <p className="text-xs text-gray-300 font-sans font-light mt-1">
                  A voz mais respeitada e experiente do futebol no Paraná.
                </p>
              </div>
            </div>

            {/* Graphic Badge: PASS IMPRENSA ESTÁDIO */}
            <div className="absolute top-6 -right-5 z-25 bg-gradient-to-br from-gold-accent via-[#f1d063] to-gold-hover text-navy-deep px-5 py-3 rounded-lg shadow-[0_10px_25px_rgba(212,175,55,0.25)] flex items-center gap-2.5 transform rotate-3 select-none">
              <Newspaper className="w-4 h-4 text-navy-deep" />
              <span className="font-mono text-[9px] font-black tracking-[0.2em] uppercase">PASSE IMPRENSA #01</span>
            </div>

          </div>

          {/* Right Side: Detailed Story Editorial style layout with reduced text */}
          <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-french-red tracking-[0.25em] font-bold uppercase flex items-center gap-2.5">
                <span className="w-8 h-px bg-french-red"></span>
                OPINIÃO & TRADIÇÃO
              </span>
              
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                A Voz do <br />
                <span className="font-stadium font-black text-gold-accent uppercase tracking-wider">Futebol.</span>
              </h2>
              <div className="w-16 h-[2.5px] bg-gold-accent"></div>
            </div>

            <div className="space-y-6 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              <p className="font-display text-base text-white font-medium italic">
                De carona na autoridade esportiva das grandes mídias.
              </p>

              <p>
                Com passagens lendárias por gigantes como <strong className="text-white">RPC TV, RICTV, Banda B, Tribuna do Paraná</strong> e <strong className="text-white">Rede Massa</strong>, Cristian construiu uma trajetória impecável pautada pela proximidade real com a emoção do torcedor.
              </p>

              <blockquote className="relative p-6 rounded-xl bg-navy-card/45 border border-white/5 font-display text-sm italic text-gray-250 pl-12 shadow-sm leading-relaxed">
                <Quote className="w-7 h-7 text-gold-accent/35 absolute left-4 top-5 stroke-[1.5]" />
                "No La Torre, vivemos o esporte de fato. É o ponto onde as crônicas do futebol paranaense abraçam o charme e a pompa das grandes produções europeias."
              </blockquote>

              <p>
                Não oferecemos apenas transmissões rápidas: criamos momentos icônicos onde o futebol deixa de ser apenas um jogo e passa a ser uma experiência exclusiva de arquibancada premium.
              </p>
            </div>

            {/* Passes Badge row with subtle golden grid */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest font-semibold block">PASSAGEM E PARREIRAS DE CREDIBILIDADE:</span>
              <div className="flex flex-wrap gap-2 pt-1.5">
                {mediaPasses.map((pass) => (
                  <span
                    key={pass.name}
                    className="px-3.5 py-1.5 bg-white/3 rounded-full border border-white/5 text-[10px] text-gray-350 font-stadium uppercase font-black hover:border-gold-accent/20 hover:text-white transition-all cursor-default tracking-wider"
                  >
                    {pass.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
