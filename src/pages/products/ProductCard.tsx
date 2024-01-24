import { type Game } from "../../utils/types";

export default function ProductCard({ game }: { game: Game }) {
  return (
    <div>
      <div>
        <ul className="flex gap-2 w-4">
          {game.parent_platforms.map((item) => {
            console.log(item.platform.name);
            return (
              <img
                src={`/images/icons/${item.platform.name.toLowerCase()}.png`}
                alt=""
                key={item.platform.id}
              />
            );
          })}
        </ul>
        <p>{game.price}</p>
      </div>
      <h1>{game.name}</h1>
      <button>+</button>
    </div>
  );
}
