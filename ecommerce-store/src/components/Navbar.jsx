import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { state } =
    useContext(CartContext);

  return (
    <nav className="nav">
      <Link to="/">Home</Link>

      <Link to="/products">
        Products
      </Link>

      <Link to="/cart">
        Cart ({state.cart.length})
      </Link>

      <Link to="/admin-products">
        Admin
      </Link>

      <Link to="/about">
        About
      </Link>

      <Link to="/contact">
        Contact
      </Link>

      <Link to="/profile">
        Profile
      </Link>
    </nav>
  );
}