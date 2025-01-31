import React, { useContext } from "react";
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
} from "@mui/material";

const ProductDisplay = () => {
  const { products, setProducts } = useContext(MyContext);

  const tableTitles = [
    "Product ID",
    "Product Name",
    "Product Price",
    "Actions",
  ];

  const handleDeleteProduct = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => index !== i));
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
              <TableCell>{product.ProductID}</TableCell>
              <TableCell>{product.ProductName}</TableCell>
              <TableCell>{product.ProductPrice}</TableCell>
              <TableCell>
                <Stack direction="row">
                  <Button variant="outlined">Update</Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleDeleteProduct(index)}
                  >
                    Delete
                  </Button>
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
