import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const [active, setActive] = useState(false);
  const { items, clearCart } = useContext(CartContext);
  const count = items.length;
  const total = items.reduce((acc, game) => acc + game.price, 0);

  return (
    <>
      <button onClick={() => setActive(true)}>
        <img className="w-8 md:w-12" src="/images/icons/cart.png" alt="cart" />
      </button>

      {active && (
        <div className="fixed h-screen min-h-screen left-0 top-0 flex w-full">
          <div
            className="bg-black opacity-50 flex-grow"
            onClick={() => setActive(false)}
          ></div>
          <div className="w-64 bg-black flex flex-col gap-2 p-5">
            <button className="self-end" onClick={() => setActive(false)}>
              <img
                className="w-4 cursor-pointer"
                src="/images/icons/close.png"
                alt=""
              />
            </button>
            <h1 className="text-4xl">CART</h1>

            {/* Added Items */}
            <ul className="flex-grow flex flex-col gap-3">
              {items.map((item) => {
                return (
                  <CartItem item={item} setActive={setActive} key={item.id} />
                );
              })}
            </ul>

            {/* Count / Total */}
            <p className="text-gray-2">
              {count} {count == 1 ? "Item" : "Items"}
            </p>
            <div className="border-t px-2 pt-4 flex flex-col gap-4 text-lg">
              <p>Total: ${total}</p>
              <Link
                to="checkout"
                className="self-end border rounded-xl px-2.5 py-1 text-base"
                onClick={(e) => {
                  if (items.length == 0) {
                    e.preventDefault();
                  } else {
                    clearCart();
                    setActive(false);
                  }
                }}
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
