import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import {
  ProductContextActions,
  ProductContextTypes,
  initStateProducts,
} from "./types";
import $axios from "../../utils/axios";
import { API_BACKEND } from "../../utils/consts";

const productContext = createContext<ProductContextTypes | null>(null);

export function useProductContext(): ProductContextTypes {
  return useContext(productContext) as ProductContextTypes;
}

const initState: initStateProducts = {
  products: [],
  oneProduct: null,
  categories: [],
};

function reducer(state: initStateProducts, action: ProductContextActions) {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "oneProduct":
      return { ...state, oneProduct: action.payload };
    case "categories":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

interface ProductContextProps {
  children: ReactNode;
}
const ProductContext: FC<ProductContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getProducts() {
    try {
      const { data } = await $axios.get(
        `${API_BACKEND}/products/${window.location.search}`
      );

      dispatch({
        type: "products",
        payload: data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function getOneProduct(id: number) {
    try {
      const { data } = await $axios.get(`${API_BACKEND}/products/${id}/`);

      dispatch({
        type: "oneProduct",
        payload: data,
      });
    } catch (error) {
      console.log(error, "errorOfOneProduct");
    }
  }

  async function addProduct(newProduct: any) {
    try {
      console.log(...newProduct);

      await $axios.post(`${API_BACKEND}/products/`, newProduct);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteProduct(id: number) {
    try {
      await $axios.delete(`${API_BACKEND}/products/${id}/`);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  }

  async function editProduct(id: number, newData: any) {
    try {
      await $axios.patch(`${API_BACKEND}/products/${id}/`, newData);
      getProducts();
    } catch (error) {
      console.log(error, "errorOfeditProduct");
    }
  }

  async function getCategories() {
    try {
      const { data } = await $axios.get(`${API_BACKEND}/category/list/`);

      dispatch({
        type: "categories",
        payload: data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  const value = {
    products: state.products,
    oneProduct: state.oneProduct,
    categories: state.categories,
    getProducts,
    getCategories,
    addProduct,
    deleteProduct,
    getOneProduct,
    editProduct,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContext;
