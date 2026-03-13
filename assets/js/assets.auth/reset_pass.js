//Dung de thong bao cac viec nhap sai email
function reset_pass() {
    let em = document.getElementById("Email").value;
    let tb = document.getElementById("thongbao");
    if (em === "") {
        tb.innerText = "Vui lòng nhập email!";
        return false;
    }
    if ((!em.includes("@") || !em.includes(".")) && em != "") {
        tb.innerText = "Email khong hop le!";
        return false;
    }

    tb.innerText = "Ma se gui cho ban trong vai phut";
    return false;
}










