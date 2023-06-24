export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || [];

const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  DELETE_ONE_PROD: 'DELETE_ONE_PROD',
};

const updateLocalStorage = state => {
  localStorage.setItem('cart', JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { id } = actionPayload;
      const prodInCart = state.findIndex(item => item.id === id);
      if (prodInCart >= 0) {
        const newState = structuredClone(state);
        newState[prodInCart].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }
      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      const newState = state.filter(item => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTIONS.CLEAR_CART: {
      localStorage.removeItem('cart');
      return cartInitialState;
    }
    case CART_ACTIONS.DELETE_ONE_PROD: {
      const { id } = actionPayload;
      const prodInCart = state.findIndex(item => item.id === id);
      if (state[prodInCart].quantity > 1) {
        const newState = structuredClone(state);
        newState[prodInCart].quantity -= 1;
        updateLocalStorage(newState);
        return newState;
      } else {
        const newState = state.filter(item => item.id !== id);
        updateLocalStorage(newState);
        return newState;
      }
    }
  }
  return state;
};
