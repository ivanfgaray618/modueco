import { Category } from './category';
import { Promo } from './promo';

export class Product {
  id: string;
  name: string;
  price: number;
  photos: string[];
  medidas: number[];
  weight: number;
  material: string;
  color: string[];
  category: Category;
  promo: Promo;
  discount: number;
}
