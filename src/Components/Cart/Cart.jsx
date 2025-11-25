//import useWindowSize from "../../Hooks/useWindowSize"
import { CartContext } from "../../Context/CartContext";
//import { useSelector } from "react-redux";

function Cart() {

  /*
  const cart = useSelector((state) => state.cart.items)
  const cart = Object.values(cart);
  */
  // using useContext
  const cartContext = CartContext();
  const cart = Object.values(cartContext.cart);

  // const windowSize = useWindowSize();
  let totalPrice = 0;
  if (cart.length === 0) {
    return (
      <>
        <div>
          Cart is empty
        </div>
      </>
    )
  } else {
    return (
      <>
        <ol>
          {
            cart.map((item) => {
              totalPrice += item.price * item.quantity;
              return <li key={item.id}><div>{item.title}, <span>quantity - {item.quantity}, </span><span>price - {item.price}</span></div></li>
            })
          }
        </ol>
        <div>Total: {totalPrice.toFixed(2)}</div>
      </ >
    )
  }
}

export default Cart;
