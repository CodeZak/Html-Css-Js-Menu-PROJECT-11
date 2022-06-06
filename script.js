

const ils = document.querySelectorAll("li");
const main = document.querySelector("main");

ils.forEach(function (li) {
    li.addEventListener("click", function (e) {
        main.removeAttribute("class");
        if (e.currentTarget.id === "all") {
            main.classList.add("all");
        } else if (e.currentTarget.id === "breakfast") {
            main.classList.add("breakfast");
        } else if (e.currentTarget.id === "lunch") {
            main.classList.add("lunch");
        } else if (e.currentTarget.id === "shakes") {
            main.classList.add("shakes");
        } else {
            main.classList.add("dinner");
        }
    });
});
