import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, IconButton, Input, Modal } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useProductContext } from "../../../contexts/ProductContext/ProductContext";
import { ProductType } from "../../../models/product";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Rating from "@mui/material/Rating";
import InputBase from "@mui/material/InputBase";

import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext/AuthContext";
import { saveContext } from "../../../contexts/SavedContext/SavedContext";
import { ISaveContextTypes } from "../../../contexts/SavedContext/type";
import CommentPage from "../../../pages/CommentPage/CommentPage";
interface itemProps {
  item: ProductType;
}

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ProductItem({ item }: itemProps) {
  const {
    isAlreadyInSave,
    addProductToSave,
    deleteProductFromSave,
    addProductToComment,
    setNewComment,
    newComment,
    showOneComment,
  } = React.useContext(saveContext) as ISaveContextTypes;
  const { deleteProduct } = useProductContext();
  const { isAdmin, user } = useAuthContext();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // --------------------------------------------------------//
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [openM, setOpenM] = React.useState(false);
  const handleOpenM = () => setOpenM(true);
  const handleCloseM = () => setOpenM(false);

  // --------------------------------------------------------//

  return (
    <Grid item xs={8} md={6} lg={4}>
      <Card sx={{ m: "20px" }}>
        <CardMedia sx={{ height: 350 }} image={item.image} title="green iguana">
          {isAdmin() && (
            <Container>
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
            </Container>
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
          <Container sx={{ display: "flex", flexDirection: "row" }}>
            <IconButton>
              <FavoriteBorderIcon sx={{ mr: "15px" }}></FavoriteBorderIcon>
              <Typography sx={{ mr: "15px" }}>{item.likes}</Typography>
            </IconButton>
            <IconButton onClick={handleOpenM}>
              <ChatBubbleOutlineIcon />
            </IconButton>
            <Modal
              open={openM}
              onClose={handleCloseM}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} component="form" noValidate>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {user?.email}
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <StyledInputBase
                    required
                    fullWidth
                    name="comment"
                    autoFocus
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <Button
                    onClick={() => {
                      addProductToComment(item);
                      showOneComment(item.id);
                    }}
                    sx={{ mt: "5px", ml: "-10px" }}
                  >
                    Send
                  </Button>
                  <Container>
                    <CommentPage />
                  </Container>
                </Typography>
              </Box>
            </Modal>
          </Container>

          <Container sx={{ justifyContent: "end", width: "auto" }}>
            {isAlreadyInSave(item.id) ? (
              <IconButton onClick={() => deleteProductFromSave(item.id)}>
                <TurnedInOutlinedIcon color="primary" />
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
  );
}
