import CategoryPage from '../components/CategoryPage';
import products from '../data/products';
import './EBooks.css';

function EBooks({ onAddToCart }) {
  return <CategoryPage data={products.ebooks} onAddToCart={onAddToCart} />;
}

export default EBooks;
