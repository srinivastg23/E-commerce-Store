import {
  Link,
  Outlet,
} from "react-router-dom";

export default function Profile() {
  return (
    <div className="container">
      <h1>Profile</h1>

      <div className="nav-links">
        <Link to="orders">
          Orders
        </Link>

        <Link to="wishlist">
          Wishlist
        </Link>

        <Link to="settings">
          Settings
        </Link>
      </div>

      <Outlet />
    </div>
  );
}