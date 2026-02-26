//Dung de thong bao cac viec nhap sai email
function reset_pass() {
    let em = document.getElementById("Email").value;
    let tb = document.getElementById("thongbao");
    if (em === "") {
        tb.innerText = "Vui long nhap lai!";
        return false;
    }
    if (!em.includes("@") || !em.includes(".")) {
        tb.innerText = "Email khong hop le!";
        return false;
    }

    tb.innerText = "Ma se gui cho ban trong vai phut";
    return false;
}