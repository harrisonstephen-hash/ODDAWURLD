import { ArrowRight, CheckCircle2, Leaf, Lock, Play, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';
import { HERO_PRODUCT } from '../data/products';
import { Product } from '../types';

interface HeroSectionProps {
  onShopNow: () => void;
  onPlayVideo: () => void;
  onOpenProductModal: (product: Product) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopNow,
  onPlayVideo,
  onOpenProductModal
}) => {
  const [activeColorIdx, setActiveColorIdx] = useState(0);

  const perks = [
    {
      icon: Leaf,
      line1: 'Premium',
      line2: 'Quality'
    },
    {
      icon: ShieldCheck,
      line1: '1 Year',
      line2: 'Warranty'
    },
    {
      icon: Truck,
      line1: 'Free Shipping',
      line2: 'On Orders $50+'
    },
    {
      icon: Lock,
      line1: 'Secure',
      line2: 'Payments'
    }
  ];

  return (
    <section className="relative pt-4 sm:pt-8 pb-14 sm:pb-20 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting matches reference */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c8f53c]/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#1a422b]/40 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          {/* Eyebrow with horizontal line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-5 sm:mb-6"
          >
            <span className="text-[#c8f53c] text-xs sm:text-sm font-extrabold tracking-[0.28em] uppercase">
              NEXT-GEN FOOTWEAR
            </span>
            <span className="h-[1.5px] w-14 sm:w-20 bg-[#c8f53c]/50 inline-block" />
          </motion.div>

          {/* Headline: "Power Up Your World." */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tight leading-[1.04] mb-5 font-display"
          >
            Power Up <br />
            <span className="inline-block text-white">Your </span>
            <span className="font-script text-[#c8f53c] text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-normal relative inline-block -rotate-3 ml-2 sm:ml-3 tracking-normal drop-shadow-[0_4px_24px_rgba(200,245,60,0.35)]">
              World.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/75 text-base sm:text-lg font-normal mb-8 sm:mb-10 max-w-md leading-relaxed"
          >
            <p className="font-medium text-white/90">Smart. Sleek. Reliable.</p>
            <p className="text-white/65">Silhouettes that keep you ahead.</p>
          </motion.div>

          {/* CTAs Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 sm:gap-8 mb-12 sm:mb-16 w-full"
          >
            {/* Primary Shop Now Button */}
            <button
              onClick={onShopNow}
              id="hero-shop-now-btn"
              className="bg-[#c8f53c] hover:bg-[#d8ff44] text-[#07110c] font-black text-xs sm:text-sm tracking-wider px-8 py-3.5 rounded-full flex items-center gap-3 transition-all duration-200 shadow-xl shadow-[#c8f53c]/25 hover:shadow-[#c8f53c]/40 hover:scale-[1.02] active:scale-95 group uppercase"
            >
              <span>SHOP NOW</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1 stroke-[2.5]" />
            </button>

            {/* Watch Collection Play Button */}
            <button
              onClick={onPlayVideo}
              id="hero-watch-collection-btn"
              className="flex items-center gap-3.5 group text-left cursor-pointer active:scale-95 transition-transform"
            >
              <div className="w-11 h-11 rounded-full bg-white text-[#07110c] flex items-center justify-center shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-200">
                <Play size={16} className="fill-current translate-x-0.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm tracking-wide group-hover:text-[#c8f53c] transition-colors">
                  Watch Collection
                </span>
                <span className="text-white/50 text-xs font-medium">
                  Play video
                </span>
              </div>
            </button>
          </motion.div>

          {/* Feature Badges Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 pt-6 border-t border-white/10 w-full"
          >
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-white/80 p-1.5 rounded-lg bg-white/5 border border-white/5">
                    <Icon size={18} className="stroke-[1.75]" />
                  </div>
                  <div className="text-xs leading-tight">
                    <p className="text-white font-semibold">{perk.line1}</p>
                    <p className="text-white/55">{perk.line2}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Column: Hero Showcase Visual */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          {/* Circular Rim Halo light effect behind shoe */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer halo ring */}
            <div className="w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full border border-[#c8f53c]/30 shadow-[0_0_80px_rgba(200,245,60,0.15)] animate-pulse" />
            {/* Mid ring */}
            <div className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full border border-white/10" />
            {/* Core glowing orb */}
            <div className="absolute w-72 h-72 rounded-full bg-radial from-[#c8f53c]/25 via-[#234d31]/40 to-transparent blur-2xl" />
          </div>

          {/* Main Hero Showcase Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-[540px] group"
          >
            {/* Ambient image frame with dark rounded container */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#112419] to-[#08130c] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
              {/* Overlay shadow patterns */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07110c] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

              <img
                src={HERO_PRODUCT.image}
                alt={HERO_PRODUCT.name}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating product info card */}
              <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between p-3 sm:p-4 rounded-2xl bg-[#0a160f]/85 backdrop-blur-md border border-white/10 shadow-xl">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#c8f53c] animate-ping" />
                    <span className="text-[11px] uppercase tracking-wider text-[#c8f53c] font-bold">
                      Limited Edition
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base mt-0.5 font-display">
                    {HERO_PRODUCT.name}
                  </h3>
                  <p className="text-white/60 text-xs mt-0.5">
                    Minimalist Aero Silhouette • <span className="text-[#c8f53c] font-bold">${HERO_PRODUCT.price}</span>
                  </p>
                </div>

                {/* Color swatches & Quick Inspect */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-black/40 p-1.5 rounded-full border border-white/10">
                    {HERO_PRODUCT.colors.map((c, idx) => (
                      <button
                        key={c.name}
                        onClick={() => setActiveColorIdx(idx)}
                        title={c.name}
                        className={`w-3.5 h-3.5 rounded-full transition-transform ${
                          activeColorIdx === idx ? 'scale-125 ring-2 ring-[#c8f53c]' : 'opacity-80 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        aria-label={c.name}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenProductModal(HERO_PRODUCT)}
                    className="text-xs bg-[#c8f53c] text-black font-bold px-3 py-1.5 rounded-full hover:bg-white transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>

            {/* Subtle decorative glowing badge */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-[#14291c] border border-[#c8f53c]/40 text-[#c8f53c] px-3 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase shadow-xl flex items-center gap-1.5 z-20">
              <Sparkles size={12} />
              <span>2026 ARCHIVE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
