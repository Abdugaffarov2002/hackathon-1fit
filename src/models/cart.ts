import { ProductType } from "./product";

export interface ICartProduct extends ProductType {
  count: number;
  subPrice: string;
}
