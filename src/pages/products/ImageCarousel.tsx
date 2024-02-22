import { type Screenshot } from "../../utils/types";
import { useState } from "react";

export default function ImageCarousel({ images }: { images: Screenshot[] }) {
  const [index, setIndex] = useState(0);

  function handleIndex(type: string) {
    if (type == "add") {
      // End of carousel.
      if (index == images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    } else if (type == "sub") {
      // Start of carousel.
      if (index == 0) {
        setIndex(images.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  }

  return (
    <div
      className="rounded-2xl h-[60vh] md:h-[65vh] bg-cover w-full flex md:w-1/2"
      style={{
        backgroundImage: `url('${images[index].image}')`,
      }}
      aria-label="image of game"
    >
      <button onClick={() => handleIndex("sub")}>
        <img
          className="rotate-90 w-10 opacity-75 hover:opacity-100"
          src="/images/icons/arrow.png"
        />
      </button>
      <div className="flex-grow flex gap-2 justify-center items-end">
        {images.map((e, i) => {
          return (
            // Active image has highlighted button.
            <button
              className={`border p-1.5 mb-2.5 rounded-full opacity-75 hover:opacity-100 hover:bg-white ${index == i ? "bg-white opacity-100" : ""}`}
              key={e.id}
              onClick={() => setIndex(i)}
            ></button>
          );
        })}
      </div>
      <button onClick={() => handleIndex("add")}>
        <img
          className="-rotate-90 w-10 opacity-75 hover:opacity-100"
          src="/images/icons/arrow.png"
        />
      </button>
    </div>
  );
}
