import { Heart, Home, Menu, ShoppingBag, User, X } from 'lucide-react';
import React, { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  activeNav,
  setActiveNav
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', hasIcon: true },
    { name: 'Shop' },
    { name: 'New Arrivals' },
    { name: 'Collections' },
    { name: 'About' },
    { name: 'Contact' }
  ];

  return (
    <header className="relative z-30 pt-6 sm:pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col items-center">
      {/* Brand Name exactly centered at top */}
      <div className="w-full flex items-center justify-between sm:justify-center relative mb-4 sm:mb-5">
        <button
          onClick={() => setActiveNav('Home')}
          className="text-2xl sm:text-3xl font-extrabold tracking-[0.28em] text-white transition-opacity hover:opacity-90 uppercase font-display"
          id="brand-logo-btn"
        >
          ODDAWURLD
        </button>

        {/* Mobile quick actions */}
        <div className="flex items-center gap-3 sm:hidden">
          <button
            onClick={onOpenCart}
            className="relative p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c8f53c] text-black text-[10px] font-extrabold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Floating Pill Navbar & Action Icons container */}
      <div className="w-full flex items-center justify-between">
        {/* Empty left spacer to balance desktop right icons */}
        <div className="hidden lg:block w-32" />

        {/* Center Floating Pill Navbar */}
        <nav
          className="hidden sm:flex items-center bg-[#102218]/90 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1.5 shadow-2xl shadow-black/40"
          id="primary-pill-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeNav === link.name;
            return (
              <button
                key={link.name}
                onClick={() => setActiveNav(link.name)}
                className={`text-xs md:text-sm transition-all duration-200 rounded-full flex items-center gap-1.5 px-4 py-2 font-medium ${
                  isActive
                    ? 'bg-[#1b3a27] text-white shadow-inner font-semibold border border-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.hasIcon && <Home size={14} className="stroke-[2.2]" />}
                <span>{link.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Right side Icon buttons */}
        <div className="hidden sm:flex items-center gap-4 lg:w-32 justify-end">
          {/* Cart with green badge */}
          <button
            onClick={onOpenCart}
            id="nav-cart-btn"
            className="relative p-2 text-white/80 hover:text-white transition-colors duration-200 hover:scale-105 active:scale-95"
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={21} className="stroke-[1.75]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c8f53c] text-[#07110c] text-[10px] font-black rounded-full flex items-center justify-center shadow-sm">
              {cartCount}
            </span>
          </button>

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            id="nav-wishlist-btn"
            className="relative p-2 text-white/80 hover:text-white transition-colors duration-200 hover:scale-105 active:scale-95"
            aria-label="Saved Items"
          >
            <Heart size={21} className="stroke-[1.75]" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c8f53c] text-[#07110c] text-[10px] font-black rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* User Profile */}
          <button
            id="nav-user-btn"
            className="p-2 text-white/80 hover:text-white transition-colors duration-200 hover:scale-105 active:scale-95"
            aria-label="User Account"
          >
            <User size={21} className="stroke-[1.75]" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden w-full mt-3 bg-[#102218] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setActiveNav(link.name);
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-left text-sm ${
                activeNav === link.name
                  ? 'bg-[#1b3a27] text-white font-semibold'
                  : 'text-white/70 hover:bg-white/5'
              }`}
            >
              {link.hasIcon && <Home size={16} />}
              {link.name}
            </button>
          ))}
          <div className="border-t border-white/10 pt-3 mt-1 flex items-center justify-around">
            <button
              onClick={() => {
                onOpenCart();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm text-white/80"
            >
              <ShoppingBag size={18} /> Cart ({cartCount})
            </button>
            <button
              onClick={() => {
                onOpenWishlist();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm text-white/80"
            >
              <Heart size={18} /> Wishlist ({wishlistCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
