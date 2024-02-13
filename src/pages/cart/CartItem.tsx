import { useContext } from "react";
import { CartContext } from "./CartContext";
import { GamePreview } from "../../utils/types";

export default function CardItem({ item }: { item: GamePreview }) {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="rounded-lg overflow-hidden bg-gray-3">
      <img src={item.background_image} alt="game image" />
      <div className="p-3">
        <h1>{item.name}</h1>
        <div className="flex justify-between mt-0.5">
          <p className="text-gray-2 text-sm">{item.price}</p>
          <button onClick={() => removeItem(item)}>
            <img className="w-4" src="/images/icons/trash-can.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
