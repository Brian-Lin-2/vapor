import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const path = useLocation();
  let style = "font-roboto bg-black min-h-screen text-white pb-4 w-[375px]";

  if (path.pathname === "/") {
    style =
      "font-roboto bg-[url('/gifs/vapor-mobile.gif')] md:bg-[url('/gifs/vapor-desktop.gif')] bg-cover h-screen min-h-[20rem] overflow-y-hidden flex flex-col text-white w-[375px]";
  }

  return (
    <div className={style}>
      <header>
        <Header />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
