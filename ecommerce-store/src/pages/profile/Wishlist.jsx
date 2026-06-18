import { useEffect, useState } from "react";

export default function Wishlist() {
  const [items, setItems] =
    useState([]);

  useEffect(() => {
    fetch(
      "https://fakestoreapi.com/products/category/electronics"
    )
      .then((res) => res.json())
      .then((data) =>
        setItems(data)
      );
  }, []);

  return (
    <div>
      <h2>Wishlist</h2>

      {items.slice(0, 4).map((item) => (
        <div
          key={item.id}
          className="card"
        >
          <h4>{item.title}</h4>

          <p>₹ {item.price}</p>
        </div>
      ))}
    </div>
  );
}