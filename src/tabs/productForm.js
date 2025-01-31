import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import React, { useContext, useRef, useEffect } from "react";
import { MyContext } from "../App";
import { handleAddProduct } from "../actions/handleAddProduct";
import { handleNumericInput } from "../validations/handleNumericInput";

const ProductForm = () => {
  const { products, setProducts, error, setError } = useContext(MyContext);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    console.log(products);
  }, [products]);

  const refProductID = useRef(null);
  const refProductName = useRef(null);
  const refProductPrice = useRef(null);

  const handleClearStorage = () => {
    setProducts([]);
    alert("Products are cleared");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "0.5rem",
        }}
      >
        <Typography>Enter Products Info</Typography>
        <TextField
          required
          id="outlined-error"
          label="Product ID"
          size="small"
          sx={{
            marginTop: "0.5rem",
          }}
          inputRef={refProductID}
          error={!!error.ProductID}
          helperText={error.ProductID}
        />
        <TextField
          required
          label="Product Name"
          size="small"
          sx={{
            marginTop: "0.5rem",
          }}
          inputRef={refProductName}
          error={!!error.ProductName}
          helperText={error.ProductName}
        />
        <TextField
          required
          label="Product Price"
          size="small"
          sx={{
            marginTop: "0.5rem",
          }}
          inputRef={refProductPrice}
          error={!!error.ProductPrice}
          helperText={error.ProductPrice}
          onKeyDown={(e) => handleNumericInput(e, refProductPrice)}
        />
        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{
            marginTop: "0.5rem",
          }}
          onClick={() =>
            handleAddProduct(
              refProductID,
              refProductName,
              refProductPrice,
              products,
              setError,
              setProducts
            )
          }
        >
          Add Product
        </Button>
        <Button
          variant="outlined"
          color="error"
          sx={{
            marginTop: "0.5rem",
          }}
          onClick={handleClearStorage}
        >
          Clear Products
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductForm;
