import { addToCart } from './cart.js';
import { formatPrice } from './money.js';

export function rootPath() {
  return document.querySelector('fluw-header')?.getAttribute('base-path') || './';
}

export function productCard(product, root = rootPath()) {
  const card = document.createElement('article');
  card.className = 'store-product';
  const imageLink = document.createElement('a');
  imageLink.href = `${root}pages/product.html?id=${encodeURIComponent(product.id)}`;
  imageLink.className = 'store-product__image';
  imageLink.setAttribute('aria-label', `Xem ${product.name}`);
  const image = document.createElement('img');
  image.src = `${root}${product.image}`;
  image.alt = product.name;
  image.loading = 'lazy';
  image.decoding = 'async';
  imageLink.append(image);
  const content = document.createElement('div');
  content.className = 'store-product__content';
  const tag = document.createElement('span');
  tag.className = 'eyebrow';
  tag.textContent = product.categoryName;
  const title = document.createElement('h3');
  title.className = 'store-product__title';
  const titleLink = document.createElement('a');
  titleLink.href = imageLink.href;
  titleLink.textContent = product.name;
  title.append(titleLink);
  const actions = document.createElement('div');
  actions.className = 'store-product__actions';
  const price = document.createElement('strong');
  price.textContent = formatPrice(product.price);
  const add = document.createElement('button');
  add.type = 'button';
  add.className = 'small-add';
  add.textContent = '+ Thêm';
  add.setAttribute('aria-label', `Thêm ${product.name} vào giỏ hàng`);
  add.addEventListener('click', () => {
    const success = addToCart(product.id);
    const before = add.textContent;
    add.textContent = success ? 'Đã thêm ✓' : 'Không thể lưu';
    window.setTimeout(() => { add.textContent = before; }, 1300);
  });
  actions.append(price, add);
  content.append(tag, title, actions);
  card.append(imageLink, content);
  return card;
}

export function renderProducts(container, items) {
  if (!container) return;
  container.replaceChildren(...items.map(item => productCard(item)));
}
