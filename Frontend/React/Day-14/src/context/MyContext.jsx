import React, { Children, createContext } from "react";
import { useState } from "react";

export let MyStore = createContext();
export const ContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  return (
    <MyStore.Provider
      value={{ productData, setProductData, cartProduct, setCartProduct }}
    >
      {children}
    </MyStore.Provider>
  );
};

export default ContextProvider;
