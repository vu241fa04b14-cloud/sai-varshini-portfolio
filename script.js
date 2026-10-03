function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector(".nav-links")
            .classList.remove("active");

    });

});


window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5, 8, 17, 0.97)";

    } else {

        header.style.background =
            "rgba(7, 11, 23, 0.9)";

    }

});