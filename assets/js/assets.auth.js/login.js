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
let submenu = document.getElementById("sub-menu");
let subitem = document.getElementById("sub-item");
let part = document.getElementById("part-menu");

let open2sub = document.getElementById("open-sub2-btn");
let sub2menu = document.getElementById("sub2-menu");
let sub2item = document.getElementById("sub2-item");

let open3sub = document.getElementById("open-sub3-btn");
let sub3menu = document.getElementById("sub3-menu");
let sub3item = document.getElementById("sub3-item");

let ope4sub = document.getElementById("open-sub4-btn");
let sub4menu = document.getElementById("sub4-menu");
let sub4item = document.getElementById("sub4-item");

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

sub2item.onclick = function() {
    sub2menu.classList.add('active');
    over.classList.add('active');
    document.body.classList.add('no-scroll');
}

open2sub.onclick = function() {
    sub2menu.classList.remove('active');
}

sub3item.onclick = function() {
    sub3menu.classList.add('active');
    over.classList.add('active');
    document.body.classList.add('no-scroll');
}

open3sub.onclick = function() {
    sub3menu.classList.remove('active');
}

sub4item.onclick = function() {
    sub4menu.classList.add('active');
    over.classList.add('active');
    document.body.classList.add('no-scroll');
}

open4sub.onclick = function() {
    sub4menu.classList.remove('active');
}

function closeEverything() {
    part.classList.remove('active');
    submenu.classList.remove('active');
    sub2menu.classList.remove('active');
    sub3menu.classList.remove('active');
    sub4menu.classList.remove('active');
    over.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

text.onclick = closeEverything;
over.onclick = closeEverything


























