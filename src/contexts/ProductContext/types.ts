import { CategoryType, ProductType } from "../../models/product";

export interface initStateProducts {
  products: ProductType[];
  oneProduct: ProductType | null;
  product: ProductType | null;
  categories: CategoryType[];
  page: number;
  pageTotalCount: number;
}

export interface ProductContextTypes extends initStateProducts {
  getProducts: () => void;
  getCategories: () => void;
  addProduct: (newProduct: any) => void;
  deleteProduct: (id: number) => void;
  getOneProduct: (id: number) => void;
  editProduct: (id: number, newData: any) => void;
  setPage: (num: number) => void;
  // showOneProduct: (id: number) => void;
  getFilteredProducts: ({ category }: { category: string }) => void;
  likeProduct: (id: number) => void;
}

export type IInitState = {
  products: ProductType[];
  oneProduct: ProductType | null;
  pageTotalCount: number;
  categories: CategoryType;
};

interface ProductsAction {
  type: "products";
  payload: ProductType[];
}
interface OneProductAction {
  type: "oneProduct";
  payload: ProductType;
}
interface ProductAction {
  type: "product";
  payload: ProductType;
}
interface CategoriesAction {
  type: "categories";
  payload: CategoryType[];
}
interface PageTotalCountAction {
  type: "pageTotalCount";
  payload: number;
}
export type ProductContextActions =
  | ProductsAction
  | OneProductAction
  | ProductAction
  | PageTotalCountAction
  | CategoriesAction;

export interface ProductCreateType {
  title: string;
  description: string;
  price: string;
  image: File;
  category: number;
}
