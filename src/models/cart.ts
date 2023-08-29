import { ProductType } from "./product";

export interface ICartProduct extends ProductType {
  comment: string;
}

export interface ICartProductss extends ProductType {
  count: number;
  subPrice: number;
}
