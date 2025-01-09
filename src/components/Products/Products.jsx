import { useEffect, useState, memo } from "react";
import ProductCard from "../ProductCard";
import Categories from "../Categories";
import { Link } from "react-router-dom";

function Products() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(function () {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setProducts(response);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <img
          alt="loader"
          src="https://media.tenor.com/XasjKGMk_wAAAAAM/load-loading.gif"
        />
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/cart">Cart</Link>
        {products.map(function (item) {
          return <ProductCard key={item.title} product={item} />;
        })}
        {/* <Categories /> */}
      </div>
    );
  }
}

export default memo(Products);
