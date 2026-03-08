function initmenu() {
    // 1. Khai báo các biến dùng chung toàn cục
    const overlay = document.getElementById("overlay");
    const body = document.body;

    // 2. Hàm mở Menu Chính
    document.getElementById("open-btn").onclick = function() {
        document.getElementById("part-menu").classList.add('active');
        overlay.classList.add('active');
        body.classList.add('no-scroll');
    };

    // 3. VÒNG LẶP MỞ SUB-MENU: Áp dụng cho mọi nút có class 'open-sub-trigger'
    document.querySelectorAll('.open-sub-trigger').forEach(button => {
        button.onclick = function() {
            // Lấy tên id của menu cần mở từ thuộc tính data-target
            const targetId = this.getAttribute('data-target'); 
            document.getElementById(targetId).classList.add('active');
            
            overlay.classList.add('active');
            body.classList.add('no-scroll');
        };
    });

    // 4. VÒNG LẶP ĐÓNG SUB-MENU (Nút Quay lại)
    document.querySelectorAll('.back-sub-trigger').forEach(button => {
        button.onclick = function() {
            const targetId = this.getAttribute('data-target');
            // Chỉ ẩn cái sub-menu đó đi, giữ nguyên overlay vì menu chính vẫn đang mở
            document.getElementById(targetId).classList.remove('active');
        };
    });

    // 5. HÀM QUÉT DỌN: Đóng TẤT CẢ mọi thứ
    function closeEverything() {
        // Tìm TẤT CẢ các menu (cả chính lẫn phụ) đang có class 'active' và gỡ nó ra
        document.querySelectorAll('.part-menu.active, .sub-menu.active').forEach(menu => {
            menu.classList.remove('active');
        });
        
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    }

    // Gắn hàm quét dọn vào nút X và lớp Overlay
    document.getElementById("text-end").onclick = closeEverything;
    overlay.onclick = closeEverything;
}