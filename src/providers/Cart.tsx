import { createContext, ReactNode, useContext, useState } from 'react';

import { Coffee } from '../models/coffee';

export interface Item {
  coffee: Coffee;
  amount: number;
}

interface CartContextData {
  items: Item[];
  addItem: (item: Item) => void;
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

  const addItem = (item: Item): void => {
    if (item.amount === 0) {
      removeItem(item.coffee.id);
      return;
    }

    const index = items.findIndex(({ coffee }) => coffee.id === item.coffee.id);

    const filteredItems = items.filter(({ coffee }) => coffee.id !== item.coffee.id);
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
