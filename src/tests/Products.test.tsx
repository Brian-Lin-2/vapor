import { render, screen } from "@testing-library/react";
import Products from "../pages/products/Products";
import { BrowserRouter } from "react-router-dom";
import { type GamePreview } from "../utils/types";
import { defaultGame } from "./defaultObj";

describe("Rendering:", () => {
  it("Title is rendered", () => {
    const gamesMock: GamePreview[] = [{ ...defaultGame, id: 1, name: "test" }];

    render(
      <BrowserRouter>
        <Products games={gamesMock} title="" />
      </BrowserRouter>
    );

    expect(screen.getByText("test"));
  });
});
