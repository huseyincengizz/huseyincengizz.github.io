const hamburger = document.querySelector("#hamburger")
const mobileNav = document.querySelector("#mobileNav")

hamburger.addEventListener("click", () => {
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    }
    else{
        mobileNav.style.display = "block";
    }
})