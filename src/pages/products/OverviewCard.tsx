export default function OverviewCard<T extends { id: number; name: string }>({
  name,
  info,
}: {
  name: string;
  info: string | T[];
}) {
  // Non array cards.
  if (typeof info === "string") {
    // Website.
    if (name == "Website") {
      return (
        <>
          <h3>{name}</h3>
          <a
            href={info}
            target="_blank"
            className="text-gray-2 text-sm cursor-pointer overflow-hidden text-ellipsis hover:text-blue-400"
          >
            {info}
          </a>
        </>
      );
    }

    // Regular card.
    else {
      return (
        <>
          <h3>{name}</h3>
          <span className="text-gray-2 text-sm">{info}</span>
        </>
      );
    }
  }

  // Array cards.
  return (
    <>
      <h3>{name}</h3>
      <ul className="text-gray-2 text-sm">
        {info.map((e) => {
          return (
            <li key={e.id}>
              {/* Ensures first character is capitalized. */}
              {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
            </li>
          );
        })}
      </ul>
    </>
  );
}
