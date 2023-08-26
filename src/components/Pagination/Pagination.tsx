import { Pagination as MuiPagination } from "@mui/material";
import React, { useContext, useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../../utils/consts";
import ProductContext, {
  useProductContext,
} from "../../contexts/ProductContext/ProductContext";

const Pagination = () => {
  const { page, setPage, pageTotalCount } = useProductContext();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      page: page.toString(),
      _limit: LIMIT.toString(),
    });
  }, [page]);

  return (
    <MuiPagination
      count={pageTotalCount}
      page={page}
      color="primary"
      onChange={(_, value) => setPage(value)}
    />
  );
};

export default Pagination;
