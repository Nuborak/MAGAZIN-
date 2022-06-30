import * as React from "react";

import { productsContext } from "../../context/ProductsContext";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { cartContext } from "../../context/CartContext";

export default function ProductCard({ item }) {
  const { deleteProduct } = React.useContext(productsContext);
  const { addToCart } = React.useContext(cartContext);
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, margin: "10px" }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteProduct(item.id)} size="small">
          Delete
        </Button>
        <Button onClick={() => navigate(`/edit/${item.id}`)} size="small">
          Edit
        </Button>
        <Button size="small" onClick={() => navigate(`/details/${item.id}`)}>
          Details
        </Button>
        <IconButton onClick={() => addToCart(item)}>
          <AddShoppingCartIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
