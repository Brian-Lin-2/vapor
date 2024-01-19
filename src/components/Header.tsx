import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Vapor</h1>

      <Link to="">Home</Link>
      <Link to="products">Products</Link>
      <Link to="checkout">Cart</Link>
    </div>
  );
}
