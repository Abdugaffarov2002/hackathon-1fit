import React, { useEffect } from "react";
import { ISaveContextTypes } from "../../contexts/SavedContext/type";
import { saveContext } from "../../contexts/SavedContext/SavedContext";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const CommentPage = () => {
  const { showComment } = React.useContext(saveContext) as ISaveContextTypes;

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={8} md={6} lg={4} sx={{ mt: "25px" }}>
          <Typography variant="body2" color="text.secondary">
            {showComment}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CommentPage;
