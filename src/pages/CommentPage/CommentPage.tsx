import React from "react";
import { ISaveContextTypes } from "../../contexts/SavedContext/type";
import { saveContext } from "../../contexts/SavedContext/SavedContext";
import { Grid, Typography } from "@mui/material";

const CommentPage = () => {
  const { comments, getComment } = React.useContext(
    saveContext
  ) as ISaveContextTypes;

  React.useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {comments.products.map((item) => (
          <Grid item xs={8} md={6} lg={4} sx={{ mt: "25px" }}>
            <Typography variant="body2" color="text.secondary">
              {item.comment}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CommentPage;
