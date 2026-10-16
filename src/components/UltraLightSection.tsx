import { ArrowRight, Feather, Gauge, Sparkles, Wind, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { ULTRALIGHT_PRODUCT } from '../data/products';
import { Product } from '../types';

interface UltraLightSectionProps {
  onOpenProductModal: (product: Product) => void;
  onShopNow: () => void;
}

export const UltraLightSection: React.FC<UltraLightSectionProps> = ({
  onOpenProductModal,
  onShopNow
}) => {
  const metrics = [
    {
      icon: Feather,
      value: '158g',
      label: 'Featherweight Shell'
    },
    {
      icon: Wind,
      value: '-38%',
      label: 'Stride Fatigue'
    },
    {
      icon: Zap,
      value: '88%',
      label: 'Energy Return'
    }
  ];

  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden" id="ultralight-section">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-[#c8f53c]/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#1a432b]/35 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Visual Space */}
        <div className="lg:col-span-6 relative flex items-center justify-center order-2 lg:order-1">
          {/* Halo Ring & Ambient Backlight */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full border border-[#c8f53c]/25 shadow-[0_0_90px_rgba(200,245,60,0.12)] animate-pulse" />
            <div className="absolute w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] rounded-full border border-white/10" />
            <div className="absolute w-64 h-64 rounded-full bg-radial from-[#c8f53c]/20 via-[#1f472e]/30 to-transparent blur-2xl" />
          </div>

          {/* Floating Shoe Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative w-full max-w-[500px] group cursor-pointer"
            onClick={() => onOpenProductModal(ULTRALIGHT_PRODUCT)}
          >
            {/* Main Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#12271b] via-[#0d1d14] to-[#07110c] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.75)] transition-all duration-500 group-hover:border-[#c8f53c]/40 group-hover:shadow-[#c8f53c]/15">
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07110c] via-transparent to-transparent opacity-50 z-10 pointer-events-none" />

              {/* Floating animation container */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={ULTRALIGHT_PRODUCT.image}
                  alt={ULTRALIGHT_PRODUCT.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Bottom Specs Floating Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 sm:p-4 rounded-2xl bg-[#09150e]/90 backdrop-blur-md border border-white/10 shadow-xl">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#c8f53c] uppercase tracking-wider">
                    <Sparkles size={12} />
                    <span>Weightless Zero-Drop Matrix</span>
                  </div>
                  <h4 className="text-white font-bold text-sm sm:text-base mt-0.5 font-display">
                    {ULTRALIGHT_PRODUCT.name}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-extrabold text-[#c8f53c] font-display">
                    ${ULTRALIGHT_PRODUCT.price}
                  </span>
                  <span className="text-[11px] bg-white/10 text-white font-semibold px-2.5 py-1 rounded-full group-hover:bg-[#c8f53c] group-hover:text-black transition-colors">
                    Inspect
                  </span>
                </div>
              </div>
            </div>

            {/* Float badge top-left */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-[#112419] border border-[#c8f53c]/40 text-[#c8f53c] px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase shadow-xl flex items-center gap-2 z-20">
              <Feather size={13} />
              <span>SUB-160G ULTRA-LIGHT</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Content Aligned to the Right Side */}
        <div className="lg:col-span-6 flex flex-col items-start z-10 order-1 lg:order-2 lg:pl-6">
          {/* Eyebrow with horizontal line matching brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-5 sm:mb-6"
          >
            <span className="text-[#c8f53c] text-xs sm:text-sm font-extrabold tracking-[0.28em] uppercase">
              AERODYNAMIC ARCHITECTURE
            </span>
            <span className="h-[1.5px] w-14 sm:w-20 bg-[#c8f53c]/50 inline-block" />
          </motion.div>

          {/* Headline: ultra-light construction */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.06] mb-5 font-display capitalize"
          >
            ultra-light <br />
            <span className="font-script text-[#c8f53c] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal relative inline-block -rotate-2 ml-1 tracking-normal drop-shadow-[0_4px_24px_rgba(200,245,60,0.35)]">
              construction.
            </span>
          </motion.h2>

          {/* Subtext: move faster with a lightweight design that reduces fatigue and maximizes agility. */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/75 text-base sm:text-lg font-normal mb-8 sm:mb-10 max-w-lg leading-relaxed"
          >
            move faster with a lightweight design that reduces fatigue and maximizes agility.
          </motion.p>

          {/* Key Performance Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-3 sm:gap-4 w-full mb-8 sm:mb-10"
          >
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0f2217]/70 border border-white/10 p-3.5 sm:p-4 flex flex-col items-start backdrop-blur-sm"
                >
                  <div className="p-1.5 rounded-lg bg-[#c8f53c]/10 text-[#c8f53c] mb-2">
                    <Icon size={16} className="stroke-[2.2]" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-white font-display tracking-tight">
                    {m.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-white/55 font-medium mt-0.5 leading-tight">
                    {m.label}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* Primary Shop/Explore Button */}
            <button
              onClick={() => onOpenProductModal(ULTRALIGHT_PRODUCT)}
              id="ultralight-explore-btn"
              className="bg-[#c8f53c] hover:bg-[#d8ff44] text-[#07110c] font-black text-xs sm:text-sm tracking-wider px-8 py-3.5 rounded-full flex items-center gap-3 transition-all duration-200 shadow-xl shadow-[#c8f53c]/25 hover:shadow-[#c8f53c]/40 hover:scale-[1.02] active:scale-95 group uppercase"
            >
              <span>EXPLORE DESIGN</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1 stroke-[2.5]" />
            </button>

            {/* Quick action to browse categories */}
            <button
              onClick={onShopNow}
              className="text-xs sm:text-sm font-bold text-white/70 hover:text-white transition-colors flex items-center gap-2 group px-4 py-3"
            >
              <span>View All Silhouettes</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 text-[#c8f53c]" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
