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





