import { ICartProduct } from "../../models/cart";
import { ProductType } from "../../models/product";

export interface ISave {
  products: ICartProduct[];
}

export interface ISaveContextTypes {
  save: ISave;
  comments: ISave;
  newComment: string;
  showComment: string;
  setNewComment: (comment: string) => void;
  showOneComment: (id: number) => void;
  getSave: () => void;
  getComment: () => void;
  addProductToSave: (product: ProductType) => void;
  isAlreadyInSave: (id: number) => boolean;
  deleteProductFromSave: (id: number) => void;
  addProductToComment: (product: ProductType) => void;
}
