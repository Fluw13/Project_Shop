// Dung de bat/tat mat khau cho nguoi dung //
function togglePassword() {
    let pass = document.getElementById("password");
    let eye = document.getElementById("eye");

    if (pass.type === "password") {
        pass.type = "text";
        eye.textContent = "🙈";
    } else {
        pass.type = "password";
        eye.textContent = "👁";
    }
}


function testEmail() {
    let em = document.getElementById("email").value;
    let tb = document.getElementById("thongbao");
    let pass = document.getElementById("password").value;
    let tb2 = document.getElementById("thongbao2");

    tb.innerText = "";
    tb2.innerText = "";

    let check = true

    if (em === "") {
        tb.innerText = "Vui long nhap lai Email!";
        check = false;
    }else if ((!em.includes("@") || !em.includes(".")) && em != "") {
        tb.innerText = "Nhap sai vui long nhap lai!";
        check = false;
    }


    if (pass === "") {
        tb2.innerText = "Vui long nhap lai Mật Khẩu!";
        check = false;
    }

    if (check) {
        window.location.href = "../../index.html";
    }

    return false;
}


























