import { createContext } from "react";
import { useState } from "react";

export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [isCartClicked, setIsCartClicked] = useState(false);

  let incrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  let decrementQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((val) =>
          val.id === id ? { ...val, quantity: val.quantity - 1 } : val,
        )
        .filter((val) => val.quantity > 0),
    );
  };

  return (
    <MyStore.Provider
      value={{
        setToggle,
        toggle,
        cartItems,
        setCartItems,
        count,
        setCount,
        isCartClicked,
        setIsCartClicked,
        decrementQuantity,
        incrementQuantity,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
