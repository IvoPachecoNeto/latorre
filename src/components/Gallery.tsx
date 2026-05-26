/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { GalleryItem, GalleryTag } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryTag>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filters = [
    { label: 'Todos os Lances', value: 'all' as GalleryTag },
    { label: 'O Bar', value: 'unidade' as GalleryTag },
    { label: 'Gastronomia', value: 'gastronomia' as GalleryTag },
    { label: 'Experiência', value: 'experiencia' as GalleryTag },
    { label: 'Aniversários & Eventos', value: 'eventos' as GalleryTag },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      category: 'unidade',
      title: 'Fachada Noturna Batel',
      description: 'Arquitetura cosmopolita iluminada em tons de azul profundo e vermelho francês.',
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'g2',
      category: 'experiencia',
      title: 'Vibração de Estádio',
      description: 'Torcedores vibrando a cada lance decisivo como se estivessem na arquibancada real.',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'g3',
      category: 'gastronomia',
      title: 'Pizza Artesanal Premium',
      description: 'Pizzas montadas artesanalmente assadas em forno de alta temperatura.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'g4',
      category: 'gastronomia',
      title: 'Drinks Autorais de Paris',
      description: 'A coquetelaria sofisticada feita por quem ama misturar cores, espumantes e sabores.',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'g5',
      category: 'experiencia',
      title: 'Gaming PS5 Arena',
      description: 'Controles DualSense sem fio e TVs de 75 polegadas para disputas antes da partida oficial.',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'g6',
      category: 'unidade',
      title: 'Privacidade na Sala Paris',
      description: 'O clima premium e as poltronas de couro em nosso espaço vip exclusivo.',
      image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'g7',
      category: 'eventos',
      title: 'Aniversários Memoráveis',
      description: 'Amigos reunidos celebrando as vitórias da vida com double chopp de primeira.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'g8',
      category: 'eventos',
      title: 'Eventos Corporativos VIP',
      description: 'Confraternizações planejadas com telão privativo e cardápio montável sob medida.',
      image: 'https://images.unsplash.com/photo-1530101121243-cfa57d1df11b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (id: string) => {
    const idx = galleryItems.findIndex(item => item.id === id);
    if (idx !== -1) setSelectedPhotoIndex(idx);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % galleryItems.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="galeria" className="relative py-32 bg-[#040c1e] overflow-hidden">
      
      {/* Visual glowing frame background details to emphasize Paris cinema */}
      <div className="absolute right-0 top-1/2 w-[30vw] h-[30vw] rounded-full bg-french-red/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Gallery Intro Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs text-gold-accent tracking-widest uppercase font-bold flex items-center justify-center gap-2">
            📸 CINÉMA DES LIGUES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
            Galeria <span className="italic font-light text-gold-accent">Finest Shots</span>
          </h2>
          <p className="font-sans text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Nossos lances, nosso ambiente e as comemorações emblemáticas registradas pelas lentes de quem é apaixonado por cada detalhe da noite do Batel.
          </p>
          <div className="w-16 h-[2px] bg-french-red mx-auto mt-2"></div>
        </div>

        {/* Filter Badges Stack */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-xs font-stadium font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${
                activeFilter === filter.value
                  ? 'bg-french-red text-white border-french-red shadow-lg shadow-french-red/10'
                  : 'text-gray-400 border-white/5 bg-white/5 hover:text-white hover:border-white/15'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Cinematic Grid Layout (Mix of standard and portrait blocks) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-navy-card border border-white/5 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]"
              >
                {/* Photo Image layer with smooth responsive zoom */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter group-hover:brightness-105"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Overlay hover display */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5 backdrop-blur-[1px]" />

                {/* Text and dynamic icon elements visible on hover */}
                <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <span className="font-mono text-[8px] text-gold-accent tracking-widest uppercase block mb-1">
                    # {item.category}
                  </span>
                  
                  <h3 className="font-stadium text-sm font-bold text-white uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-[11px] text-gray-300 line-clamp-2 leading-snug font-light">
                    {item.description}
                  </p>
                  
                  {/* Miniature search icon indicator */}
                  <div className="absolute top-[-40px] right-5 w-8 h-8 rounded-full bg-gold-accent text-navy-deep flex items-center justify-center transition-transform group-hover:scale-100 scale-90 duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Small indicator light glow */}
                <span className="absolute top-4 right-4 z-10 w-2 h-2 rounded-full bg-gold-accent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note block */}
        <div className="text-center mt-12">
          <p className="font-sans text-xs text-gray-500">
            Siga nosso instagram <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gold-accent hover:underline">@LaTorreSportBar</a> e marque-nos nos seus lances históricos! 📸
          </p>
        </div>

      </div>

      {/* LIGHTBOX FULLSCREEN SLIDE SHOW */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-deep/95 backdrop-blur-md flex flex-col justify-between p-6"
          >
            {/* Lightbox Header row */}
            <div className="flex items-center justify-between w-full text-white">
              <div>
                <span className="font-mono text-[9px] text-gold-accent tracking-widest uppercase block">
                  ({selectedPhotoIndex + 1} / {galleryItems.length})
                </span>
                <span className="font-stadium text-xs uppercase tracking-widest text-white mt-1 block">
                  LA TORRE ALBUM CINÉMA
                </span>
              </div>
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Active Image with Slider Controls */}
            <div className="flex-1 flex items-center justify-center my-6 relative max-w-4xl mx-auto w-full">
              {/* Prev Arrow */}
              <button
                onClick={prevPhoto}
                className="absolute left-0 p-3 rounded-full bg-black/60 hover:bg-gold-accent hover:text-navy-deep text-white transition-all z-10 cursor-pointer hidden sm:flex"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Main Image in View with spring entry scale */}
              <motion.div
                key={selectedPhotoIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden max-h-[65vh] md:max-h-[75vh] min-w-[300px]"
              >
                <img
                  src={galleryItems[selectedPhotoIndex].image}
                  alt={galleryItems[selectedPhotoIndex].title}
                  className="max-h-[65vh] md:max-h-[75vh] object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Next Arrow */}
              <button
                onClick={nextPhoto}
                className="absolute right-0 p-3 rounded-full bg-black/60 hover:bg-gold-accent hover:text-navy-deep text-white transition-all z-10 cursor-pointer hidden sm:flex"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Footer Descriptions */}
            <div className="p-4 rounded-xl border border-white/5 bg-navy-card/50 max-w-xl mx-auto text-center w-full">
              <h3 className="font-stadium text-sm font-bold text-white uppercase tracking-widest">
                {galleryItems[selectedPhotoIndex].title}
              </h3>
              <p className="font-sans text-xs text-gray-400 mt-1.5 leading-relaxed font-light">
                {galleryItems[selectedPhotoIndex].description}
              </p>
            </div>

            {/* Mobile quick Swipe navigation buttons overlay */}
            <div className="flex sm:hidden items-center justify-center gap-6 mt-2">
              <button onClick={prevPhoto} className="px-4 py-2 border border-white/10 rounded-lg text-xs font-mono text-white">
                Anterior
              </button>
              <button onClick={nextPhoto} className="px-4 py-2 border border-white/10 rounded-lg text-xs font-mono text-white">
                Próximo
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
