import React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default BaseLayout;
