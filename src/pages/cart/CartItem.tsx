import { useContext } from "react";
import { CartContext } from "./CartContext";
import { GamePreview } from "../../utils/types";
import { Link } from "react-router-dom";

export default function CartItem({
  item,
  setActive,
}: {
  item: GamePreview;
  setActive: (e: boolean) => void;
}) {
  const { removeItem } = useContext(CartContext);

  return (
    <Link
      to={`products/${item.slug}`}
      state={item}
      onClick={() => setActive(false)}
      className="rounded-lg bg-gray-3"
    >
      <img
        className="rounded-t-lg"
        src={item.background_image}
        alt="game image"
      />
      <div className="p-3">
        <h1>{item.name}</h1>
        <div className="flex justify-between mt-0.5">
          <p className="text-gray-2 text-sm">{item.price}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              removeItem(item);
            }}
          >
            <img className="w-4" src="/images/icons/trash-can.png" alt="" />
          </button>
        </div>
      </div>
    </Link>
  );
}
