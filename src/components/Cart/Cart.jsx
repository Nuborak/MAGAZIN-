import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { cartContext } from "../../context/CartContext";
import Loader from "../Loader/Loader";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, deleteFromCart, changeCount } =
    React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return cart ? (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>

              <TableCell align="right">price</TableCell>
              <TableCell align="right">count</TableCell>
              <TableCell align="right">Subprice</TableCell>
              <TableCell align="right">info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map(row => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.item.title}
                </TableCell>
                <TableCell align="right">{row.item.price}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <AddIcon
                      onClick={() => changeCount(row.count + 1, row.item.id)}
                    />
                  </IconButton>
                  {row.count}
                  <IconButton>
                    <RemoveIcon
                      onClick={() => changeCount(row.count - 1, row.item.id)}
                    />
                  </IconButton>
                </TableCell>
                <TableCell align="right">{row.subPrice}</TableCell>

                <TableCell align="right">
                  <IconButton>
                    <DeleteIcon onClick={() => deleteFromCart(row.item.id)} />
                  </IconButton>

                  <IconButton
                    onClick={() => navigate(`/details/${row.item.id}`)}>
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Typography variant="h4">Total:{cart.totalPrice}$</Typography>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
}
