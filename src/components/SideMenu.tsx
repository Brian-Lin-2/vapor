import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        className="cursor-pointer md:hidden"
        onClick={() => setActive(true)}
      >
        <img className="w-8" src="/images/icons/menu.png" alt="" />
      </button>

      {active && (
        <div
          className="absolute min-h-screen w-full left-0 top-0 flex"
          data-testid="side-menu"
        >
          <div
            className="w-full bg-black opacity-50"
            onClick={() => setActive(false)}
          ></div>
          <nav className="flex flex-col gap-2 w-64 absolute min-h-screen right-0 bg-gray-3 p-4">
            <button className="self-end" onClick={() => setActive(false)}>
              <img
                className="w-4 cursor-pointer"
                src="/images/icons/close.png"
                alt=""
              />
            </button>
            <h1 className="text-6xl text-center border-b-2 w-full pt-8 pb-4">
              VAPOR
            </h1>
            <ul className="flex flex-col gap-4 text-2xl pt-8">
              <Link
                to=""
                className="hover:text-gray-2"
                onClick={() => setActive(false)}
              >
                Home
              </Link>
              <Link
                to="products"
                className="hover:text-gray-2"
                onClick={() => setActive(false)}
              >
                Products
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
