import React, { useContext, useState, useRef } from "react";
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
  const { products, setProducts } = useContext(MyContext);
  const [isUpdating, setIsUpdating] = useState(null);
  const [newUpdatedValue, setNewUpdatedValue] = useState({});

  const refNewProductID = useRef("");
  const refNewProductName = useRef("");
  const refNewProductPrice = useRef("");

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
    setIsUpdating(index === isUpdating ? null : index);
  };

  const handleConfirmUpdate = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct, i) =>
        index === i ? console.log("true") : console.log("not true")
      )
    );
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
                    defaultValue={product.ProductID}
                    inputRef={refNewProductID}
                    variant="standard"
                  />
                ) : (
                  product.ProductID
                )}
              </TableCell>
              <TableCell>
                {isUpdating === index ? (
                  <TextField
                    defaultValue={product.ProductName}
                    inputRef={refNewProductName}
                    variant="standard"
                  />
                ) : (
                  product.ProductName
                )}
              </TableCell>
              <TableCell>
                {isUpdating === index ? (
                  <TextField
                    defaultValue={product.ProductPrice}
                    inputRef={refNewProductPrice}
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
