import { products } from './catalog.js';
import { filterProducts } from './filter.js';
import { renderProducts } from './ui.js';

const form = document.getElementById('catalog-filters');
const search = document.getElementById('catalog-search');
const group = document.getElementById('catalog-group');
const sort = document.getElementById('catalog-sort');
const count = document.getElementById('result-count');
const grid = document.getElementById('catalog-grid');
const empty = document.getElementById('catalog-empty');
const params = new URLSearchParams(location.search);
search.value = params.get('q') || '';
const groupValue = params.get('group') || 'all';
if ([...group.options].some(option => option.value === groupValue)) group.value = groupValue;

function update() {
  const results = filterProducts(products, { query: search.value, group: group.value, sort: sort.value });
  renderProducts(grid, results);
  count.textContent = `${results.length} sản phẩm`;
  empty.hidden = results.length !== 0;
  const url = new URL(location.href);
  search.value.trim() ? url.searchParams.set('q', search.value.trim()) : url.searchParams.delete('q');
  group.value !== 'all' ? url.searchParams.set('group', group.value) : url.searchParams.delete('group');
  history.replaceState(null, '', url);
}
form.addEventListener('submit', event => { event.preventDefault(); update(); });
search.addEventListener('input', update);
group.addEventListener('change', update);
sort.addEventListener('change', update);
update();
