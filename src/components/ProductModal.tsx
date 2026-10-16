import { Check, Heart, ShieldCheck, ShoppingBag, Sparkles, Star, Truck, X } from 'lucide-react';
import React, { useState } from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: number, color: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Default');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-[#0c1a12] border border-white/10 shadow-2xl overflow-hidden text-white flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-black/60 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Left: Product Image & Pedestal atmosphere */}
        <div className="md:w-1/2 relative bg-gradient-to-b from-[#13281c] to-[#0a150e] p-6 flex flex-col items-center justify-center">
          <div className="w-full aspect-square rounded-2xl overflow-hidden relative shadow-xl border border-white/5">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
            <Sparkles size={14} className="text-[#c8f53c]" />
            <span>Sustainable Bio-engineered Architecture</span>
          </div>
        </div>

        {/* Right: Product Details & Controls */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c8f53c]">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold">
                <Star size={13} className="fill-current" />
                <span>{product.rating}</span>
                <span className="text-white/40">({product.reviewsCount})</span>
              </div>
            </div>

            <h3 className="text-2xl font-black tracking-tight text-white mb-2 font-display">
              {product.name}
            </h3>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-2xl font-extrabold text-[#c8f53c] font-display">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm line-through text-white/40">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Color selection */}
            <div className="mb-5">
              <label className="text-xs font-semibold text-white/70 block mb-2">
                Colorway: <span className="text-white">{selectedColor}</span>
              </label>
              <div className="flex items-center gap-2.5">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-7 h-7 rounded-full transition-all flex items-center justify-center ${
                      selectedColor === c.name
                        ? 'ring-2 ring-[#c8f53c] scale-110'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {selectedColor === c.name && (
                      <Check size={12} className="text-white stroke-[3]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div className="mb-6">
              <label className="text-xs font-semibold text-white/70 block mb-2">
                Select US Size:
              </label>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-1.5 text-xs font-bold rounded-lg border transition-all ${
                      selectedSize === size
                        ? 'bg-[#c8f53c] text-black border-[#c8f53c]'
                        : 'bg-white/5 border-white/10 text-white/80 hover:border-white/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-3">
            <button
              onClick={handleAdd}
              id="modal-add-to-cart-btn"
              className="flex-1 bg-[#c8f53c] hover:bg-[#d9ff45] text-[#07110c] font-black text-xs sm:text-sm tracking-wider py-3.5 px-5 rounded-full flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-[#c8f53c]/20 uppercase"
            >
              <ShoppingBag size={16} />
              <span>{addedAnimation ? 'Added to Bag!' : 'Add to Bag'}</span>
            </button>

            <button
              onClick={() => onToggleWishlist(product)}
              className={`p-3.5 rounded-full border transition-colors ${
                isWishlisted
                  ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                  : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
              }`}
              aria-label="Wishlist"
            >
              <Heart size={18} className={isWishlisted ? 'fill-current' : ''} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
