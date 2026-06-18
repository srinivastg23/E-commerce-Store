import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

export default function Home() {
  const { products, loading } =
    useProducts();

  return (
    <div className="container">
      {/* Hero Section */}

      <section className="hero">
        <h1>
          Welcome to E-Commerce Store
        </h1>

        <p>
          Discover amazing products at
          affordable prices.
        </p>

        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </section>

      {/* Features */}

      <section className="features">
        <div className="feature-card">
          <h3>Fast Delivery</h3>

          <p>
            Get your products delivered
            quickly and safely.
          </p>
        </div>

        <div className="feature-card">
          <h3>Secure Payment</h3>

          <p>
            Multiple secure payment
            options available.
          </p>
        </div>

        <div className="feature-card">
          <h3>24/7 Support</h3>

          <p>
            Dedicated support whenever
            you need help.
          </p>
        </div>
      </section>

      {/* Featured Products */}

      <section
        style={{ marginTop: "40px" }}
      >
        <h2>Featured Products</h2>

        {loading ? (
          <h3>Loading Products...</h3>
        ) : (
          <div className="product-grid">
            {products
              .slice(0, 4)
              .map((product) => (
                <div
                  className="card"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                  />

                  <h4>
                    {product.title}
                  </h4>

                  <p>
                    ₹ {product.price}
                  </p>

                  <Link
                    to={`/product/${product.id}`}
                  >
                    View Details
                  </Link>
                </div>
              ))}
          </div>
        )}
      </section>

      {/* Categories */}

      <section
        style={{ marginTop: "40px" }}
      >
        <h2>Shop By Category</h2>

        <div className="product-grid">
          <Link
            className="card"
            to="/products?category=electronics"
          >
            <h3>Electronics</h3>
          </Link>

          <Link
            className="card"
            to="/products?category=jewelery"
          >
            <h3>Jewelry</h3>
          </Link>

          <Link
            className="card"
            to="/products?category=men's clothing"
          >
            <h3>Men's Fashion</h3>
          </Link>

          <Link
            className="card"
            to="/products?category=women's clothing"
          >
            <h3>Women's Fashion</h3>
          </Link>
        </div>
      </section>
    </div>
  );
}