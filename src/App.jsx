import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import Products from './components/products/Products';
import { CartProvider } from './context/cart.jsx';
import { useFilters } from './hooks/useFilters';
import { products as initialProducts } from './mocks/products.json';

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Cart />
      <Header />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
