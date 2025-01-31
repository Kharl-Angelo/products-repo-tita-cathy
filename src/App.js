import "./App.css";
import ProductForm from "./tabs/productForm";
import { createContext, useState } from "react";
import SelectTabs from "./selectTabs";
import ProductDisplay from "./tabs/productDisplay";

export const MyContext = createContext();

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });
  const [error, setError] = useState("");

  return (
    <>
      <MyContext.Provider
        value={{
          products,
          setProducts,
          error,
          setError,
        }}
      >
        <SelectTabs />
        <ProductForm />
        <ProductDisplay />
      </MyContext.Provider>
    </>
  );
}

export default App;
