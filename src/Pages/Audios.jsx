import CategoryPage from '../components/CategoryPage';
import products from '../data/products';
import './Audios.css';

function Audios({ onAddToCart }) {
  return <CategoryPage data={products.audios} onAddToCart={onAddToCart} />;
}

export default Audios;
