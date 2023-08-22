import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import ProductItem from "../../components/common/ProductItem/ProductItem";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../../contexts/ProductContext/ProductContext";

const CatalogPage = () => {
  const { getProducts, products } = useProductContext();
  const [serchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, [serchParams]);
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

export default CatalogPage;
