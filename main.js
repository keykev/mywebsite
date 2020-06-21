const menu = document.querySelector(".menu");
const imgBrand = document.querySelector(".img-brand");
const navbar = document.getElementById("navbar");
const navbarNav = document.querySelector(".navbar-links");
const navbarItems = document.querySelectorAll(".navbar-item");


let showMenu = false;

menu.addEventListener("click", toggleMenu) 

function toggleMenu() {
    if(!showMenu){
        menu.classList.add("close");
        imgBrand.classList.add("show");
        navbar.classList.add("show");
        navbarNav.classList.add("show");
        navbarItems.forEach(item => {
            item.classList.add("show");
        })
        showMenu = true;
    }
    else {
        menu.classList.remove("close");
        imgBrand.classList.remove("show");
        navbar.classList.remove("show");
        navbarNav.classList.remove("show");
        navbarItems.forEach(item => {
            item.classList.remove("show");
        })
        showMenu = false;
    }

}