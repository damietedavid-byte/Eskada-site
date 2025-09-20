export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

export enum ProductCategory {
  FISH = 'Fish',
  PALM_OIL = 'Palm Oil',
  FRUITS = 'Fruits',
  VEGETABLES = 'Vegetables',
}

export enum BuyerType {
  CONSUMER = 'Consumer',
  INDUSTRIAL = 'Industrial',
}

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  buyerTypes: BuyerType[];
  description: string;
  imageUrl: string;
  priceRetail: string;
  priceWholesale: string;
}

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  snippet: string;
  imageUrl: string;
}
