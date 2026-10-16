export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: { name: string; hex: string }[];
  sizes: number[];
  rating: number;
  reviewsCount: number;
  description: string;
  features: string[];
}

export interface CategoryItem {
  id: string;
  name: string;
  linkText: string;
  image: string;
  itemsCount: number;
}

export interface CartItem {
  product: Product;
  selectedSize: number;
  selectedColor: string;
  quantity: number;
}
