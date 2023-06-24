import { AddToCartIcon, RemoveFromCartIcon } from '../Icons';

function Product({ product, addToCart, removeFromCart, isProdInCart }) {
  return (
    <li>
      <img
        src={product.thumbnail}
        alt={product.title}
      />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <div>
        <button
          title={`Add ${product.title} to Cart`}
          onClick={addToCart}
        >
          <AddToCartIcon />
        </button>
        <button
          title={`Remove ${product.title} from Cart`}
          onClick={removeFromCart}
          disabled={!isProdInCart}
        >
          <RemoveFromCartIcon />
        </button>
      </div>
    </li>
  );
}
export default Product;
