import type { Rating } from './rating.model';
import type { Url } from './url.model';

export type Product = {
  category: string;
  description: string;
  id: number;
  image: Url;
  price: number;

  title: string;
};
