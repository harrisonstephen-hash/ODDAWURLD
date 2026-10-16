import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { NEW_ARRIVAL_PRODUCT } from '../data/products';
import { Product } from '../types';

interface NewArrivalBannerProps {
  onShopNow: (product: Product) => void;
}

export const NewArrivalBanner: React.FC<NewArrivalBannerProps> = ({ onShopNow }) => {
  return (
    <section className="py-8 sm:py-14 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#102419] via-[#0d1d14] to-[#08130c] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl">
        {/* Subtle ambient light background */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#c8f53c]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#1f472e]/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: All-White Shoe on Pedestal (matching AirPods in reference) */}
          <div className="md:col-span-6 lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[360px] aspect-square rounded-2xl overflow-hidden bg-[#0a150e]/60 border border-white/10 shadow-2xl group"
            >
              {/* Pedestal Halo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-56 h-56 rounded-full border border-[#c8f53c]/20 animate-pulse" />
              </div>

              <img
                src={NEW_ARRIVAL_PRODUCT.image}
                alt={NEW_ARRIVAL_PRODUCT.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute top-3 left-3 bg-[#0a160f]/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[10px] font-bold text-[#c8f53c] uppercase tracking-wider flex items-center gap-1">
                <Sparkles size={10} />
                <span>Zero Gravity 185g</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Copy & CTA matching reference */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col items-start md:pl-6 lg:pl-10">
            {/* Eyebrow */}
            <span className="text-[#c8f53c] text-xs sm:text-sm font-extrabold tracking-[0.28em] uppercase mb-3">
              NEW ARRIVAL
            </span>

            {/* Headline matching "Small Size. / Big Performance." */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 font-display">
              Small Size. <br />
              <span>Big </span>
              <span className="font-script text-[#c8f53c] text-5xl sm:text-6xl lg:text-7xl font-normal relative inline-block -rotate-2 ml-1 drop-shadow-[0_4px_20px_rgba(200,245,60,0.3)]">
                Performance.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-white/70 text-base sm:text-lg mb-8 max-w-md font-normal leading-relaxed">
              Experience comfort like never before.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => onShopNow(NEW_ARRIVAL_PRODUCT)}
              id="new-arrival-shop-btn"
              className="bg-[#c8f53c] hover:bg-[#d8ff44] text-[#07110c] font-black text-xs sm:text-sm tracking-wider px-8 py-3.5 rounded-full flex items-center gap-3 transition-all duration-200 shadow-xl shadow-[#c8f53c]/20 hover:scale-[1.02] active:scale-95 group uppercase"
            >
              <span>SHOP NOW</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
