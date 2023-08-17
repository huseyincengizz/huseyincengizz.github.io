const mobileMenu = document.querySelector("#mobileMenu");
const hamburgerMenu = document.querySelector("#hamburgerMenu");

hamburgerMenu.addEventListener("click", () => {

    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none"
    }
    else{
        mobileMenu.style.display = "block"
    }
});