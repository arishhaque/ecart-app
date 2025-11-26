
import { CartContext } from "../../Context/CartContext";
import './Cart.css'
//import useWindowSize from "../../Hooks/useWindowSize"
//import { useSelector } from "react-redux";

function Cart() {

  /*
  const cart = useSelector((state) => state.cart.items)
  const cart = Object.values(cart);
  const windowSize = useWindowSize();
  */

  // using useContext
  const { cart } = CartContext();
  let totalPrice = 0;
  if (cart.length === 0) {
    return (
      <>
        <div>
          <h1>Cart is empty </h1>
        </div>
      </>
    )
  } else {
    return (
      <>
        <h1>My Cart</h1>
        <div className="cart-container">
          <ol>
            {
              cart.map((item) => {
                totalPrice += item.price * item.quantity;
                return <li className="cart-item" key={item.id}><div className="cart-item-title">{item.title}, <span className="cart-item-quantity">quantity: {item.quantity}, </span><span className="cart-item-price">price: {item.price}</span></div></li>
              })
            }
          </ol>
          <div className="cart-total-price">Total: {totalPrice.toFixed(2)}</div>
        </div>
      </>
    )
  }
}

export default Cart;
