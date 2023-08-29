import React, { FC, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import "./DetailsPage.css";
import { useProductContext } from "../../contexts/ProductContext/ProductContext";

const DetailsPage = () => {
  const { oneProduct } = useProductContext();

  const { id } = useParams();

  // useEffect(() => {
  //   if (id) {
  //     showOneProduct(+id);
  //   }
  // }, [id]);

  return (
    <div>
      {oneProduct ? (
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box
            sx={{
              margin: "25px auto",
            }}
          >
            <CardMedia
              className="image"
              component="img"
              image={oneProduct.image}
              alt={oneProduct.title}
            />
          </Box>
          <Card className="text">
            <Container>
              <CardContent>
                <Typography
                  sx={{ display: "flex", fontSize: "24px" }}
                  gutterBottom
                  variant="h3"
                  component="div"
                >
                  {oneProduct.title}
                </Typography>
                <br />

                <Typography
                  sx={{ fontSize: "20px" }}
                  variant="h4"
                  color="text.secondary"
                  component={"div"}
                >
                  {oneProduct.description}
                </Typography>
              </CardContent>
            </Container>
          </Card>
        </Container>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default DetailsPage;
