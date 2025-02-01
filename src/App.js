import ProductForm from "./tabs/productForm";
import { createContext, useState } from "react";
import ProductDisplay from "./tabs/productDisplay";
import { Tabs } from "@mui/base";
import {
  Tab,
  TabsList,
  TabPanelForm,
  TabPanelDisplay,
} from "./styles/themes/customizedStyles";
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
          <TabPanelForm
            sx={{
              "& .MuiBox-root": {
                height: "fit-content",
                width: "100%",
                paddingTop: "3rem",
              },
            }}
            value="productForm"
          >
            <ProductForm />
          </TabPanelForm>
          <TabPanelDisplay value="productDisplay">
            <ProductDisplay />
          </TabPanelDisplay>
        </Tabs>
      </MyContext.Provider>
    </>
  );
}

export default App;
