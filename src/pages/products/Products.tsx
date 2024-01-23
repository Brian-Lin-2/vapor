import { type Game } from "../../utils/types";

export default function Products({ games }: { games: Game[] }) {
  console.log(JSON.stringify(games[0]));
  return (
    <>
      {games.map((game: Game) => {
        return <div key={game.id}>{game.name}</div>;
      })}
    </>
  );
}
