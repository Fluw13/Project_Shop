export const header = [
    {id: 1, Name: "Main logo header", img: "assets/img/logo-shop.img/logo-main.png"}
];

import { initmenu } from "../assets.menu/menu.js";

class FluwHeader extends HTMLElement {
    // Hàm này sẽ tự động chạy ngay khi cái thẻ <fluw-header> xuất hiện trên màn hình
    connectedCallback() {
        // 1. Đọc "tọa độ" từ thuộc tính base-path mà file HTML truyền vào
        // Nếu file HTML không truyền gì, mặc định nó hiểu là "./"
        const basePath = this.getAttribute('base-path') || "./";

        // 2. Tự động vẽ giao diện
        this.innerHTML = `
            <header>
                <div class="head-left"></div>
                <h1 class="Logo">
                    <a href="${basePath}index.html"><img src="${basePath}${header[0].img}" alt="Logo FLuw Shop"></a>
                </h1>
                <nav class="search-login-translan">
                    <ul>
                        <li class="logo-search"><a href="#"><i class="bi bi-search text-white"></i></a></li>
                        <li class="logo-giohang"><a href="#"><i class="bi bi-cart text-white"></i></a></li>
                        <li class="logo-login"><a href="${basePath}pages/auth/login.html"><i class="bi bi-person-circle text-white"></i></a></li>
                    </ul>
                    <button class="open-btn" id="open-btn" aria-label="Open menu">
                        <i class="bi bi-list text-white"></i>
                    </button>
                </nav>
                <div class="overlay" id="overlay"></div>
                <div>
                    <aside class="part-menu" id="part-menu">
                        <button class="text-end" id="text-end" aria-label="Close menu">
                            <i class="bi bi-x-circle-fill"></i>
                        </button>
                        <a href="${basePath}index.html">Home</a>
                        <a href="#" class="open-sub-trigger" data-target="sub-menu">Shop</a>
                        <a href="#">New Arrivals</a>
                        <a href="#">News</a>
                        <a href="#">Contact</a>
                    </aside>
                    <aside class="part-menu sub-menu" id="sub-menu">
                        <button class="text-end back-sub-trigger" data-target="sub-menu" aria-label="Return menu">
                            <i class="bi bi-arrow-left"></i>
                        </button>
                        <a href="#" class="open-sub-trigger" data-target="sub2-menu">Shirt</a>
                        <a href="#" class="open-sub-trigger" data-target="sub3-menu">Sneaker</a>
                        <a href="#" class="open-sub-trigger" data-target="sub4-menu">Accessory</a>
                    </aside>
                    <aside class="part-menu sub-menu" id="sub2-menu">
                        <button class="text-end back-sub-trigger" data-target="sub2-menu" aria-label="Return menu">
                            <i class="bi bi-arrow-left"></i>
                        </button>
                        <a href="${basePath}pages/shop/list-shirt/kimestu-no-yaiba.html">Kimestu-no-yaiba</a>
                        <a href="${basePath}pages/shop/list-shirt/attack-on-titan.html">Attack-on-titan</a>
                    </aside>
                    <aside class="part-menu sub-menu" id="sub3-menu">
                        <button class="text-end back-sub-trigger" data-target="sub3-menu" aria-label="Return menu">
                            <i class="bi bi-arrow-left"></i>
                        </button>
                        <a href="${basePath}/pages/shop/list-shoe/adidas.html">Adidas</a>
                        <a href="${basePath}pages/shop/list-shoe/air-force-1.html">Air Force 1</a>
                    </aside>
                    <aside class="part-menu sub-menu" id="sub4-menu">
                        <button class="text-end back-sub-trigger" data-target="sub4-menu" aria-label="Return menu">
                            <i class="bi bi-arrow-left"></i>
                        </button>
                        <a href="${basePath}pages/shop/list-accessory/ring.html">Ring</a>
                        <a href="${basePath}pages/shop/list-accessory/watch.html">Watch</a>
                    </aside>
                </div>
            </header>
        `;
        initmenu(this);
    }
}

customElements.define('fluw-header', FluwHeader);