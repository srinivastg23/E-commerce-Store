import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] =
    useState([]);

  useEffect(() => {
    fetch(
      "https://fakestoreapi.com/products?limit=5"
    )
      .then((res) => res.json())
      .then((data) =>
        setOrders(data)
      );
  }, []);

  return (
    <div>
      <h2>Recent Orders</h2>

      {orders.map((order) => (
        <div
          key={order.id}
          className="card"
        >
          <h4>{order.title}</h4>

          <p>₹ {order.price}</p>
        </div>
      ))}
    </div>
  );
}