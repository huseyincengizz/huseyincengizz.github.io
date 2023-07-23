const cartTotal = document.querySelector("#cartTotal");
const cartTitle = document.querySelector("#cartTitle");
const quantity = document.querySelector("#quantity");
const totalBasket = document.querySelector(".totalBasket");


async function onCart(){
    const userCart = await fetch("https://dummyjson.com/carts").then(r => r.json())

        userCart.carts.splice(18, 1).forEach(element => {
        cartTotal.textContent = element.products[0].total.toFixed(2) + " EUR";
        cartTitle.textContent = element.products[0].title;
        quantity.textContent = "QTY: " + element.products[0].quantity;
        totalBasket.textContent = element.products[0].total.toFixed(2) + " EUR";
    });
    }

onCart();




