import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { CATEGORIES } from '../data/products';
import { CategoryItem } from '../types';

interface CategoriesSectionProps {
  onSelectCategory: (category: CategoryItem) => void;
  onViewAll: () => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  onViewAll
}) => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto" id="shop-categories-section">
      {/* Section Header matching reference */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
          Shop By Category
        </h2>

        <button
          onClick={onViewAll}
          id="view-all-categories-btn"
          className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/80 hover:text-white group transition-colors cursor-pointer"
        >
          <span>View All Categories</span>
          <div className="w-6 h-6 rounded-full bg-[#c8f53c] text-[#07110c] flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowRight size={13} className="stroke-[2.5]" />
          </div>
        </button>
      </div>

      {/* 5 Cards Row matching reference layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={() => onSelectCategory(category)}
            className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#13271c] to-[#0a150e] border border-white/5 hover:border-[#c8f53c]/40 p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-[#c8f53c]/10 flex flex-col justify-between"
          >
            {/* Image Container with rounded inner area */}
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#0a150e]/60 mb-3 sm:mb-4 relative flex items-center justify-center">
              <img
                src={category.image}
                alt={category.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a150e]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Label & Shop Now */}
            <div className="pt-1">
              <h3 className="text-white font-bold text-sm sm:text-base group-hover:text-[#c8f53c] transition-colors font-display">
                {category.name}
              </h3>
              <div className="flex items-center gap-1 text-xs text-white/55 group-hover:text-white mt-1 transition-colors">
                <span>{category.linkText}</span>
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1 stroke-[2]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
