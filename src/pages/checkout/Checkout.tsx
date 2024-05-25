import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center gap-2">
      <img className="w-16" src="images/icons/checkout.png" alt="" />
      <div className="text-center">
        <h1 className="text-3xl font-bold">Thank You!</h1>
        <p className="text-gray-2">
          Order #{Math.floor(Math.random() * 100000)}
        </p>
      </div>

      <Link
        to="/products"
        className="text-sm border rounded-2xl px-2.5 py-1.5 hover:bg-white hover:text-black"
      >
        Browse More
      </Link>
    </div>
  );
}
