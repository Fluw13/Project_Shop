import { parsePrice } from '../shop/money.js';
import { renderProducts } from '../shop/ui.js';

export function RenderProduct(dataArray, containerID) {
  if (typeof document === 'undefined') return;
  const container = document.getElementById(containerID);
  if (!container) return;
  const categoryId = window.location.pathname.split('/').pop().replace(/\.html$/i, '');
  const products = dataArray.map(item => {
    const imagePath = String(item.img ?? '');
    const position = imagePath.indexOf('assets/img/');
    return {
      id: `${categoryId}-${item.id}`,
      name: item.name,
      price: parsePrice(item.price),
      image: position >= 0 ? imagePath.slice(position) : '',
      categoryName: container.dataset.categoryName || 'Fluw Shop'
    };
  });
  renderProducts(container, products);
}
