import heroShoeImg from '../assets/images/hero_shoe_1789480682048.jpg';
import newArrivalShoeImg from '../assets/images/new_arrival_shoe_1789480694494.jpg';
import catRunnerImg from '../assets/images/cat_runner_1789480708233.jpg';
import catLowtopImg from '../assets/images/cat_lowtop_1789480720129.jpg';
import catHightopImg from '../assets/images/cat_hightop_1789480732999.jpg';
import catSliponImg from '../assets/images/cat_slipon_1789480746484.jpg';
import catSlideImg from '../assets/images/cat_slide_1789480765131.jpg';
import ultralightShoeImg from '../assets/images/ultralight_shoe_1789544342769.jpg';
import { CategoryItem, Product } from '../types';

export const ULTRALIGHT_PRODUCT: Product = {
  id: 'odda-aero-feather',
  name: 'ODDA Featherweight Zero',
  category: 'Ultra-Light Construction',
  tagline: 'Move Faster. Zero Fatigue.',
  price: 225,
  originalPrice: 260,
  image: ultralightShoeImg,
  colors: [
    { name: 'Dark Moss', hex: '#1c3123' },
    { name: 'Volt Lime', hex: '#c8f53c' },
    { name: 'Charcoal Stealth', hex: '#191b1a' }
  ],
  sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
  rating: 4.9,
  reviewsCount: 218,
  description: 'Precision engineered with a sub-160g featherlight matrix and carbon torsional arch. Maximizes velocity while eliminating foot fatigue across high-tempo strides.',
  features: [
    'Ultra-light 158g weight per shoe',
    'Laser-drilled aerodynamic ventilation lattice',
    'High-rebound micro-cellular foam chassis',
    'Multi-directional traction perimeter'
  ]
};

export const HERO_PRODUCT: Product = {
  id: 'odda-matrix-01',
  name: 'ODDA Matrix Aero 01',
  category: 'Next-Gen Footwear',
  tagline: 'Power Up Your World',
  price: 240,
  originalPrice: 280,
  image: heroShoeImg,
  colors: [
    { name: 'Forest Olive', hex: '#2c4331' },
    { name: 'Obsidian Black', hex: '#161817' },
    { name: 'Alabaster Stone', hex: '#dedbd2' },
    { name: 'Volt Lime', hex: '#c8f53c' }
  ],
  sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
  rating: 4.9,
  reviewsCount: 382,
  description: 'Sculpted for zero-drag motion. Crafted with sustainable plant-based mesh, carbon-fiber energy return shank, and responsive micro-cellular midsole.',
  features: [
    'Proprietary kinetic energy return sole',
    '3D seamless recycled knit upper',
    'Ortholite antimicrobial cushioned insole',
    'Water-resistant bio-coating'
  ]
};

export const NEW_ARRIVAL_PRODUCT: Product = {
  id: 'odda-lumen-pure',
  name: 'ODDA Pure Lumen Sculpt',
  category: 'Ultralight Minimalist',
  tagline: 'Small Size. Big Performance.',
  price: 195,
  originalPrice: 220,
  image: newArrivalShoeImg,
  colors: [
    { name: 'Pure Chalk', hex: '#f4f4f2' },
    { name: 'Muted Sage', hex: '#6b7f70' },
    { name: 'Deep Moss', hex: '#1c3123' }
  ],
  sizes: [7.5, 8, 9, 9.5, 10, 11],
  rating: 5.0,
  reviewsCount: 94,
  description: 'Featherlight architecture stripped of all unnecessary weight. Delivers instant rebound and plush all-day cadence.',
  features: [
    'Weighs only 185g per shoe',
    'Sculptural monolithic heel stability cradle',
    'Laser-perforated aeration channel'
  ]
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'runners',
    name: 'Runners',
    linkText: 'Shop Now',
    image: catRunnerImg,
    itemsCount: 14
  },
  {
    id: 'low-tops',
    name: 'Low-Tops',
    linkText: 'Shop Now',
    image: catLowtopImg,
    itemsCount: 22
  },
  {
    id: 'high-tops',
    name: 'High-Tops',
    linkText: 'Shop Now',
    image: catHightopImg,
    itemsCount: 9
  },
  {
    id: 'slip-ons',
    name: 'Slip-Ons',
    linkText: 'Shop Now',
    image: catSliponImg,
    itemsCount: 12
  },
  {
    id: 'mules-slides',
    name: 'Mules & Slides',
    linkText: 'Shop Now',
    image: catSlideImg,
    itemsCount: 8
  }
];
