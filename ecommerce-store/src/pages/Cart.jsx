import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { state, dispatch } =
    useContext(CartContext);

  return (
    <div className="container">
      <h1>Cart</h1>

      {state.cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        state.cart.map((item) => (
          <div
            className="card"
            key={item.id}
          >
            <h4>{item.title}</h4>

            <p>₹ {item.price}</p>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}