function CartItem({ prod, addToCart, deleteOneProd }) {
  return (
    <li>
      <img
        src={prod?.thumbnail}
        alt={prod?.title}
      />
      <div>
        <strong>{prod?.title}</strong> - ${prod?.price}
      </div>
      <footer>
        <small>Qty: {prod?.quantity}</small>
        <button
          title={`Add one ${prod.title} to Cart`}
          onClick={addToCart}
        >
          +
        </button>
        <button
          title={`Delete one ${prod.title} from Cart`}
          onClick={deleteOneProd}
        >
          -
        </button>
      </footer>
    </li>
  );
}
export default CartItem;
