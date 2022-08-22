import { useShoppingCart } from "../context/ShoppingCartContext";

export function useContextValues() {
  const {
    cartItems,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    resetCart,
  } = useShoppingCart();

  return {
    cartItems,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    resetCart,
  };
}
