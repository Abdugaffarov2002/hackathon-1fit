import { ICartProduct, ICartProductss } from "../../models/cart";
import { ProductType } from "../../models/product";

export interface ICart {
  products: ICartProductss[];
  totalPrice: number;
}

export interface ICartContextTypes {
  cart: ICart;
  getCart: () => void;
  addProductToCart: (product: ProductType) => void;
  deleteProductFromCart: (id: number) => void;
  isAlreadyInCart: (id: number) => boolean;
  increaseCount: (id: number) => void;
  decreaseCount: (id: number) => void;
  clearCart: () => void;
}
