import { useState } from 'react';
import './CategoryPage.css';

function CategoryPage({ data, onAddToCart }) {
  const [query, setQuery] = useState('');
  const filteredItems = data.items.filter((item) => `${item.title} ${item.type} ${item.description}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <main className="category-page">
      <section className={`category-hero category-${data.accent}`}>
        <div>
          <p className="eyebrow">Pixel Palette / {data.label}</p>
          <h1>{data.title}</h1>
          <p className="category-intro">{data.intro}</p>
        </div>
        <div className="category-mark" aria-hidden="true"><span>✦</span><small>EDITED<br />WITH<br />CARE</small></div>
      </section>
      <section className="category-content">
        <div className="category-toolbar"><p>{filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} to explore</p><label><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Look for something" /></label></div>
        <div className="category-grid">
          {filteredItems.map((item) => <article className="category-card" key={item.title}>
            <div className={`category-image category-${data.accent}`}><img src={item.image} alt="" /><span>{item.type}</span><button type="button" onClick={() => onAddToCart(item)} aria-label={`Add ${item.title} to bag`}>+</button></div>
            <div className="category-card-info"><div><h2>{item.title}</h2><p>{item.description}</p></div><strong>${item.price}</strong></div>
          </article>)}
        </div>
        {filteredItems.length === 0 && <p className="no-results">We could not find that one. Try another word.</p>}
      </section>
    </main>
  );
}

export default CategoryPage;
