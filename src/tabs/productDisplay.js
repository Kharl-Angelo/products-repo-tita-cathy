import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import {
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Stack,
  Button,
  TextField,
} from "@mui/material";

const ProductDisplay = () => {
  const { products, setProducts, error, setError } = useContext(MyContext);
  const [isUpdating, setIsUpdating] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});

  const tableTitles = [
    "Product ID",
    "Product Name",
    "Product Price",
    "Actions",
  ];

  const handleDeleteProduct = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => index !== i));
  };

  const handleUpdateProduct = (index) => {
    setIsUpdating(index);
    setUpdatedProduct(products[index]);
  };

  const handleConfirmUpdate = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;

    let newErrors = {
      ProductID: updatedProduct.ProductID ? "" : "This is required!",
      ProductName: updatedProduct.ProductName ? "" : "This is required!",
      ProductPrice: updatedProduct.ProductPrice ? "" : "This is required!",
    };

    const exceptCurrProdID = updatedProducts.filter((_, i) => i !== index);

    console.log(exceptCurrProdID);

    if (
      exceptCurrProdID.some(
        (exceptCurrProdId) =>
          exceptCurrProdId.ProductID === updatedProduct.ProductID
      )
    ) {
      newErrors.ProductID = "Product ID has already been used.";
    }

    if (isNaN(updatedProduct.ProductPrice)) {
      newErrors.ProductPrice = "Enter a proper price";
    }

    if (
      newErrors.ProductID ||
      newErrors.ProductName ||
      newErrors.ProductPrice
    ) {
      setError(newErrors);
      return;
    }

    setProducts(updatedProducts);

    setIsUpdating(null);
    setUpdatedProduct({});

    setError({});
  };

  const handleInputChange = (e, field) => {
    setUpdatedProduct({
      ...updatedProduct,
      [field]: e.target.value,
    });
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {tableTitles.map((tableTitle) => (
              <TableCell key={tableTitle}>{tableTitle}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={product.ProductID}>
              <TableCell>
                {isUpdating === index ? (
                  <TextField
                    required
                    label="Product ID"
                    size="small"
                    error={!!error.ProductID}
                    helperText={error.ProductID}
                    value={updatedProduct.ProductID || ""}
                    onChange={(e) => handleInputChange(e, "ProductID")}
                    variant="standard"
                  />
                ) : (
                  product.ProductID
                )}
              </TableCell>
              <TableCell>
                {isUpdating === index ? (
                  <TextField
                    required
                    label="Product Name"
                    size="small"
                    error={!!error.ProductName}
                    helperText={error.ProductName}
                    value={updatedProduct.ProductName || ""}
                    onChange={(e) => handleInputChange(e, "ProductName")}
                    variant="standard"
                  />
                ) : (
                  product.ProductName
                )}
              </TableCell>
              <TableCell>
                {isUpdating === index ? (
                  <TextField
                    required
                    label="Product Price"
                    size="small"
                    error={!!error.ProductPrice}
                    helperText={error.ProductPrice}
                    value={updatedProduct.ProductPrice || ""}
                    onChange={(e) => handleInputChange(e, "ProductPrice")}
                    variant="standard"
                  />
                ) : (
                  product.ProductPrice
                )}
              </TableCell>

              <TableCell>
                <Stack direction="row">
                  {isUpdating === index ? (
                    <Button onClick={() => handleConfirmUpdate(index)}>
                      Confirm
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleUpdateProduct(index)}
                      variant="outlined"
                    >
                      Update
                    </Button>
                  )}

                  {isUpdating === index ? (
                    <Button onClick={() => setIsUpdating(null)}>Cancel</Button>
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={() => handleDeleteProduct(index)}
                    >
                      Delete
                    </Button>
                  )}
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductDisplay;
