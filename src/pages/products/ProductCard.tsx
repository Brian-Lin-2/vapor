import { useContext } from "react";
import { Link } from "react-router-dom";
import { type GamePreview } from "../../utils/types";
import { CartContext } from "../cart/CartContext";

export default function ProductCard({ game }: { game: GamePreview }) {
  const platforms = game.parent_platforms.filter((item) => {
    return "pc, playstation, xbox, nintendo, ios".includes(item.platform.slug);
  });

  const { items, addItem } = useContext(CartContext);

  // Check to see if game is added.
  function isAdded() {
    return items.find((e) => e.id == game.id);
  }

  return (
    <Link
      to={game.slug}
      state={game}
      className="bg-gray-3 rounded-lg overflow-hidden cursor-pointer"
    >
      <img
        className="h-[35vh] w-full object-cover"
        src={game.background_image}
        alt={game.slug}
      />
      <div className="flex flex-col px-4 py-3">
        <div className="flex justify-between items-center">
          <ul className="flex gap-2 w-4">
            {platforms.map((item) => {
              return (
                <img
                  src={`/images/icons/${item.platform.slug}.png`}
                  key={item.platform.id}
                />
              );
            })}
          </ul>
          <p className="text-gray-2">${game.price}</p>
        </div>
        <h1 className="text-xl mt-1.5">{game.name}</h1>
        <button
          className={`border px-2 rounded-md self-end mt-1.5 ${isAdded() && "border-none text-lg"}`}
          onClick={(e) => {
            e.preventDefault();
            addItem(game);
          }}
        >
          {isAdded() ? "✓" : "+"}
        </button>
      </div>
    </Link>
  );
}
