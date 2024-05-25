import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import CartProvider from "../pages/cart/CartContext";

export default function Layout() {
  const path = useLocation();
  let style = "font-roboto bg-black min-h-screen text-white pb-4 flex flex-col";

  if (path.pathname === "/") {
    style =
      "font-roboto bg-[url('/gifs/vapor-mobile.gif')] md:bg-[url('/gifs/vapor-desktop.gif')] bg-cover h-screen min-h-[20rem] overflow-y-hidden flex flex-col text-white";
  }

  return (
    <CartProvider>
      <div className={style}>
        <header>
          <Header />
        </header>
        <main className="flex flex-col flex-grow">
          <Outlet />
        </main>
      </div>
    </CartProvider>
  );
}
