import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";

export default function Header() {
  return (
    <div className="flex justify-between p-3 items-center">
      <Link to="">
        <img className="w-20" src="/images/icons/logo.png"></img>
      </Link>

      <nav className="flex gap-4">
        {/* <Link to="">Home</Link>
        <Link to="products">Products</Link> */}
        <Link to="checkout">
          <img className="w-8" src="/images/icons/cart.png" alt="cart"></img>
        </Link>
        <SideMenu />
      </nav>
    </div>
  );
}
