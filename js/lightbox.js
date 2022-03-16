const images = document.querySelector(".cards-images");
const main_image = document.querySelector(".main-image");
const main_image_lightbox = document.querySelector(".main-image-lightbox");
const btnClose = document.querySelector(".close");
const btnPrevius = document.querySelectorAll(".previus");
const btnNext = document.querySelectorAll(".next");
const cardsImages = document.querySelector(".cards-images-lightbox");

document.addEventListener("click", (e) => {
    if (e.target.name == "card-image") {
        main_image.setAttribute("src", e.target.src)
    } else if (e.target.name == "card-image-lightbox") {
        main_image_lightbox.setAttribute("src", e.target.src);
    }
})


main_image.addEventListener("click", () => {
    document.querySelector(".lightbox").classList.add("lightbox-active");
})

btnClose.addEventListener("click", () => {
    document.querySelector(".lightbox").classList.remove("lightbox-active");
})

btnNext[1].addEventListener("click", () => {
    nextImageDesktop();
})

btnPrevius[1].addEventListener("click", () => {
    previusImageDesktop();
})


btnNext[0].addEventListener("click", () => {
    nextImageMobile();
})

btnPrevius[0].addEventListener("click", () => {
    previusImageMobile();
})



var number = 1;

const nextImageDesktop = () => {
    if (number < 4) {
        number = number + 1;
        main_image_lightbox.setAttribute("src", `images/image-product-${number}.jpg`);
    }
}

const previusImageDesktop = () => {
    if (number > 1) {
        number = number - 1;
        main_image_lightbox.setAttribute("src", `images/image-product-${number}.jpg`);
    }
}

const nextImageMobile = () => {
    if (number < 4) {
        number = number + 1;
        main_image.setAttribute("src", `images/image-product-${number}.jpg`);
    }
}

const previusImageMobile = () => {
    if (number > 1) {
        number = number - 1;
        main_image.setAttribute("src", `images/image-product-${number}.jpg`);
    }
}