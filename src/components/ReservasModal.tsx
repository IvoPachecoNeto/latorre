/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Clock, Send, Check, ShieldCheck, Gamepad2, Tv, MapPin } from 'lucide-react';

interface ReservasModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialArea?: string;
}

export default function ReservasModal({ isOpen, onClose, initialArea = '' }: ReservasModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(4);
  const [area, setArea] = useState(initialArea || 'paris');
  const [eventType, setEventType] = useState('match');
  const [comments, setComments] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const areas = [
    { id: 'paris', title: 'Sala Paris', desc: 'Privativa, climatizada, Som JBL & PS5', capacity: 'Até 20 pessoas' },
    { id: 'principal', title: 'Salão Principal', desc: 'Mega telão 120" & Som imersivo', capacity: 'Até 50 pessoas' },
    { id: 'externa', title: 'Área Externa', desc: 'Ambiente descontraído, ao ar livre', capacity: 'Sob consulta' },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) return;

    // Build elegant WhatsApp message
    const areaName = areas.find(a => a.id === area)?.title || 'La Torre';
    const eventLabel =
      eventType === 'match' ? 'Assistir a um Jogo' :
      eventType === 'anniversary' ? 'Aniversário' :
      eventType === 'corporate' ? 'Evento Corporativo' : 'Encontro com Amigos';

    const text = `Bonjour! Gostaria de solicitar uma reserva no *La Torre Sport Bar*:\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📞 *Telefone:* ${phone}\n` +
      `📅 *Data:* ${date.split('-').reverse().join('/')}\n` +
      `⏰ *Horário:* ${time}\n` +
      `👥 *Pessoas:* ${guests} convidados\n` +
      `📍 *Espaço:* ${areaName}\n` +
      `⚽ *Tipo de Evento:* ${eventLabel}\n` +
      (comments ? `💬 *Observações:* ${comments}\n` : '') +
      `\n*Por favor, confirmem a disponibilidade do meu lugar na arquibancada!* 🇫🇷🇧🇷`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5541999999999?text=${encodedText}`; // Curitiba PR

    setIsSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setIsSuccess(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/90 backdrop-blur-md">
        {/* Background Click Close */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-2xl overflow-hidden glass-panel rounded-2xl md:grid md:grid-cols-12 max-h-[90vh] md:max-h-none overflow-y-auto"
        >
          {/* Quick Header Banner - Paris meets Brazil Visual inside dialog */}
          <div className="p-6 md:col-span-5 bg-gradient-to-br from-navy-card via-navy-deep to-french-red/40 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gold-accent/15">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-4 text-xs font-mono rounded-full bg-gold-accent/10 border border-gold-accent/30 text-gold-accent">
                <span>🇫🇷</span>
                <span>CHAMPIONS EXPERIENCE</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                L’Expérience <br />
                <span className="font-stadium font-extrabold uppercase tracking-tight text-white bg-gradient-to-r from-white via-gold-accent to-french-red bg-clip-text text-transparent">
                  La Torre
                </span>
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-gray-400">
                Garanta o melhor lugar para vibrar, saborear e viver as grandes emoções do futebol europeu e sul-americano.
              </p>
            </div>

            {/* Micro Highlights inside modal */}
            <div className="hidden md:flex flex-col gap-4 mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-gold-accent">
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-stadium font-medium text-gray-200">Sala Paris Exclusiva</h4>
                  <p className="text-[10px] text-gray-400">Com PS5 e som independente</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-french-red">
                  <Tv className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-stadium font-medium text-gray-200">Visão Panorâmica</h4>
                  <p className="text-[10px] text-gray-400">Mega painéis de LED 4K</p>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-gray-500 font-mono mt-6 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-accent" />
              <span>Reserva instantânea via WhatsApp</span>
            </div>
          </div>

          {/* Form Side */}
          <form onSubmit={handleBooking} className="p-6 md:col-span-7 bg-navy-deep/60 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-stadium font-bold text-lg text-white uppercase tracking-wider">
                Reservar Mesa / Evento
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-gold-accent/20 border-2 border-gold-accent flex items-center justify-center text-gold-accent">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="font-stadium text-xl font-bold text-white uppercase tracking-wider">
                  Mesa Solicitada!
                </h4>
                <p className="text-sm text-gray-300 px-6">
                  Redirecionando para o WhatsApp do La Torre para confirmar sua mesa...
                </p>
                <span className="text-xs font-mono text-gold-accent animate-pulse">
                  Abrindo chat em instantes...
                </span>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Cristian Toledo"
                    className="w-full px-3.5 py-2 font-sans text-sm rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">
                    WhatsApp para Contato
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: (41) 99999-9999"
                    className="w-full px-3.5 py-2 font-sans text-sm rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all"
                  />
                </div>

                {/* Grid Date, Time, Guests */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Date */}
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">
                      Data do Jogo
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-8 pr-2 py-2 font-sans text-xs rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold-accent transition-all"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">
                      Horário
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input
                        type="time"
                        required
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full pl-8 pr-2 py-2 font-sans text-xs rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold-accent transition-all"
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1 text-center">
                      Nº Integrantes
                    </label>
                    <div className="flex items-center justify-between border border-white/10 rounded-lg bg-white/5 h-9 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-8 h-full flex items-center justify-center font-bold text-gray-300 hover:bg-white/10 active:bg-gold-accent/20"
                      >
                        -
                      </button>
                      <span className="font-stadium text-sm font-bold text-white">
                        {guests}
                      </span>
                      <button
                        type="button"
                        onClick={() => setGuests(guests + 1)}
                        className="w-8 h-full flex items-center justify-center font-bold text-gray-300 hover:bg-white/10 active:bg-gold-accent/20"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Area Select */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                    Escolha o Setor do Bar
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {areas.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setArea(item.id)}
                        className={`p-2.5 rounded-lg border text-left transition-all flex flex-col h-20 justify-between ${
                          area === item.id
                            ? 'border-gold-accent bg-gold-accent/10 text-white shadow-lg shadow-gold-accent/5'
                            : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className={`text-[10px] uppercase font-mono tracking-widest font-bold ${
                            area === item.id ? 'text-gold-accent' : 'text-gray-400'
                          }`}>
                            {item.title}
                          </span>
                          <span className="text-[9px] text-gray-500 font-sans">{item.capacity}</span>
                        </div>
                        <span className="text-[10px] text-gray-400 line-clamp-2 leading-tight">
                          {item.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Event Type */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">
                    Objetivo do Encontro
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3 py-2 font-sans text-sm rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold-accent transition-all"
                  >
                    <option className="bg-navy-deep text-white" value="match">Assistir a uma Partida / Clássico</option>
                    <option className="bg-navy-deep text-white" value="anniversary">Aniversário no La Torre (Vantagens especiais)</option>
                    <option className="bg-navy-deep text-white" value="corporate">Confraternização / Corporativo</option>
                    <option className="bg-navy-deep text-white" value="meetup">Reunião de Amigos / Noite Noturna Premium</option>
                  </select>
                </div>

                {/* Custom Comments */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">
                    Pedidos Especiais (Opcional)
                  </label>
                  <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Ex: Gostaria de reservar para ver a final da Champions..."
                    rows={2}
                    className="w-full px-3 py-2 font-sans text-xs rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-gold-accent transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 font-stadium font-bold text-sm tracking-widest text-navy-deep uppercase rounded-lg bg-gradient-to-r from-gold-accent via-white to-gold-accent bg-size-200 hover:bg-right transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden group hover:scale-[1.01]"
                  >
                    <span>ENVIAR SOLICITAÇÃO</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
