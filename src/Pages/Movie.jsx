import CategoryPage from '../components/CategoryPage';
import products from '../data/products';
import './Movie.css';

function Movie({ onAddToCart }) {
  return <CategoryPage data={products.movie} onAddToCart={onAddToCart} />;
}

export default Movie;
