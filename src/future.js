// animate





const col2 = document.getElementById("column-2");
const togIcon = document.getElementById("menu-toggle");
const toggleLine = document.querySelectorAll(".toggle-line")

togIcon.addEventListener("click", () => {
    col2.classList.toggle(`max-h-0`);
    col2.classList.toggle(`max-h-96`);

    toggleLine.forEach((line)=>{
        line.classList.toggle("tog-ac")
    })
});

