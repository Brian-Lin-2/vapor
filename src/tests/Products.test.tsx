import { render, screen } from "@testing-library/react";
import Products from "../pages/products/Products";
import { type Game } from "../utils/types";
import { defaultGame } from "./defaultObj";

describe("Rendering:", () => {
  it("Title is rendered", () => {
    const gamesMock: Game[] = [{ ...defaultGame, id: 1, name: "test" }];

    render(<Products games={gamesMock} />);

    expect(screen.getByText("test"));
  });
});
