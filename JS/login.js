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

    if (em === "") {
        tb.innerText = "Nhap sai vui long nhap lai!";
        return false;
    }

    if (!em.includes("@") || !em.includes("."))
    {
        tb.innerText = "Nhap sai vui long nhap lai!";
        return false;
    }

    return true;

}



