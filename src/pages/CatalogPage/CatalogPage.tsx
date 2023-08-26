import { Box, Grid, InputBase, alpha, styled } from "@mui/material";
import React, { useEffect } from "react";
import ProductItem from "../../components/common/ProductItem/ProductItem";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../../contexts/ProductContext/ProductContext";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/common/Filter/Filter";

import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const CatalogPage = () => {
  const { getProducts, products } = useProductContext();
  const [serchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, [serchParams]);
  console.log(products, "products");

  return (
    <div>
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Filter />
      </Box>
      <Search className="search_navbar_product">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Grid container spacing={2} justifyContent="center">
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </Grid>

      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Pagination />
      </Box>
    </div>
  );
};

export default CatalogPage;
