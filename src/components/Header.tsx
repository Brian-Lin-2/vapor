import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import Cart from "../pages/cart/Cart";

export default function Header() {
  return (
    <div className="flex justify-between p-4 items-center md:pt-6 md:px-16">
      <Link to="">
        <img className="w-20 md:w-24" src="/images/icons/logo.png"></img>
      </Link>

      <nav className="flex items-center gap-4 md:text-xl md:font-bold md:gap-8">
        <Link to="" className="hidden md:block">
          Home
        </Link>
        <Link to="products" className="hidden md:block">
          Products
        </Link>
        <Cart />
        <SideMenu />
      </nav>
    </div>
  );
}
