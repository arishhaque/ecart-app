// This code is not in use
/* Context API usage

const { cart, setCart } = CartContext();

// Add to cart
setCart((prevCart) => [ ...prevCart, { ...product, quantity: 1 }]);

*/
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
