import "./ProductCard.scss";
import ReduxAddToCart from "../ReduxAddToCart";
import Rating from "../Rating";
export default function ProductCard({ product }) {
  return (
    <div className="card">
      <div>{product.title}</div>
      <div>{product.price.value}</div>
      <Rating rating={product.rating.value} maxRating={5} size={1.2} />
      <ReduxAddToCart product={product} />
    </div>
  );
}
