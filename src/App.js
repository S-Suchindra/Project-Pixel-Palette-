import './App.css';
import { useEffect, useState } from 'react';
import Audios from './Pages/Audios';
import EBooks from './Pages/EBooks';
import Movie from './Pages/Movie';
import Softwares from './Pages/Softwares';
import Webinars from './Pages/Classes';

function App() {
  const [page, setPage] = useState(window.location.hash.replace('#', '') || 'home');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => setPage(window.location.hash.replace('#', '') || 'home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const addToCart = (item) => setCart((items) => [...items, item]);
  const removeFromCart = (indexToRemove) => setCart((items) => items.filter((_, index) => index !== indexToRemove));
  const pageComponents = { movie: Movie, webinars: Webinars, ebooks: EBooks, softwares: Softwares, audios: Audios };
  const Page = pageComponents[page];

  return (
    <div className="App">
      <header className="site-header">
        <a className="brand-logo" href="#home" aria-label="Pixel Palette home"><img src="/pixel-palette-folder-logo.svg" alt="Pixel Palette Since 2026" /></a>
        <nav className="main-nav" aria-label="Browse digital products">
          <a href="#movie">Movies</a><a href="#webinars">Classes</a><a href="#ebooks">E-Books</a><a href="#softwares">Apps</a><a href="#audios">Music</a>
        </nav>
        <button className="cart-button" type="button" onClick={() => setCartOpen(true)}>Bag <span>{cart.length.toString().padStart(2, '0')}</span></button>
      </header>

      {Page ? <Page onAddToCart={addToCart} /> : <main className="home-page"><h1>Keep the good<br /><em>stuff close.</em></h1><p>Hand-picked films, classes, books, apps, and music for curious people who like discovering something new.</p><div className="home-links"><a href="#movie">Pick a film ↗</a><a href="#webinars">Learn something ↗</a><a href="#ebooks">Find a good read ↗</a></div></main>}

      <footer><span>Pixel Palette<span className="footer-dot">•</span></span></footer>

      {cartOpen && <div className="drawer-backdrop" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={(event) => event.stopPropagation()} aria-label="Shopping bag">
        <div className="drawer-header"><div><p className="eyebrow">Your collection</p><h2>Your bag <span>{cart.length}</span></h2></div><button className="close-button" type="button" onClick={() => setCartOpen(false)} aria-label="Close bag">×</button></div>
        {cart.length === 0 ? <div className="empty-bag"><span>✦</span><p>Your bag is waiting<br />for something good.</p></div> : <><div className="cart-items">{cart.map((item, index) => <div className="cart-item" key={`${item.title}-${index}`}><div className="cart-thumb"><img src={item.image} alt="" /></div><div><h3>{item.title}</h3><p>${item.price}</p></div><button type="button" onClick={() => removeFromCart(index)} aria-label={`Remove ${item.title}`}>×</button></div>)}</div><div className="cart-total"><span>Total</span><strong>${cart.reduce((total, item) => total + item.price, 0)}</strong></div><button className="checkout-button" type="button">Checkout <span>↗</span></button></>}
      </aside></div>}
    </div>
  );
}

export default App;
