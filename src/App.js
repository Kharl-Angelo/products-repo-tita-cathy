import ProductForm from "./tabs/productForm";
import { createContext, useState } from "react";
import ProductDisplay from "./tabs/productDisplay";
import { Tabs, TabsList, TabPanel, Tab } from "@mui/base";

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
        <Tabs defaultValue="productForm">
          <TabsList>
            <Tab value="productForm">Product Form</Tab>
            <Tab value="productDisplay">Product Display</Tab>
          </TabsList>
          <TabPanel value="productForm">
            <ProductForm />
          </TabPanel>
          <TabPanel value="productDisplay">
            <ProductDisplay />
          </TabPanel>
        </Tabs>
      </MyContext.Provider>
    </>
  );
}

export default App;
