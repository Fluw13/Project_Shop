//Dung de tao cac thong bao day cho viec nhap sai hoac thieu
function register() {
    let lna = document.getElementById("last-name").value;
    let fna = document.getElementById("first-name").value;
    let ema = document.getElementById("email").value;
    let sdt = document.getElementById("sdt").value;
    let pss = document.getElementById("pass").value;
    let tb1 = document.getElementById("thongbao1");
    let tb2 = document.getElementById("thongbao2");
    let tb3 = document.getElementById("thongbao3");
    let tb4 = document.getElementById("thongbao4");
    let tb5 = document.getElementById("thongbao5");

    //reset thong bao
    tb1.innerText = "";
    tb2.innerText = "";
    tb3.innerText = "";
    tb4.innerText = "";
    tb5.innerText = "";

    let check = true

    if (fna.trim() === "" || !isNaN(fna)) {
        tb1.innerText = "Vui long nhap lai";
        check = false;
    }

    if (lna.trim() === "" ||  !isNaN(lna)) {
        tb2.innerText = "Vui long nhap lai";
        check = false;
    }

    if (ema.trim() === "" || !isNaN(ema) || !ema.includes("@") || !ema.includes(".")) {
        tb3.innerText = "Vui long nhap lai";
        check = false;
    }

    if (sdt.trim() === "" || isNaN(sdt)) {
        tb4.innerText = "Vui long nhap lai";
        check = false;
    }

    if (pss.trim() === "") {
        tb5.innerText = "Vui long nhap lai";
        check = false;
    }

    if (check) {
        window.location.href = "../index.html";
    }

    return false;
}