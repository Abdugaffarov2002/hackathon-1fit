import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import {
  ProductContextActions,
  ProductContextTypes,
  initStateProducts,
} from "./types";
import $axios from "../../utils/axios";
import { API_BACKEND, LIMIT } from "../../utils/consts";
import { useSearchParams } from "react-router-dom";

const productContext = createContext<ProductContextTypes | null>(null);

export function useProductContext(): ProductContextTypes {
  return useContext(productContext) as ProductContextTypes;
}

const initState: initStateProducts = {
  products: [],
  oneProduct: null,
  categories: [],
  pageTotalCount: 1,
  page: 1,
};

function reducer(state: initStateProducts, action: ProductContextActions) {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "oneProduct":
      return { ...state, oneProduct: action.payload };
    case "categories":
      return { ...state, categories: action.payload };
    case "pageTotalCount":
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
}

interface ProductContextProps {
  children: ReactNode;
}
const ProductContext: FC<ProductContextProps> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(reducer, initState);
  const [page, setPage] = useState<number>(
    +(searchParams.get("page") as string) || 1
  );

  // const getFilteredProducts = async ({ category }: { category: string }) => {
  //   try {
  //     const response = await $axios.get(`${API_BACKEND}`);
  //     const filteredProducts = response.data.map(
  //       (products: { category: string }) => products.category === category
  //     );

  //     dispatch({
  //       type: "products",
  //       payload: filteredProducts,
  //     });
  //   } catch (error) {
  //     console.error("Error fetching filtered products:", error);
  //   }
  // };

  async function getProducts() {
    try {
      const { data, headers } = await $axios.get(
        `${API_BACKEND}/products/${window.location.search}`
      );

      const count = Math.ceil(headers["content-length"] / LIMIT);

      dispatch({
        type: "pageTotalCount",
        payload: count,
      });

      dispatch({
        type: "products",
        payload: data.results,
      });
      console.log(headers, "headers");
    } catch (e) {
      console.log(e);
    }
  }

  async function getOneProduct(id: number) {
    try {
      const { data } = await $axios.get(`${API_BACKEND}/products/729/`);

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
    pageTotalCount: state.pageTotalCount,
    page,
    getProducts,
    getCategories,
    addProduct,
    deleteProduct,
    getOneProduct,
    editProduct,
    setPage,
    // getFilteredProducts,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContext;
