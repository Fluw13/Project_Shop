# FLUW Shop v2 — Kiểm tra và giới hạn

## Đã kiểm tra

- Đối chiếu trực tiếp GitHub `Fluw13/Project_Shop` (nhánh `main`): tất cả 6 file dữ liệu sản phẩm tồn tại, mỗi file 10 sản phẩm, tổng cộng 60.
- Đối chiếu với cây file GitHub: 60/60 đường dẫn ảnh sản phẩm và 4 ảnh chính của trang chủ tồn tại.
- Bộ kiểm thử tự động Node `npm test`: 4/4 đạt với dữ liệu fixture mô phỏng cấu trúc 6 danh mục (xử lý giá, danh mục/id, lọc và giỏ hàng).
- `node --check`: không phát hiện lỗi cú pháp JS trong các file module được kiểm tra.
- Kiểm tra HTML: 15 trang, không phát hiện đường dẫn nội bộ thiếu file trong gói ngoài những đường dẫn được giữ lại trỏ tới dữ liệu/ảnh gốc có trên GitHub.
- Kiểm tra tính hợp lệ ZIP: đạt.

## Chưa được kiểm tra thành công

- Không thể chạy E2E bằng Chromium trong môi trường này do truy cập URL bị chặn bởi policy của môi trường (`ERR_BLOCKED_BY_ADMINISTRATOR`). Vì vậy **chưa tuyên bố giao diện hoạt động hoàn chỉnh trên trình duyệt thực tế**.
- Chưa chạy PowerShell installer trên Windows thực tế trong môi trường này. Installer có kiểm tra repo, trạng thái Git và sao lưu.
- Chưa test trên các kích thước màn hình thực tế hay đo Lighthouse.
- Chưa kết nối back-end, database, tồn kho, tài khoản hoặc thanh toán.

## Triển khai an toàn

1. Dùng một bản sao của project hoặc nhánh riêng.
2. Chạy `apply_upgrade.ps1` từ folder khác với project (script từ chối ghi đè khi Git chưa commit hết thay đổi và dừng nếu repo không khớp).
3. Mở `http://localhost:5500/`, kiểm tra ảnh, giá, xem chi tiết, giỏ hàng và luồng checkout demo.
4. Chạy `npm test`, xem thay đổi bằng `git diff`, kiểm tra quyền sử dụng ảnh/nội dung rồi mới push branch.
5. Không bật nhận đơn thật hoặc thanh toán thật chỉ bằng bộ code này.
