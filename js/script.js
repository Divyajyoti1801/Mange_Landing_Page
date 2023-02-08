
//Mobile Navigation Toggle

const nav_btn = document.querySelector(".header__mobile-nav");
const nav_menu = document.querySelector(".header__navigation");
const blanket = document.querySelector(".hero__blanket");
const header = document.querySelector("header");
nav_btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (nav_menu.style.display == 'none') {
        nav_btn.src = "images/icon-close.svg";
        nav_menu.style.display = 'flex';
        blanket.style.display = 'block';
        header.style.background = "rgba(0,0,0,0.2)";
    } else {
        nav_btn.src = "images/icon-hamburger.svg";
        nav_menu.style.display = 'none';
        blanket.style.display = 'none';
         header.style.background = "transparent";
    }
})