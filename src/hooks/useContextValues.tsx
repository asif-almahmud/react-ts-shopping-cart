import { useShoppingCart } from "../context/ShoppingCartContext";

export function useContextValues() {
  const {
    cartItems,
    cartQuantity,
    findItemQuantity,
    addToCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    resetCart,
    cartIsShown,
    showCart,
  } = useShoppingCart();

  return {
    cartItems,
    cartQuantity,
    findItemQuantity,
    addToCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    resetCart,
    cartIsShown,
    showCart,
  };
}
