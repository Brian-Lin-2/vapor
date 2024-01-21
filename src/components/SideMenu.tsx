import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => setActive(true)}
        data-testid="menu-icon"
      >
        <img className="w-8" src="./images/icons/menu.png" alt="menu" />
      </button>

      {active && (
        <div
          className="absolute h-screen w-[375px] left-0 top-0 flex"
          data-testid="side-menu"
        >
          <div
            className="w-2/5 bg-black opacity-50"
            onClick={() => setActive(false)}
          ></div>
          <nav className="flex flex-col gap-2 w-3/5 absolute right-0 h-screen bg-gray-3 p-4">
            <button className="self-end" onClick={() => setActive(false)}>
              <img
                className="w-3 cursor-pointer"
                src="./images/icons/close.png"
                alt=""
              />
            </button>
            <h1 className="text-6xl text-center border-b-2 w-full pt-10 pb-6">
              VAPOR
            </h1>
            <ul className="flex flex-col gap-4 text-2xl pt-8">
              <Link to="" onClick={() => setActive(false)}>
                Home
              </Link>
              <Link to="products" onClick={() => setActive(false)}>
                Products
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
