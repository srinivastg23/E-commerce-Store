import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

export default function Products() {
  
  const { products, loading } =
  useProducts();

  const [search, setSearch] = useState("");

  const searchRef = useRef();

  const [searchParams, setSearchParams] =
    useSearchParams();

  const category =
    searchParams.get("category") || "all";

  const focusSearch = () => {
    searchRef.current.focus();
  };

  const filteredProducts = products.filter(
    (product) => {
      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "all"
          ? true
          : product.category === category;

      return (
        matchesSearch && matchesCategory
      );
    }
  );

  return (
    <div className="container">
      <h1>Products</h1>

      <div className="filter-section">
        <button
          onClick={() =>
            setSearchParams({
              category: "all",
            })
          }
        >
          All
        </button>

        <button
          onClick={() =>
            setSearchParams({
              category: "electronics",
            })
          }
        >
          Electronics
        </button>

        <button
          onClick={() =>
            setSearchParams({
              category: "jewelery",
            })
          }
        >
          Jewelery
        </button>

        <button
          onClick={() =>
            setSearchParams({
              category: "men's clothing",
            })
          }
        >
          Men's Clothing
        </button>

        <button
          onClick={() =>
            setSearchParams({
              category: "women's clothing",
            })
          }
        >
          Women's Clothing
        </button>
      </div>

      <p>
        Selected Category:
        <strong> {category}</strong>
      </p>

      <button onClick={focusSearch}>
        Focus Search
      </button>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {filteredProducts.length === 0 ? (
        <h3>No Products Found</h3>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}