import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetch(
      "https://fakestoreapi.com/products"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return {
    products,
    loading,
  };
}