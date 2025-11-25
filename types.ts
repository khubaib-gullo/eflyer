export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: 'fashion' | 'electronics' | 'jewellery';
  isNew?: boolean;
  onSale?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum ViewState {
  HOME,
  PRODUCTS,
  DETAILS
}