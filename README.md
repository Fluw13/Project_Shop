# FLUW Shop — Storefront v2

Trang web cửa hàng FLUW, xây dựng trên dự án HTML/CSS/JavaScript gốc. Giữ nguyên các bộ ảnh, dữ liệu của 6 danh mục (60 sản phẩm) và các URL danh mục cũ.

## Chạy thử

Cần máy chủ HTTP tĩnh vì JavaScript dùng ES modules.

```bash
python -m http.server 5500
```

Mở `http://localhost:5500/`. Có thể dùng VS Code Live Server thay cho Python.

```bash
npm test
```

Bộ kiểm thử dùng Node.js 22, không cần `npm install`.

## Tính năng

- Trang chủ, danh mục, tìm kiếm có/không dấu, lọc và sắp xếp theo giá.
- Trang chi tiết 60 sản phẩm và giỏ hàng lưu bằng localStorage trong trình duyệt.
- Xem trước đơn hàng với dữ liệu mẫu; **không gửi đơn hàng hay thanh toán thật**.
- Các danh mục cũ vẫn truy cập được qua `pages/shop/list-*`.
- Header, footer, CSS và JavaScript được tách riêng để bảo trì.

## Lưu ý trước khi mở bán

Đây là **bản storefront demo**. Chưa có backend, API đơn hàng, xác thực tài khoản, database, quản lý tồn kho, email, vận chuyển hay thanh toán thật. Không nhập thông tin cá nhân hoặc thanh toán tại các trang demo. Cần xác minh quyền sử dụng hình ảnh, thương hiệu và tính chính xác của giá bán trước khi thương mại hóa.

Các trang đăng nhập/đăng ký cũ đã được thay bằng thông báo chưa khả dụng nhằm tránh giả vờ rằng đã có xác thực thật.

Xem [báo cáo kiểm thử](QA_REPORT.md) để biết phạm vi đã và chưa kiểm tra.
