import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useProductContext } from "../../../contexts/ProductContext/ProductContext";
import { ProductType } from "../../../models/product";

interface itemProps {
  item: ProductType;
}

export default function ProductItem({ item }: itemProps) {
  const { deleteProduct } = useProductContext();
  return (
    <Grid item xs={10} md={6} lg={4} sx={{ mt: "25px" }}>
      <Card>
        <CardMedia
          sx={{ height: 350 }}
          image={item.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="h6">${item.price}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => deleteProduct(item.id)} size="small">
            Delete
          </Button>
          <Button size="small" component={Link} to={`/edit/${item.id}`}>
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
