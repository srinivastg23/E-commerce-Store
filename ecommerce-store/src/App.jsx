import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import AdminProducts from "./pages/AdminProducts";

import Orders from "./pages/profile/Orders";
import Wishlist from "./pages/profile/Wishlist";
import Settings from "./pages/profile/Settings";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/admin-products"
          element={<AdminProducts />}
        />

        {/* Nested Routing */}

        <Route
          path="/profile"
          element={<Profile />}
        >
          <Route
            path="orders"
            element={<Orders />}
          />

          <Route
            path="wishlist"
            element={<Wishlist />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;