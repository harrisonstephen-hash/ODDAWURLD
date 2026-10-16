import { ArrowRight, Check, Heart, Shield, Sparkles, X } from 'lucide-react';
import React, { useState } from 'react';
import { CartDrawer } from './components/CartDrawer';
import { CategoriesSection } from './components/CategoriesSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { NewArrivalBanner } from './components/NewArrivalBanner';
import { ProductModal } from './components/ProductModal';
import { UltraLightSection } from './components/UltraLightSection';
import { VideoModal } from './components/VideoModal';
import { CATEGORIES, HERO_PRODUCT, NEW_ARRIVAL_PRODUCT } from './data/products';
import { CartItem, CategoryItem, Product } from './types';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: HERO_PRODUCT,
      selectedSize: 9.5,
      selectedColor: 'Forest Olive',
      quantity: 1
    }
  ]);
  const [wishlist, setWishlist] = useState<string[]>(['odda-matrix-01']);
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (product: Product, size: number, color: string) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.selectedSize === size && i.selectedColor === color
      );
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, selectedSize: size, selectedColor: color, quantity: 1 }];
    });
    showToast(`Added ${product.name} (Size ${size}) to bag`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from bag');
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      if (prev.includes(product.id)) {
        showToast(`Removed from saved items`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved ${product.name} to wishlist`);
        return [...prev, product.id];
      }
    });
  };

  const handleCategorySelect = (category: CategoryItem) => {
    setSelectedCategoryFilter(category.name);
    // Open product modal for this category's featured design
    setActiveProductModal({
      id: `cat-${category.id}`,
      name: `ODDA ${category.name} Edition`,
      category: category.name,
      tagline: 'Precision Crafted Minimalist Footwear',
      price: 210,
      originalPrice: 245,
      image: category.image,
      colors: [
        { name: 'Dark Moss', hex: '#1c3123' },
        { name: 'Charcoal', hex: '#222524' },
        { name: 'Pure Chalk', hex: '#ededeb' }
      ],
      sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11],
      rating: 4.8,
      reviewsCount: 120,
      description: `Sculpted specifically for the ${category.name.toLowerCase()} category with minimalist contours, ergonomic flex grooves, and ultra-breathable architecture.`,
      features: [
        'Anatomical arch support matrix',
        'Featherweight sustainable sole compound',
        'Seamless comfort knit liner'
      ]
    });
  };

  const handleShopNowScroll = () => {
    const el = document.getElementById('shop-categories-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#07110c] text-white flex flex-col selection:bg-[#c8f53c] selection:text-black font-sans relative">
      {/* Subtle background gradient texture */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(32,77,48,0.3),rgba(7,17,12,0))]" />

      {/* Floating Header & Brand Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => {
          showToast(`${wishlist.length} items saved in your wishlist`);
        }}
        activeNav={activeNav}
        setActiveNav={(nav) => {
          setActiveNav(nav);
          if (nav === 'Shop' || nav === 'Collections') {
            handleShopNowScroll();
          } else if (nav === 'New Arrivals') {
            const el = document.getElementById('new-arrival-shop-btn');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Main Hero Section matching reference */}
      <main className="flex-1 z-10">
        <HeroSection
          onShopNow={handleShopNowScroll}
          onPlayVideo={() => setIsVideoModalOpen(true)}
          onOpenProductModal={(p) => setActiveProductModal(p)}
        />

        {/* Second Section: Ultra-Light Construction */}
        <UltraLightSection
          onOpenProductModal={(p) => setActiveProductModal(p)}
          onShopNow={handleShopNowScroll}
        />

        {/* Shop By Category Section */}
        <CategoriesSection
          onSelectCategory={handleCategorySelect}
          onViewAll={handleShopNowScroll}
        />

        {/* New Arrival Banner Section */}
        <NewArrivalBanner
          onShopNow={(p) => setActiveProductModal(p)}
        />
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 mt-12 bg-[#050d09] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-white tracking-[0.2em] uppercase font-display text-sm">
              ODDAWURLD
            </span>
            <span className="text-white/30">•</span>
            <span>Minimalist Footwear Architecture</span>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => showToast('Free express shipping on all orders over $50')}
              className="hover:text-white transition-colors"
            >
              Shipping Policy
            </button>
            <button
              onClick={() => showToast('30-day hassle-free return guarantee')}
              className="hover:text-white transition-colors"
            >
              Returns
            </button>
            <button
              onClick={() => showToast('Handcrafted with recycled bio-polymers')}
              className="hover:text-white transition-colors"
            >
              Sustainability
            </button>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      <ProductModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={activeProductModal ? wishlist.includes(activeProductModal.id) : false}
      />

      {/* Video Reel Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          showToast('Checkout flow initialized. Thank you for your order!');
          setCartItems([]);
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12281c] border border-[#c8f53c]/40 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-5 h-5 rounded-full bg-[#c8f53c] text-black flex items-center justify-center">
            <Check size={12} className="stroke-[3]" />
          </div>
          <span className="text-xs font-semibold">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-white/40 hover:text-white ml-2"
          >
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
