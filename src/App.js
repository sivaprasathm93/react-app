import "./styles.css";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CartContext from "./context/CartContext";

export default function App() {
  let [cart, setCart] = useState({});
  function addToCart(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 0,
      };
    }
    newCart[product.id].quantity = newCart[product.id].quantity + 1;
    setCart(newCart);
  }
  function removeFromCart(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact={true} path="/home" element={<ProductsPage />} />
          <Route exact={true} path="/cart" element={<CartPage />} />
          <Route component={NotFoundPage} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}
