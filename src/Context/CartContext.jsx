import { createContext, useContext, useState } from "react";

const Cart = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (<Cart.Provider value={{ cart, setCart }}>{children}</Cart.Provider>);
};

export const CartContext = () => {
  return useContext(Cart);
}

export default CartProvider;
