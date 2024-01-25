import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const path = useLocation();
  let style = "font-roboto bg-black min-h-screen text-white w-[375px] pb-4";

  if (path.pathname === "/") {
    style =
      "font-roboto bg-[url('/gifs/vapor.gif')] bg-cover h-screen min-h-[20rem] overflow-y-hidden flex flex-col text-white w-[375px]";
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
