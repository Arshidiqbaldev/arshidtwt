const mobMenu = document.getElementById("mob");

const menuIcon = document.getElementById("menu");

const list = document.querySelectorAll(".ul .li");








// toogle 

const toggleMenu = document.querySelector(".toggle-icon");
const tog1 = document.querySelectorAll(".toggle-bar");


toggleMenu.addEventListener("click", () => {



    tog1.forEach((i => {
        i.classList.toggle("bg-black");
        i.classList.toggle("toggle-bar-active");

    }));

    mobMenu.classList.toggle("max-h-0");
    mobMenu.classList.toggle(`max-h-96`);
    list.forEach((l, index) => {
        l.style.animationDelay = `${index * 200}ms`;
        l.classList.toggle("animate-fadeIn");
    })
});



// animate



