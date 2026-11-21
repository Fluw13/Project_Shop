import { cartCount } from '../shop/cart.js';

const navGroups = [
  ['Tất cả sản phẩm', 'pages/shop.html'],
  ['Thời trang', 'pages/shop.html?group=shirt'],
  ['Giày dép', 'pages/shop.html?group=shoe'],
  ['Phụ kiện', 'pages/shop.html?group=accessory']
];

class FluwHeader extends HTMLElement {
  connectedCallback() {
    const root = this.getAttribute('base-path') || './';
    this.innerHTML = `
      <div class="site-announcement">FLUW SHOP / THỜI TRANG & PHONG CÁCH CỦA BẠN</div>
      <header class="site-header">
        <a class="brand" href="${root}index.html" aria-label="Fluw Shop - về trang chủ">
          <img src="${root}assets/img/logo-shop.img/logo-main.png" alt="Fluw Shop" />
        </a>
        <nav id="main-navigation" class="site-nav" aria-label="Danh mục chính">
          ${navGroups.map(([text, path]) => `<a href="${root}${path}">${text}</a>`).join('')}
        </nav>
        <div class="header-actions">
          <form class="header-search" action="${root}pages/shop.html" role="search">
            <label class="sr-only" for="site-search">Tìm sản phẩm</label>
            <input id="site-search" type="search" name="q" placeholder="Tìm sản phẩm..." />
            <button type="submit" aria-label="Tìm kiếm">⌕</button>
          </form>
          <a class="header-cart" href="${root}pages/cart.html" aria-label="Xem giỏ hàng">Giỏ hàng <span class="cart-count" data-cart-count>0</span></a>
          <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="main-navigation" aria-label="Mở menu">☰</button>
        </div>
      </header>`;
    const menuButton = this.querySelector('.menu-toggle');
    const nav = this.querySelector('.site-nav');
    const closeMenu = () => { nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); };
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
    this.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    this._refreshCart = () => { const el = this.querySelector('[data-cart-count]'); if (el) el.textContent = cartCount(); };
    window.addEventListener('fluw:cart-change', this._refreshCart);
    window.addEventListener('storage', this._refreshCart);
    this._refreshCart();
  }
  disconnectedCallback() {
    window.removeEventListener('fluw:cart-change', this._refreshCart);
    window.removeEventListener('storage', this._refreshCart);
  }
}
if (!customElements.get('fluw-header')) customElements.define('fluw-header', FluwHeader);
