import { useContext } from "react";
import CartContext from "../../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);
  let cartList = cart ? Object.values(cart) : [];
  return (
    <div className="cart">
      <ul>
        {cartList.map(function (item) {
          return (
            <li>
              {item.title}-{item.quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
