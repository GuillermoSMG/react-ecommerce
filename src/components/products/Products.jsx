import { useCart } from '../../hooks/useCart.js';
import Product from '../product/Product.jsx';
import './Products.css';

function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProdInCart = prod => {
    return cart?.some(item => item.id === prod.id);
  };
  return (
    <main className='products'>
      <ul>
        {products?.slice(0, 10).map(product => {
          const isProdInCart = checkProdInCart(product);
          return (
            <Product
              key={product.id}
              isProdInCart={isProdInCart}
              product={product}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
            />
          );
        })}
      </ul>
    </main>
  );
}
export default Products;
