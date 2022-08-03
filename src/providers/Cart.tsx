import { createContext, ReactNode, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Coffee } from '../models/coffee';

export interface Item {
  id: string;
  coffee: Coffee;
  amount: number;
}

interface CartContextData {
  items: Item[];
  addItem: (coffee: Coffee, amount: number) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  const removeItem = (id: string): void => {
    setItems((oldItems) => oldItems.filter((item) => item.coffee.id !== id));
  };

  const addItem = (coffee: Coffee, amount: number): void => {
    if (amount === 0) {
      removeItem(coffee.id);
      return;
    }

    const index = items.findIndex((item) => item.coffee.id === coffee.id);

    const filteredItems = items.filter((item) => item.coffee.id !== coffee.id);

    const item = { id: uuid(), coffee, amount };
    filteredItems.splice(index, 0, item);

    const newItems = index >= 0 ? filteredItems : [...items, item];

    setItems(newItems);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>{children}</CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

export { CartProvider, useCart };
