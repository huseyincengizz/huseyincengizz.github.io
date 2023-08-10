/* Price */

const silver = document.querySelector(".silver")
const platinum = document.querySelector(".platinum")
const gold = document.querySelector(".gold")


silver.addEventListener("click", () => {
    if (silver.style.border === "3px solid red") {
        silver.style.border=""
    }
    else{
        silver.style.border="3px solid red"
    }
});

gold.addEventListener("click", () => {
    if (gold.style.border === "3px solid red") {
        gold.style.border=""
    }
    else{
        gold.style.border="3px solid red"
    }
});

platinum.addEventListener("click", () => {
    if (platinum.style.border === "3px solid green") {
        platinum.style.border=""
    }
    else{
        platinum.style.border="3px solid green"
    }
});

/* Price */

/* Hamburger Menu */

const hamburger = document.querySelector(".hamburgerMenu")
const navbar = document.querySelector(".mobileNav")

hamburger.addEventListener("click", () => {
    if (navbar.style.display === "block") {
        navbar.style.display= "none";
    }
    else{
        navbar.style.display= "block";
    }
})

/* Hamburger Menu */