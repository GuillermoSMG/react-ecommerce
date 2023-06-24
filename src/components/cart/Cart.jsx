import { useId } from 'react';
import { CartIcon, ClearCartIcon } from '../Icons';

import { useCart } from '../../hooks/useCart';
import CartItem from '../cartItem/CartItem';
import './Cart.css';

function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, cant, addToCart, deleteOneProd } = useCart();
  return (
    <>
      <label
        htmlFor={cartCheckboxId}
        className='cart-button'
        title='Cart'
      >
        {cant}
        <CartIcon />
      </label>
      <input
        id={cartCheckboxId}
        type='checkbox'
        hidden
      />
      <aside className='cart'>
        <ul>
          {cart?.map(prod => (
            <CartItem
              key={prod.id}
              prod={prod}
              addToCart={() => addToCart(prod)}
              deleteOneProd={() => deleteOneProd(prod)}
            />
          ))}
        </ul>
        {cart.length > 0 ? (
          <button
            className='clear'
            title='Clear Cart'
            onClick={() => clearCart()}
          >
            <ClearCartIcon />
          </button>
        ) : (
          <strong>Cart Empty</strong>
        )}
      </aside>
    </>
  );
}
export default Cart;
