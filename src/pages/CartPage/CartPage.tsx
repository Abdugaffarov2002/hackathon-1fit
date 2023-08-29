import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { cartContext } from "../../contexts/CartContext/CartContext";
import { Link } from "react-router-dom";
import { ICartContextTypes } from "../../contexts/CartContext/type";

export default function CartPage() {
  const { cart, getCart, increaseCount, decreaseCount, deleteProductFromCart } =
    React.useContext(cartContext) as ICartContextTypes;

  React.useEffect(() => {
    getCart();
  }, []);

  if (cart.products.length < 1) {
    return (
      <Box
        sx={{ width: "max-content", margin: "150px auto", textAlign: "center" }}
      >
        <Typography variant="h4">Cart is empty</Typography>
        <Button component={Link} to="/catalog">
          Back to catalog
        </Button>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Sub Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="right">
                <img src={item.image} alt="" />
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.subPrice}</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <IconButton
                    onClick={() =>
                      item.count <= 1
                        ? deleteProductFromCart(item.id)
                        : decreaseCount(item.id)
                    }
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography variant="h6">{item.count}</Typography>
                  <IconButton onClick={() => increaseCount(item.id)}>
                    <AddIcon />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="0 40px"
      >
        <Typography variant="h4">Total price: ${cart.totalPrice} </Typography>
        <Button component={Link} to="/success" variant="contained">
          Order
        </Button>
      </Box>
    </TableContainer>
  );
}
