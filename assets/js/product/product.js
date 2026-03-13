export function RenderProduct(dataArray, containerID) {
    const container = document.getElementById(containerID);
    if (!container) return;
    let htmlContent = '';
    dataArray.forEach(function(product) {
        htmlContent += `
                <div class = "product">
                    <figure>
                        <img src="${product.img}" alt="${product.name}">
                    </figure>
                    <div>
                        <h6 class= "title-product">${product.name}</h6>                  
                    </div>
                    <div class = "bot">
                        <button class = "btn-add-cart buttonn">
                            <i class="bi bi-chat-dots"></i>
                        </button>
                        <button class = "btn-add-cart buttonn" onclick="alert('Đã thêm ${product.name} vào giỏ hàng')">
                            <i class="bi bi-basket-fill"></i>
                        </button>
                        <p class= "price-product">${product.price}</p> 
                    </div>
                </div>
        `;
    });
    container.innerHTML = htmlContent;
}



















