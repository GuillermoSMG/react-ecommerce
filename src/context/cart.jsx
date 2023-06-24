import { createContext } from 'react';
import { useCartReducer } from '../hooks/useCartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { addToCart, clearCart, state, removeFromCart, deleteOneProd, cant } =
    useCartReducer();

  return (
    <CartContext.Provider
      value={{
        addToCart,
        clearCart,
        cart: state,
        removeFromCart,
        deleteOneProd,
        cant,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
