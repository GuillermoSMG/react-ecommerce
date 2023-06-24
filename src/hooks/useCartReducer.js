import { useEffect, useReducer, useState } from 'react';
import { cartInitialState, cartReducer } from '../reducer/cartReducer.js';

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const [cant, setCant] = useState(0);

  useEffect(() => {
    setCant(state.reduce((acc, item) => acc + item.quantity, 0));
  }, [state]);

  const addToCart = product =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });

  const removeFromCart = product =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    });

  const deleteOneProd = product =>
    dispatch({
      type: 'DELETE_ONE_PROD',
      payload: product,
    });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return { cant, state, addToCart, removeFromCart, clearCart, deleteOneProd };
}
