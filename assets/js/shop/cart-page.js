import { getProductById } from './catalog.js';
import { getCart, setQuantity, removeFromCart, MAX_QUANTITY } from './cart.js';
import { formatPrice } from './money.js';
import { rootPath } from './ui.js';

const itemsContainer = document.getElementById('cart-items');
const empty = document.getElementById('cart-empty');
const summary = document.getElementById('cart-summary');
const subtotal = document.getElementById('cart-subtotal');
const itemsText = document.getElementById('cart-quantity');
const root = rootPath();

function render() {
  const rows = getCart().map(item => ({ ...item, product: getProductById(item.id) })).filter(row => row.product);
  itemsContainer.replaceChildren();
  empty.hidden = rows.length > 0;
  summary.hidden = rows.length === 0;
  let total = 0;
  let count = 0;
  for (const row of rows) {
    const { product, quantity } = row;
    count += quantity;
    total += product.price * quantity;
    const article = document.createElement('article');
    article.className = 'cart-item';
    const link = document.createElement('a');
    link.href = `${root}pages/product.html?id=${encodeURIComponent(product.id)}`;
    const image = document.createElement('img');
    image.src = `${root}${product.image}`;
    image.alt = product.name;
    image.loading = 'lazy';
    link.append(image);
    const details = document.createElement('div');
    const name = document.createElement('a');
    name.className = 'cart-item__title';
    name.href = link.href;
    name.textContent = product.name;
    const category = document.createElement('p');
    category.className = 'muted';
    category.textContent = product.categoryName;
    const price = document.createElement('strong');
    price.textContent = formatPrice(product.price);
    details.append(name, category, price);
    const actions = document.createElement('div');
    actions.className = 'cart-item__actions';
    const qty = document.createElement('input');
    qty.className = 'qty-input';
    qty.type = 'number';
    qty.min = '1';
    qty.max = String(MAX_QUANTITY);
    qty.value = String(quantity);
    qty.setAttribute('aria-label', `Số lượng ${product.name}`);
    qty.addEventListener('change', () => {
      const value = Number(qty.value);
      if (!Number.isInteger(value) || value < 1 || value > MAX_QUANTITY) { qty.value = String(quantity); return; }
      setQuantity(product.id, value);
      render();
    });
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'text-button';
    remove.textContent = 'Xóa';
    remove.setAttribute('aria-label', `Xóa ${product.name} khỏi giỏ`);
    remove.addEventListener('click', () => { removeFromCart(product.id); render(); });
    actions.append(qty, remove);
    article.append(link, details, actions);
    itemsContainer.append(article);
  }
  subtotal.textContent = formatPrice(total);
  itemsText.textContent = `${count} sản phẩm`;
}
window.addEventListener('storage', render);
render();
