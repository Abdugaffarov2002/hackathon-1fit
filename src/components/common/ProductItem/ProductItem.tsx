import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Grid, Link } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useProductContext } from "../../../contexts/ProductContext/ProductContext";
import { ProductType } from "../../../models/product";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Rating from "@mui/material/Rating";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext/AuthContext";
interface itemProps {
  item: ProductType;
}

export default function ProductItem({ item }: itemProps) {
  const { deleteProduct } = useProductContext();
  const { isAdmin } = useAuthContext();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item xs={10} md={6} lg={4} sx={{ mt: "25px" }}>
      <Card>
        <CardMedia sx={{ height: 350 }} image={item.image} title="green iguana">
          {isAdmin() && (
            <>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreVertOutlinedIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => navigate("/edit/id")}>
                  <DriveFileRenameOutlineOutlinedIcon />
                </MenuItem>

                <MenuItem onClick={() => deleteProduct(item.id)}>
                  <DeleteOutlineOutlinedIcon />
                </MenuItem>
              </Menu>
            </>
          )}
        </CardMedia>

        <CardContent onClick={() => navigate("/details/id")}>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <Container>
          <Rating sx={{ mr: "10px" }} />
        </Container>
        <CardActions>
          <Container>
            <FavoriteBorderIcon sx={{ mr: "15px" }} />
            <ChatBubbleOutlineIcon />
          </Container>
          <Container sx={{ justifyContent: "end", width: "auto" }}>
            <TurnedInNotOutlinedIcon />
          </Container>
        </CardActions>
      </Card>
    </Grid>
  );
}
