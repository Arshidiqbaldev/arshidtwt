import './style.css'







const col2 = document.getElementById("column-2");
const togIcon = document.getElementById("menu-toggle");
const toggleLine = document.querySelectorAll(".toggle-line");
const list = document.querySelectorAll(".ulist .li")

togIcon.addEventListener("click", () => {
    col2.classList.toggle(`max-h-0`);
    col2.classList.toggle(`max-h-96`);
    list.forEach((l, index) => {
        l.style.animationDelay = `${index * 200}ms`;
        l.classList.toggle("animate-fadeIn");
    });

    toggleLine.forEach((line) => {
        line.classList.toggle("bg-base-content")
        line.classList.toggle("tog-ac");
        line.classList.toggle("bg-ac");
    });



});







