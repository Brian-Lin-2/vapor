import { ReactNode, createContext, useState } from "react";
import { type GamePreview } from "../../utils/types";

type CartContextType = {
  items: GamePreview[];
  addItem: (item: GamePreview) => void;
  removeItem: (item: GamePreview) => void;
};

export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<GamePreview[]>([]);

  function addItem(item: GamePreview) {
    // Make sure item isn't already in cart.
    if (!items.find((e) => e.id == item.id)) {
      setItems([...items, item]);
    }
  }

  function removeItem(item: GamePreview) {
    setItems(items.filter((e) => e.id != item.id));
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
