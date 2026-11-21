import { getProductById } from './catalog.js';
import { addToCart, MAX_QUANTITY } from './cart.js';
import { formatPrice } from './money.js';
import { rootPath } from './ui.js';

const id = new URLSearchParams(location.search).get('id');
const product = getProductById(id);
const container = document.getElementById('product-detail');
const root = rootPath();
if (!product) {
  container.innerHTML = '<div class="empty-state"><h1>Không tìm thấy sản phẩm</h1><p>Sản phẩm có thể đã thay đổi hoặc đường dẫn không đúng.</p><a class="btn btn-primary" href="shop.html">Xem cửa hàng</a></div>';
} else {
  document.title = `${product.name} | Fluw Shop`;
  const imageWrap = document.createElement('div');
  imageWrap.className = 'detail-image';
  const image = document.createElement('img');
  image.src = `${root}${product.image}`;
  image.alt = product.name;
  imageWrap.append(image);
  const panel = document.createElement('div');
  panel.className = 'detail-info';
  const crumb = document.createElement('a');
  crumb.className = 'eyebrow text-link';
  crumb.href = `${root}${product.categoryPath}`;
  crumb.textContent = `← ${product.groupName} / ${product.categoryName}`;
  const title = document.createElement('h1');
  title.textContent = product.name;
  const price = document.createElement('strong');
  price.className = 'detail-price';
  price.textContent = formatPrice(product.price);
  const description = document.createElement('p');
  description.className = 'muted';
  description.textContent = 'Khám phá phong cách của bạn cùng FLUW. Hình ảnh, mức giá và thông tin sản phẩm đang được sử dụng trong bản trình diễn.';
  const controls = document.createElement('div');
  controls.className = 'detail-purchase';
  const quantityLabel = document.createElement('label');
  quantityLabel.textContent = 'Số lượng';
  quantityLabel.htmlFor = 'detail-qty';
  const quantity = document.createElement('input');
  quantity.id = 'detail-qty';
  quantity.className = 'qty-input';
  quantity.type = 'number';
  quantity.min = '1';
  quantity.max = String(MAX_QUANTITY);
  quantity.value = '1';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn btn-primary';
  button.textContent = 'Thêm vào giỏ hàng';
  const status = document.createElement('p');
  status.className = 'status-line';
  status.setAttribute('role', 'status');
  button.addEventListener('click', () => {
    const amount = Number(quantity.value);
    if (!Number.isInteger(amount) || amount < 1 || amount > MAX_QUANTITY) {
      status.textContent = `Vui lòng nhập từ 1 đến ${MAX_QUANTITY} sản phẩm.`;
      return;
    }
    const success = addToCart(product.id, amount);
    status.textContent = success ? 'Đã thêm vào giỏ hàng trên trình duyệt này.' : 'Không thể lưu giỏ hàng trên trình duyệt.';
  });
  const cartLink = document.createElement('a');
  cartLink.href = `${root}pages/cart.html`;
  cartLink.className = 'btn btn-secondary';
  cartLink.textContent = 'Xem giỏ hàng';
  controls.append(quantityLabel, quantity, button, cartLink);
  panel.append(crumb, title, price, description, controls, status);
  container.replaceChildren(imageWrap, panel);
}
