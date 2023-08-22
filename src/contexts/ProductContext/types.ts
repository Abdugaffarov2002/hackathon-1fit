import { CategoryType, ProductType } from "../../models/product";

export interface initStateProducts {
  products: ProductType[];
  oneProduct: ProductType | null;
  categories: CategoryType[];
}

export interface ProductContextTypes extends initStateProducts {
  getProducts: () => void;
  getCategories: () => void;
  addProduct: (newProduct: any) => void;
  deleteProduct: (id: number) => void;
  getOneProduct: (id: number) => void;
  editProduct: (id: number, newData: any) => void;
}

interface ProductsAction {
  type: "products";
  payload: ProductType[];
}
interface OneProductAction {
  type: "oneProduct";
  payload: ProductType;
}
interface CategoriesAction {
  type: "categories";
  payload: CategoryType[];
}
export type ProductContextActions =
  | ProductsAction
  | OneProductAction
  | CategoriesAction;

export interface ProductCreateType {
  title: string;
  description: string;
  price: string;
  image: File;
  category: number;
}
