export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  category: string;
  description: string;
  details: string[];
  sizes: string[];
  images: string[];
  featured: boolean;
  new: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface ProductData {
  products: Product[];
  categories: Category[];
}

