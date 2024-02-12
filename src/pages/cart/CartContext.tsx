import { ReactNode, createContext, useState } from "react";
import { type GamePreview } from "../../utils/types";

type CartContextType = {
  items: GamePreview[];
  addItem: (item: GamePreview) => void;
};

export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {
    console.log("default");
  },
});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<GamePreview[]>([]);

  function addItem(item: GamePreview) {
    // Make sure item isn't already in cart.
    if (!items.find((e) => e.id == item.id)) {
      setItems([...items, item]);
    }
  }

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
