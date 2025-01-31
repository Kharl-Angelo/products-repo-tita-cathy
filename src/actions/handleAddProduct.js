import { validateInputs } from "../validations/validateInputs";

export const handleAddProduct = (
  refProductID,
  refProductName,
  refProductPrice,
  products,
  setError,
  setProducts
) => {
  const ProductID = refProductID.current.value.trim();
  const ProductName = refProductName.current.value.trim();
  const ProductPrice = refProductPrice.current.value.trim();

  const isValid = validateInputs(
    ProductID,
    ProductName,
    ProductPrice,
    products,
    setError
  );

  if (!isValid) {
    return;
  }
  setProducts([
    ...products,
    {
      ProductID,
      ProductName,
      ProductPrice,
    },
  ]);
  refProductID.current.value = "";
  refProductName.current.value = "";
  refProductPrice.current.value = "";
  setError({});
};
