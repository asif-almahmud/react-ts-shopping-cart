import { useState, createContext, useContext, ReactNode } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type Id = number | string;

type CartItem = {
  id: Id;
  quantity: number;
};

type ShoppingCartContext = {
  cartItems: CartItem[];
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  resetCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: Id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: Id) {
    setCartItems((recentItems) => {
      console.log({ find: recentItems.find((item) => item.id === id) });
      if (recentItems.find((item) => item.id === id) === undefined) {
        return [...recentItems, { id, quantity: 1 }];
      } else {
        return recentItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  }

  function decreaseCartQuantity(id: Id) {
    setCartItems((recentItems) => {
      if (recentItems.find((item) => item.id === id)?.quantity === 1) {
        return recentItems.filter((item) => item.id !== id);
      } else {
        return recentItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  }

  function removeFromCart(id: Id) {
    setCartItems((recentItems) => recentItems.filter((item) => item.id !== id));
  }

  function resetCart(id: Id) {
    setCartItems([]);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        resetCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
