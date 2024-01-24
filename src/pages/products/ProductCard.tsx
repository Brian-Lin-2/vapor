import { type Game } from "../../utils/types";

export default function ProductCard({ game }: { game: Game }) {
  const platforms = game.parent_platforms.filter((item) => {
    return "pc, playstation, xbox, nintendo, ios".includes(item.platform.slug);
  });

  return (
    <div className="m-6 bg-gray-3 rounded-lg overflow-hidden cursor-pointer">
      <img src={game.background_image} alt={game.slug} />
      <div className="flex flex-col px-4 pt-2 pb-3">
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
          <p className="text-gray-2">{game.price}</p>
        </div>
        <h1 className="text-xl mt-1.5">{game.name}</h1>
        <button className="border px-2 rounded-md self-end mt-1.5">+</button>
      </div>
    </div>
  );
}
