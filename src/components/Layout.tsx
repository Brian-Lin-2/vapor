import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="font-roboto bg-[url('/gifs/vapor.gif')] bg-cover h-svh min-h-[30rem] text-white w-[375px]">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
