import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#09150e] border-l border-white/10 text-white flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#0e2116]">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-[#c8f53c]" />
              <h2 className="text-lg font-bold font-display tracking-tight">
                Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 text-white/50 space-y-3">
                <ShoppingBag size={42} className="mx-auto text-white/20" />
                <p className="text-sm font-medium">Your bag is currently empty.</p>
                <p className="text-xs text-white/40">
                  Select a minimalist silhouette from our collection.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="p-3.5 rounded-2xl bg-[#11241a] border border-white/5 flex gap-4 items-center"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-18 h-18 rounded-xl object-cover bg-black/30 border border-white/5"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate font-display">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      Size: {item.selectedSize} • {item.selectedColor}
                    </p>
                    <p className="text-sm font-extrabold text-[#c8f53c] mt-1">
                      ${item.product.price}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-white/40 hover:text-rose-400 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>

                    <div className="flex items-center gap-2 bg-black/40 px-2 py-1 rounded-full border border-white/10 text-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="text-white/60 hover:text-white"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-bold w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="text-white/60 hover:text-white"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#0e2116] space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70">Subtotal</span>
                <span className="text-lg font-black text-white font-display">
                  ${subtotal}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-white/50">
                <span>Shipping</span>
                <span className="text-[#c8f53c] font-bold">FREE</span>
              </div>

              <button
                onClick={onCheckout}
                id="cart-checkout-btn"
                className="w-full bg-[#c8f53c] hover:bg-[#d8ff44] text-[#07110c] font-black text-xs sm:text-sm tracking-wider py-3.5 rounded-full flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#c8f53c]/20 uppercase active:scale-95"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight size={16} className="stroke-[2.5]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
