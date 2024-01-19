import { Outlet } from "react-router-dom";
import Header from "./Header";

// This should have a header, body (outlet), and footer.
export default function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
