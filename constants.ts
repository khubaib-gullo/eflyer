import { Product } from './types';

export const HERO_SLIDES = [
  {
    id: 1,
    title: "GET START",
    subtitle: "YOUR FAVORITE SHOPPING",
    description: "Experience the future of shopping with our AI-powered stylist. Find exactly what you need in seconds.",
    bgImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "NEW ARRIVALS",
    subtitle: "SUMMER COLLECTION",
    description: "Discover the latest trends in fashion tailored just for you.",
    bgImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Man T-Shirt",
    price: 30.00,
    oldPrice: 40.00,
    category: 'fashion',
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60",
    isNew: true
  },
  {
    id: 2,
    title: "Woman Scarf",
    price: 25.00,
    category: 'fashion',
    image: "https://images.unsplash.com/photo-1520975661595-dc998dd82143?w=500&auto=format&fit=crop&q=60",
    onSale: true
  },
  {
    id: 3,
    title: "Blue Dress",
    price: 45.00,
    oldPrice: 60.00,
    category: 'fashion',
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Smart Watch",
    price: 150.00,
    category: 'electronics',
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
    isNew: true
  },
  {
    id: 5,
    title: "Headphones",
    price: 89.00,
    oldPrice: 120.00,
    category: 'electronics',
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Laptop Pro",
    price: 999.00,
    category: 'electronics',
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    title: "Gold Necklace",
    price: 299.00,
    category: 'jewellery',
    image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    title: "Diamond Ring",
    price: 599.00,
    category: 'jewellery',
    image: "https://images.unsplash.com/photo-1605100804763-eb2fc9f3a36c?w=500&auto=format&fit=crop&q=60"
  }
];
