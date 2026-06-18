import { useParams } from "react-router-dom";
import { useContext } from "react";
import useProducts from "../hooks/useProducts";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();

  const { products, loading } =
  useProducts();

  const { dispatch } =
    useContext(CartContext);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product)
    return <h2>Loading...</h2>;

  return (
    <div className="container">
      <div className="card">
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "250px",
            height: "250px",
            objectFit: "contain",
          }}
        />

        <h1>{product.title}</h1>

        <h3>
          ₹ {product.price}
        </h3>

        <p>
          Category:
          {product.category}
        </p>

        <p>
          {product.description}
        </p>

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
    </div>
  );
}