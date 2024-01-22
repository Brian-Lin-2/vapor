import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const path = useLocation();
  let style =
    "font-roboto bg-black h-[max(100svh,_40rem)] text-white w-[375px]";

  if (path.pathname === "/") {
    style =
      "font-roboto bg-[url('/gifs/vapor.gif')] bg-cover h-[max(100svh,_40rem)] text-white w-[375px]";
  }

  return (
    <div className={style}>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
