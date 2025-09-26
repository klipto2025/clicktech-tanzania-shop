import hpImage from '@/assets/hp-250-g8.jpg';
import dellImage from '@/assets/dell-inspiron-3511.jpg';
import lenovoImage from '@/assets/lenovo-ideapad-3.jpg';
import customDesktopImage from '@/assets/custom-desktop.jpg';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'laptop' | 'desktop' | 'accessory';
  price: number;
  currency: string;
  specifications: {
    processor?: string;
    ram?: string;
    storage?: string;
    display?: string;
    graphics?: string;
    os?: string;
  };
  warranty: string;
  image: string;
  description: string;
  inStock: boolean;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 'hp-250-g8',
    name: 'HP 250 G8 Laptop',
    brand: 'HP',
    category: 'laptop',
    price: 1850000,
    currency: 'TZS',
    specifications: {
      processor: 'Intel Core i5',
      ram: '8GB',
      storage: '512GB SSD',
      display: '15.6" Full HD',
      os: 'Windows 11 Pro'
    },
    warranty: '1 Year',
    image: hpImage,
    description: 'Professional business laptop perfect for office work and productivity tasks. Reliable performance with modern features.',
    inStock: true,
    featured: true
  },
  {
    id: 'dell-inspiron-3511',
    name: 'Dell Inspiron 3511',
    brand: 'Dell',
    category: 'laptop',
    price: 2900000,
    currency: 'TZS',
    specifications: {
      processor: 'Intel Core i7',
      ram: '16GB',
      storage: '1TB SSD',
      display: '15.6" FHD',
      graphics: 'Intel Iris Graphics',
      os: 'Windows 11 Pro'
    },
    warranty: '1 Year',
    image: dellImage,
    description: 'High-performance laptop with premium build quality. Ideal for demanding applications and multitasking.',
    inStock: true,
    featured: true
  },
  {
    id: 'lenovo-ideapad-3',
    name: 'Lenovo IdeaPad 3',
    brand: 'Lenovo',
    category: 'laptop',
    price: 1600000,
    currency: 'TZS',
    specifications: {
      processor: 'AMD Ryzen 5',
      ram: '8GB',
      storage: '512GB SSD',
      display: '14" HD',
      graphics: 'Radeon Graphics',
      os: 'Windows 11 Home'
    },
    warranty: '1 Year',
    image: lenovoImage,
    description: 'Compact and efficient laptop with AMD Ryzen performance. Great value for students and professionals.',
    inStock: true,
    featured: true
  },
  {
    id: 'custom-desktop',
    name: 'Custom-Built Desktop PC',
    brand: 'Custom Build',
    category: 'desktop',
    price: 3500000,
    currency: 'TZS',
    specifications: {
      processor: 'Intel Core i7 / AMD Ryzen 7',
      ram: '16GB',
      storage: '1TB SSD + 2TB HDD',
      graphics: 'NVIDIA GeForce RTX 3060'
    },
    warranty: '1 Year',
    image: customDesktopImage,
    description: 'Powerful custom-built desktop perfect for business applications and gaming. Premium components with excellent performance.',
    inStock: true,
    featured: true
  }
];

export const formatPrice = (price: number, currency: string = 'TZS'): string => {
  return `${currency} ${price.toLocaleString()}`;
};