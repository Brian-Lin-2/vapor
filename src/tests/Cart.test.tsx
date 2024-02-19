import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartContext } from "../pages/cart/CartContext";
import { defaultGame } from "./defaultObj";
import Cart from "../pages/cart/Cart";
import { type GamePreview } from "../utils/types";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Correct Count / Total:", () => {
  // Default functions.
  const addItem = vi.fn();
  const removeItem = vi.fn();
  const clearCart = vi.fn();

  // Open cart with default values.
  async function setCart(items: GamePreview[]) {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
          <Cart />
        </CartContext.Provider>
      </BrowserRouter>
    );

    const button = screen.getByRole("button");
    await user.click(button);
  }

  it("cart opens on click", async () => {
    await setCart([]);

    expect(screen.getByText("CART"));
  });

  it("0 items", async () => {
    await setCart([]);

    expect(screen.getByText(/0 Items/) && screen.getByText(/0.00/));
  });

  it("1 item", async () => {
    await setCart([defaultGame]);

    expect(screen.getByText(/1 Item/) && screen.getAllByText(/49.99/));
  });

  it("2 items", async () => {
    await setCart([defaultGame, { ...defaultGame, id: 1 }]);

    expect(screen.getByText(/2 Items/) && screen.getByText(/99.98/));
  });

  it("10 item", async () => {
    const games = [];

    for (let i = 0; i < 10; i++) {
      games.push({ ...defaultGame, id: i });
    }

    await setCart(games);

    expect(screen.getByText(/10 Items/) && screen.getByText(/499.90/));
  });

  it("50 items", async () => {
    const games = [];

    for (let i = 0; i < 50; i++) {
      games.push({ ...defaultGame, id: i });
    }

    await setCart(games);

    expect(screen.getByText(/50 Items/) && screen.getByText(/2499.50/));
  });
});
