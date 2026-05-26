/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ToggleLeft, ToggleRight, ShieldCheck } from 'lucide-react';

export default function VipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeBenefitTab, setActiveBenefitTab] = useState('experiences');

  // Desenvolvedores: Para usar imagens REAIS da frente/verso do cartão futuramente, 
  // basta preencher os caminhos das constantes abaixo:
  const cardFrontImage = ""; // Ex: "/images/card-front.png"
  const cardBackImage = "";  // Ex: "/images/card-back.png"

  const benefits = {
    experiences: [
      { id: 'e1', title: 'Experiências VIP', desc: 'Assento privilegiado em partidas decisivas e acesso a eventos corporativos de portas fechadas.' },
      { id: 'e2', title: 'Reserva Prioritária', desc: 'Canal direto para garantir sua mesa preferida 48h antes da liberação pública geral.' },
    ],
    discounts: [
      { id: 'd1', title: 'Cashback Premium', desc: 'Retorno de 15% de toda conta paga convertido diretamente em créditos de consumação no bar.' },
      { id: 'd2', title: 'Comemoração Especial', desc: 'Cortesias finas de aniversário acompanhadas de espumante e sobremesas da culinária francesa.' },
    ],
    vouchers: [
      { id: 'v1', title: 'Degustação Secreta', desc: 'Convites pontuais de pré-estréia para avaliar novos pratos e coquetéis antes de irem a público.' },
      { id: 'v2', title: 'Transmissões de Ouro', desc: 'Benefícios estendidos de chopp duplo em datas de clássicos selecionados pela embaixada do bar.' },
    ],
  };

  return (
    <section id="socio" className="relative py-36 bg-[#020617] overflow-hidden">
      
      {/* Intense Glowing Aura behind member card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-accent/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Presentation and interactive perks tabs */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <span className="font-mono text-xs text-gold-accent tracking-[0.25em] font-bold uppercase flex items-center gap-2.5">
                <span className="w-10 h-px bg-gold-accent"></span>
                MEMBERSHIP CLUB RESIDENCY
              </span>
              <h2 className="font-stadium text-4xl md:text-5xl font-black text-white uppercase leading-[1.05] tracking-tight">
                Privilège <br />
                <span className="font-display font-light text-transparent bg-gradient-to-r from-white via-gold-accent to-white bg-clip-text italic lowercase block normal-case pr-1 mt-1">
                  Exclusivo La Torre.
                </span>
              </h2>
              <div className="w-16 h-[2px] bg-french-red"></div>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light max-w-lg">
                Inspirado no elitismo esportivo dos clubes parisienses, o programa Sócio La Torre oferece privilégios sob medida para quem sabe que futebol de alto nível exige as melhores coordenadas em Curitiba.
              </p>
            </div>

            {/* Interactive Benefits Selector */}
            <div className="space-y-6">
              {/* Tab Toggles */}
              <div className="flex gap-2 p-1.5 bg-navy-card/90 rounded-lg border border-white/5 max-w-sm">
                {Object.keys(benefits).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveBenefitTab(tab)}
                    className={`flex-1 py-2 text-center rounded text-[10px] font-stadium font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                      activeBenefitTab === tab ? 'bg-gold-accent text-navy-deep' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab === 'experiences' ? 'Experiências' : tab === 'discounts' ? 'Descontos' : 'Vouchers'}
                  </button>
                ))}
              </div>

              {/* Perks details lists with check indicators */}
              <div className="space-y-4 max-w-lg">
                {benefits[activeBenefitTab as keyof typeof benefits].map((benefit) => (
                  <div key={benefit.id} className="flex gap-4 p-4 rounded-xl bg-navy-card/40 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="p-2 ml-1 rounded-lg bg-gold-accent/10 border border-gold-accent/20 text-gold-accent shrink-0 flex items-center justify-center h-9 w-9">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-stadium text-xs font-bold text-white uppercase tracking-wider">{benefit.title}</h4>
                      <p className="text-xs text-gray-450 mt-1 font-sans leading-relaxed font-light">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply link with premium inline transition */}
            <div className="pt-4">
              <a
                href="https://wa.me/5541999999999?text=Bonjour!%20Gostaria%20de%2520saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20me%20tornar%20S%C3%B3cio%20do%20La%20Torre%20Sport%20Bar!"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-3 text-xs font-stadium font-bold tracking-[0.2em] text-gold-accent hover:text-white transition-colors uppercase"
              >
                <span>FALAR COM O CONCIERGE DO CLUBE</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-sans">→</span>
              </a>
            </div>
          </div>

          {/* Right Block: The 3D Rotating VIP Metal Card */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* Card Flip Switch */}
            <div className="flex items-center gap-3 mb-8 bg-white/5 border border-white/5 px-4 py-2 rounded-full backdrop-blur-sm select-none">
              <span className={`text-[10px] font-mono tracking-wider ${!isFlipped ? 'text-gold-accent font-bold' : 'text-gray-500'}`}>FRENTE</span>
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                aria-label="Girar Cartão"
                className="text-gold-accent hover:scale-105 transition-transform cursor-pointer"
              >
                {isFlipped ? (
                  <ToggleRight className="w-8 h-8 text-gold-accent" />
                ) : (
                  <ToggleLeft className="w-8 h-8 text-gray-500" />
                )}
              </button>
              <span className={`text-[10px] font-mono tracking-wider ${isFlipped ? 'text-gold-accent font-bold' : 'text-gray-500'}`}>VERSO METAL</span>
            </div>

            {/* Interactive Card Canvas with magnificent reflections and perspective shadow depth */}
            <div 
              className="relative w-full max-w-[420px] aspect-[1.586] preserve-3d cursor-pointer group select-none select-none transition-shadow duration-500" 
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className={`relative w-full h-full transition-all duration-700 ease-out preserve-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}>
                
                {/* FRONT OF THE METAL CARD */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl p-6 flex flex-col justify-between border-[2px] border-gold-accent/40 shadow-2xl bg-gradient-to-br from-[#02050f] via-navy-card to-[#040e24] group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-all overflow-hidden gold-glow">
                  
                  {/* Option for custom real image of card front */}
                  {cardFrontImage ? (
                    <img 
                      src={cardFrontImage} 
                      alt="Sócio La Torre Frente" 
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <>
                      {/* Realistic linear metallic shine reflex overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-15" />
                      
                      {/* Ambient light colors deep in background */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.14),transparent_50%)] z-1" />
                      <div className="absolute -bottom-16 -left-16 w-38 h-38 rounded-full bg-french-red/10 blur-xl z-1" />
                      
                      {/* Front Top row */}
                      <div className="flex justify-between items-start relative z-10">
                        <div>
                          <span className="font-stadium font-black text-sm text-white tracking-widest leading-none uppercase">LA TORRE</span>
                          <span className="font-mono text-[8px] text-gray-400 tracking-wider block mt-0.5">EST. 2026 · CLUB PRIVÉ</span>
                        </div>

                        {/* Small NFC Metal Chip style */}
                        <div className="w-9 h-7 rounded bg-gradient-to-br from-gold-accent via-white to-gold-hover border border-gold-accent/50 filter brightness-95 opacity-80 flex flex-col justify-between p-1.5 shadow-inner">
                          <div className="flex justify-between"><div className="w-1.5 h-1.5 bg-black/20 rounded-sm"></div><div className="w-1.5 h-1.5 bg-black/20 rounded-sm"></div></div>
                          <div className="w-5 h-px bg-black/30"></div>
                          <div className="flex justify-between"><div className="w-1.5 h-1.5 bg-black/20 rounded-sm"></div><div className="w-1.5 h-1.5 bg-black/20 rounded-sm"></div></div>
                        </div>
                      </div>

                      {/* Card Center: Member details */}
                      <div className="relative z-10">
                        <span className="font-mono text-[8px] tracking-[0.25em] font-black text-gold-accent/80 uppercase">
                          MEMBRE EXCLUSIF
                        </span>
                        <h3 className="font-stadium text-base font-bold text-white tracking-wider uppercase mt-1">
                          CRISTIAN TOLEDO #01
                        </h3>
                      </div>

                      {/* Front Bottom Row */}
                      <div className="flex justify-between items-end relative z-10">
                        <div className="flex gap-4">
                          <div>
                            <span className="font-mono text-[7px] text-gray-500 uppercase tracking-widest block">EMISSÃO</span>
                            <span className="font-mono text-[9px] text-white">05 / 26</span>
                          </div>
                          <div>
                            <span className="font-mono text-[7px] text-gray-500 uppercase tracking-widest block">STATUS</span>
                            <span className="font-mono text-[9px] text-gold-accent font-bold">VIP SÓCIO</span>
                          </div>
                        </div>

                        {/* Styled gold metal logo */}
                        <div className="text-right">
                          <span className="font-display font-medium text-lg text-gold-accent leading-none block">LT</span>
                          <span className="font-mono text-[7px] text-gray-400 uppercase tracking-widest">Sport Bar</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* BACK OF THE METAL CARD */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl flex flex-col justify-between border-[2px] border-gold-accent/40 shadow-2xl bg-gradient-to-bl from-[#02050f] via-navy-card to-[#040e24] rotate-y-180 transition-all overflow-hidden">
                  
                  {/* Option for custom real image of card back */}
                  {cardBackImage ? (
                    <img 
                      src={cardBackImage} 
                      alt="Sócio La Torre Verso" 
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <>
                      {/* Moving reflective glare on swipe */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-15" />

                      {/* Magnetic black strip */}
                      <div className="mt-6 w-full h-10 bg-black shrink-0 relative z-10">
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-1">
                          <div className="w-1 bg-gold-accent/40 h-3"></div>
                          <div className="w-1 bg-gold-accent/40 h-3"></div>
                          <div className="w-2 bg-gold-accent/40 h-3"></div>
                        </div>
                      </div>

                      {/* Back center: signatures and details */}
                      <div className="p-6 flex flex-col justify-between flex-1 relative z-10">
                        <div className="flex gap-4 items-center">
                          <div className="w-[60%] h-8 bg-gray-950 border border-white/5 rounded-sm flex items-center px-3 shadow-inner">
                            <span className="font-display font-light italic text-[11px] text-gray-400">La Torre Club Privilège</span>
                          </div>
                          <div className="w-[30%] h-6 border border-white/5 bg-gray-950 rounded-sm flex items-center justify-center shadow-inner">
                            <span className="font-mono text-[9px] text-white tracking-widest">770 - BAT</span>
                          </div>
                        </div>

                        <p className="font-mono text-[7px] text-gray-500 leading-snug uppercase tracking-wider mt-4">
                          Este cartão inteligente é de propriedade do portador e garante acesso às dependências reguladas do Sócio La Torre Sport Bar, nos termos da comissão oficial.
                        </p>

                        {/* Bottom french tag line */}
                        <div className="flex justify-between items-end mt-4 pt-4 border-t border-white/5">
                          <span className="font-mono text-[8px] text-gold-accent font-bold">INFINE PREMIUM</span>
                          <div className="flex items-center gap-1.5 font-mono text-[7px] text-gray-400">
                            <span>Curitiba, Brasil</span>
                            <span>·</span>
                            <span>Paris, França</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

              </div>
            </div>

            {/* Micro instructional tooltip */}
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.15em] mt-6 select-none animate-pulse-slow">
              Clique no cartão para girar e ver o verso metálico
            </span>

          </div>

        </div>

      </div>

      {/* Embedded support for 3D flip card effect via custom styles */}
      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

    </section>
  );
}
