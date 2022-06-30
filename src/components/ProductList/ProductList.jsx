import { Box, Container, Pagination, Slider, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../context/ProductsContext";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const { products, getProduct, pages } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );
  const [price, setPrice] = useState([1, 100000]);

  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    // console.log("123");
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 2,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, price]);
  useEffect(() => {
    getProduct();
  }, [searchParams]);

  // console.log(currentPage);
  return (
    <Container>
      <Box>
        <TextField
          value={search}
          label="Search"
          onChange={e => setSearch(e.target.value)}
          variant="outlined"
        />
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e, value) => {
            setPrice(value);
            console.log(value);
          }}
          valueLabelDisplay="auto"
          min={0}
          max={100000}
          step={100}
        />
      </Box>
      <Box>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box>
        <Pagination
          onChange={(e, page) => {
            setCurrentPage(page);
          }}
          page={currentPage}
          count={pages}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default ProductList;
