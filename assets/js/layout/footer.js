export const footer = [
    {id: 1, Name: "Main logo footer", img: "assets/img/logo-shop.img/logo-main.png"}
];

class FluwFooter extends HTMLElement {
    // Hàm này sẽ tự động chạy ngay khi cái thẻ <fluw-header> xuất hiện trên màn hình
    connectedCallback() {
        // 1. Đọc "tọa độ" từ thuộc tính base-path mà file HTML truyền vào
        // Nếu file HTML không truyền gì, mặc định nó hiểu là "./"
        const basePath = this.getAttribute('base-path') || "./";

        // 2. Tự động vẽ giao diện
        this.innerHTML = `
            <footer>
                <figure class="logo-main-footer">
                    <img src="${basePath}${footer[0].img}" alt="Main logo for footer">
                </figure>
                <nav class="policies">
                    <h3 class="title-footer">Policies</h3>
                        <ul>
                            <li class="item"><a href="#">Chính Sách Bảo Mật</a></li>
                            <li class="item"><a href="#">Thông Tin Và Điều Kiện Giao Dịch Chung</a></li>
                            <li class="item"><a href="#">Chính Sách Bảo Hành</a></li>
                            <li class="item"><a href="#">Chính Sách Vận Chuyển, Giao Nhận</a></li>
                            <li class="item"><a href="#">Chính Sách Thanh Toán</a></li>
                        </ul>
                </nav>
                <nav class="information">
                    <h3 class="title-footer">Information</h3>
                        <ul>
                            <li class="item"><a href="#">Hộ Kinh Doanh Fluw</a></li>
                            <li class="item"><a href="#">Địa Chỉ: 6767 vuadanvuaxau</a></li>
                            <li class="item"><a href="#">Email: conglongdaichuadaidakhai</a></li>
                            <li class="item"><a href="#">Hotline: 09005509</a></li>
                            <li class="item"><a href="#">Website: http://Fluw.vn/</a></li>
                        </ul>
                </nav>
            </footer>
        `;
    }
}

customElements.define('fluw-footer', FluwFooter);
