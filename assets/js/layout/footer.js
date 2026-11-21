class FluwFooter extends HTMLElement {
  connectedCallback() {
    const root = this.getAttribute('base-path') || './';
    this.innerHTML = `
      <footer class="site-footer">
        <div class="site-footer__main">
          <div>
            <a href="${root}index.html" class="footer-brand">FLUW<span>SHOP.</span></a>
            <p>Flow your way. Chọn phong cách, tạo dấu ấn riêng.</p>
          </div>
          <div><h3>Khám phá</h3>
            <a href="${root}pages/shop.html">Toàn bộ sản phẩm</a>
            <a href="${root}pages/shop.html?group=shirt">Thời trang</a>
            <a href="${root}pages/shop.html?group=shoe">Giày dép</a>
            <a href="${root}pages/shop.html?group=accessory">Phụ kiện</a>
          </div>
          <div><h3>Thông tin</h3>
            <a href="${root}pages/about.html">Giới thiệu & lưu ý</a>
            <a href="${root}pages/cart.html">Giỏ hàng</a>
            <p class="footer-small">Giá, hình ảnh và quy trình đặt hàng hiện phục vụ bản trình diễn.</p>
          </div>
        </div>
        <div class="site-footer__bottom"><span>© ${new Date().getFullYear()} FLUW SHOP</span><span>Website thử nghiệm · Chưa nhận đơn hoặc thanh toán thật</span></div>
      </footer>`;
  }
}
if (!customElements.get('fluw-footer')) customElements.define('fluw-footer', FluwFooter);
