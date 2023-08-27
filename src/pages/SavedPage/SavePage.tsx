import React from "react";
import { saveContext } from "../../contexts/SavedContext/SavedContext";
import { ISaveContextTypes } from "../../contexts/SavedContext/type";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { TurnedInOutlined } from "@mui/icons-material";

const SavePage = () => {
  const {
    save,
    getSave,
    isAlreadyInSave,
    addProductToSave,
    deleteProductFromSave,
  } = React.useContext(saveContext) as ISaveContextTypes;

  React.useEffect(() => {
    getSave();
  }, []);

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {save.products.map((item) => (
          <Grid item xs={8} md={6} lg={4} sx={{ mt: "25px" }}>
            <Card sx={{ maxWidth: 345, margin: "20px" }}>
              <CardMedia
                sx={{ height: 345, width: 345 }}
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
              </CardContent>
              <CardActions>
                <Container sx={{ justifyContent: "end", width: "auto" }}>
                  {isAlreadyInSave(item.id) ? (
                    <IconButton onClick={() => deleteProductFromSave(item.id)}>
                      <TurnedInOutlined color="primary" />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => addProductToSave(item)}>
                      <TurnedInNotOutlinedIcon />
                    </IconButton>
                  )}
                </Container>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SavePage;
