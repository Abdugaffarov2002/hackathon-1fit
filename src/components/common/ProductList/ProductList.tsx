import React, { useContext, useEffect } from "react";

import { Grid } from "@mui/material";

import { useSearchParams } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";
import { useProductContext } from "../../../contexts/ProductContext/ProductContext";

const ProductList = () => {
  const { products, getProducts, page } = useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(products);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
