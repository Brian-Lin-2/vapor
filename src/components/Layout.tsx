import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="font-roboto w-[375px] bg-[url('/gifs/vapor.gif')] bg-cover h-screen text-white">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
