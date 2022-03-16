const btn_exit = document.getElementById("exit");
const btn_open = document.querySelector(".menu-icon");

btn_open.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.add("mobile-menu-active");
    document.querySelector(".lightbox").classList.add("lightbox-active");
})

btn_exit.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.remove("mobile-menu-active");
    document.querySelector(".lightbox").classList.remove("lightbox-active");
})
