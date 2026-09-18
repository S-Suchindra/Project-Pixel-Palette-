import CategoryPage from '../components/CategoryPage';
import products from '../data/products';
import './Softwares.css';

function Softwares({ onAddToCart }) {
  return <CategoryPage data={products.softwares} onAddToCart={onAddToCart} />;
}

export default Softwares;
