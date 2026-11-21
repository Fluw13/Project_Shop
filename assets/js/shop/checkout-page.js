import { getCart } from './cart.js';
import { getProductById } from './catalog.js';
import { formatPrice } from './money.js';

const preview = document.getElementById('checkout-preview');
const form = document.getElementById('demo-order-form');
const receipt = document.getElementById('demo-receipt');
const checkoutStatus = document.getElementById('checkout-status');

function readRows() {
  return getCart().map(row => ({ ...row, product: getProductById(row.id) })).filter(row => row.product);
}

function renderSummary() {
  const rows = readRows();
  preview.replaceChildren();
  const total = rows.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  for (const item of rows) {
    const p = document.createElement('p');
    p.className = 'summary-row';
    const label = document.createElement('span');
    label.textContent = `${item.product.name} × ${item.quantity}`;
    const price = document.createElement('strong');
    price.textContent = formatPrice(item.product.price * item.quantity);
    p.append(label, price);
    preview.append(p);
  }
  document.getElementById('checkout-total').textContent = formatPrice(total);
  form.hidden = rows.length === 0;
  checkoutStatus.hidden = rows.length !== 0;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity() || !readRows().length) return;
  form.hidden = true;
  receipt.hidden = false;
  const orderCount = readRows().reduce((sum, row) => sum + row.quantity, 0);
  const total = readRows().reduce((sum, row) => sum + row.product.price * row.quantity, 0);
  document.getElementById('receipt-content').textContent = `Đã mô phỏng đơn gồm ${orderCount} sản phẩm, tạm tính ${formatPrice(total)}. Không có đơn hàng nào được gửi đi và không có khoản thanh toán nào được thực hiện.`;
});
renderSummary();
