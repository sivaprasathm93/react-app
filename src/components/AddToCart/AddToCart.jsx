import CartContext from "../../context/CartContext";
import { useContext } from "react";

function AddToCart({ product }) {
  console.log("ATC", product.id);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  function increment() {
    addToCart(product);
  }

  function decrement() {
    removeFromCart(product);
  }

  let quantity = cart[product.id] ? cart[product.id].quantity : 0;
  if (quantity > 0) {
    return (
      <div>
        <button onClick={decrement}>-</button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={increment}>Add TO Cart</button>
      </div>
    );
  }
}

export default AddToCart;
