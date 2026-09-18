import CategoryPage from '../components/CategoryPage';
import products from '../data/products';
import './Classes.css';

function Webinars({ onAddToCart }) {
  return <CategoryPage data={products.webinars} onAddToCart={onAddToCart} />;
}

export default Webinars;
