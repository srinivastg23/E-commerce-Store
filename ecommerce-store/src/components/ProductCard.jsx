import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } =
    useContext(CartContext);

  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.title}
      />

      <h4>{product.title}</h4>

      <p>₹ {product.price}</p>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>

      <br />
      <br />

      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: product,
          })
        }
      >
        Add To Cart
      </button>
    </div>
  );
}