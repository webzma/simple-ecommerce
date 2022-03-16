const numProduct = document.getElementById("nums-product");
const btnMinus = document.getElementById("minus");
const btnPlus = document.getElementById("plus");
const numModal = document.getElementById("num-modal");
const costModal = document.getElementById("cost-modal");
const btn_add_to_cart = document.querySelector(".button-add-to-cart");
const btnCheckout = document.getElementById("checkout");
const productsBuy = document.querySelector(".products-buy");


document.querySelector(".nav-logo-cart").addEventListener("click", () => {
    if (productsBuy.children.length == 0) {
        document.querySelector(".modal-cart-empty").classList.toggle("cart-empty-active");
    } else {
        document.querySelector(".modal-cart-full").classList.toggle("cart-empty-full-active");
    }

});


btnMinus.addEventListener("click", () => {
    restNum();
})

btnPlus.addEventListener("click", () => {
    sumNum();
})

const restNum = () => {
    if (numProduct.textContent > 0) {
        numProduct.textContent = Number(numProduct.textContent - 1);
    }
}

const sumNum = () => {
    numProduct.textContent = Number(numProduct.textContent) + 1;
}

const totalProductCost = () => {
    let precio = 125;
    let total = Number(precio * numProduct.textContent);
    return total;
}

btn_add_to_cart.addEventListener("click", () => {
    document.getElementById("howMany").textContent = productsBuy.children.length + 1;
    document.querySelector(".modal-cart-empty").classList.remove("cart-empty-active");
    totalProductCost();
    createElement(numProduct.textContent, totalProductCost());
})

btnCheckout.addEventListener("click", () => {
    document.querySelector(".modal-cart-full").classList.remove("cart-empty-full-active");
})


const createElement = (products, cost) => {
    let htmlCode = `<div class="product-buy">
          <img src="images/image-product-1-thumbnail.jpg" alt="imagen de producto" class="img-product">
          <div class="modal-content">
            <p>Fall Limited Edition Sneaker</p>
            <p>
              <span>$125,00 *</span>
              <span id="num-modal">${products}</span>
              <span id="cost-modal">$${cost},00</span>
            </p>
          </div>
          <div>
            <img src="images/icon-delete.svg" alt="icono de basura" class="size-icon">
          </div>
        </div>`;
        document.querySelector(".products-buy").innerHTML += htmlCode;

        const btnTrash  = document.querySelectorAll(".size-icon");
        btnTrash.forEach((elemento) => {
            elemento.addEventListener("click", (e) => {
                console.log(e.path[2].remove());
                document.getElementById("howMany").textContent = productsBuy.children.length;

                if (document.getElementById("howMany").textContent == 0) {
                    document.querySelector(".modal-cart-full").classList.remove("cart-empty-full-active");
                }
            })
        })
}




