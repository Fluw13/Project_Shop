function loadComponent(id, file) {
    fetch(file)
    .then(response => { 
        if (!response.ok) throw new Error("Loi khong tim thay");
        return response.text();
    })

    .then(data => {
        document.getElementById(id).innerHTML = data;

        if (id === "header") {
            initmenu(); 
        }
    })

    .catch(error => console.error(error));
}

loadComponent("header", "/pages/layout/header.html");