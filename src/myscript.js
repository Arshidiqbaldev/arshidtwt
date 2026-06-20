const mobMenu = document.getElementById("mob");

const menuIcon = document.getElementById("menu");


menuIcon.addEventListener("click", () => {
    mobMenu.classList.toggle("max-h-0");
    mobMenu.classList.toggle("max-h-50");
})