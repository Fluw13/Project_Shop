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
        window.location.href = "../../pages/shop/index.html";
    }

    return false;
}


let open = document.getElementById("open-btn");
let opensub = document.getElementById("open-sub-btn");
let part = document.getElementById("part-menu");
let submenu = document.getElementById("sub-menu");
let subitem = document.getElementById("sub-item");
let over = document.getElementById("overlay");
let text = document.getElementById("text-end");

open.onclick = function() {
    part.classList.add('active');
    over.classList.add('active');
    document.body.classList.add('no-scroll');
}

subitem.onclick = function() {
    submenu.classList.add('active');
    over.classList.add('active');
    document.body.classList.add('no-scroll');
}

opensub.onclick = function() {
    submenu.classList.remove('active');
    
}

function closeEverything() {
    part.classList.remove('active');
    submenu.classList.remove('active');
    over.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

text.onclick = closeEverything;
over.onclick = closeEverything








