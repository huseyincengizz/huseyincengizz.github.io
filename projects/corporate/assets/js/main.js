const mobileNav = document.querySelector("#mobileNav");
const hamburger = document.querySelector("#hamburger").addEventListener("click", () => {

    if (mobileNav.style.display === "block") {
        mobileNav.style.display= "none";
    }
    else{
        mobileNav.style.display= "block";
    }

});



