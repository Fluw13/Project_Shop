import { products } from './catalog.js';
import { renderProducts } from './ui.js';

const picks = ['kimestu-no-yaiba-1', 'attack-on-titan-6', 'adidas-2', 'air-force-1-7', 'ring-8', 'watch-9', 'adidas-6', 'kimestu-no-yaiba-5'];
const selected = picks.map(id => products.find(item => item.id === id)).filter(Boolean);
renderProducts(document.getElementById('featured-grid'), selected);
