export const validateInputs = (
  ProductID,
  ProductName,
  ProductPrice,
  products,
  setError
) => {
  let newErrors = {
    ProductID: ProductID ? "" : "This is required!",
    ProductName: ProductName ? "" : "This is required!",
    ProductPrice: ProductPrice ? "" : "This is required!",
  };

  if (products.some((product) => product.ProductID === ProductID)) {
    newErrors.ProductID = "Product ID has already been used.";
  }

  if (isNaN(ProductPrice)) {
    newErrors.ProductPrice = "Enter a proper price";
  }

  if (newErrors.ProductID || newErrors.ProductName || newErrors.ProductPrice) {
    setError(newErrors);
    return false;
  }

  return true;
};
