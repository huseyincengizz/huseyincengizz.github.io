const customerCart = [];
const saved = [];
const content = document.querySelector("#contentCenter");

async function init(){
const productList = await fetch("https://dummyjson.com/products").then(r => r.json());

    productList.products.splice(0, 28).forEach(element => {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = 
        `<img src="${element.thumbnail}" class="productImage">
        <p class="brand">${element.brand}</p>
        <p class="addTitle">${element.title}</p>
        <p class="price">${element.price.toFixed(2) + " EUR"}</p>
        <a class="selectColorOne" id="selectColor"></a>
        <a class="selectColorTwo" id="selectColor"></a>
        <a class="selectColorThree style="margin-bottom: 18px" id="selectColor"></a>
        <br>
        <button class="addCart" id="addCart">Add To Cart</button>&nbsp &nbsp<button class="save" id="save"><img src="assets/IMG/saveIcon.png" class="saveImage"></button>
        `

const selectColor = paragraph.querySelectorAll("#selectColor");
          selectColor.forEach(selectedColor => {
          selectedColor.addEventListener("click", () => {
            if (selectedColor.style.outline === "" && selectedColor.style.outlineOffset === "") {
              
              selectColor.forEach(item => {
                item.style.outline = "";
                item.style.outlineOffset = "";
              });
              selectedColor.style.outline = "3px solid black";
              selectedColor.style.outlineOffset = "5px";
            } else {
              selectedColor.style.outline = "";
              selectedColor.style.outlineOffset = "";
            }
          });
        });
        
const productImage = paragraph.querySelector(".productImage")
const addToCartButton = paragraph.querySelector("#addCart");
        addToCartButton.addEventListener("click", () => {
            if(element.stock === 0){ 
                alert("Üzgünüz, ürünümüzün stoğu tükenmiştir.");
                productImage.style.opacity= "0.4";
                addToCartButton.disabled = true;
                myList.style.display = "none";
                addToCartButton.style.textDecoration= "line-through";
            }
            else{
        customerCart.push(element);  
        element.stock--;
const productsInCart = document.querySelector(".productsInCart")
        productsInCart.textContent= customerCart.length + " item(s)" 
        }
         
const totalBasket = document.querySelector(".totalBasket")
        let total = 0; 
        customerCart.forEach(item => {
            total += item.price;
        });

        totalBasket.innerHTML = total.toFixed(2) + " EUR";
        });

const like = document.querySelector(".like");
const savedCount = document.querySelector(".savedCount");
const myList = paragraph.querySelector("#save");
        myList.addEventListener("click", () => {
            if (!saved.includes(element)) { 
                saved.push(element); 
                savedCount.textContent = saved.length;
                like.style.color = "red";
              } else {
                alert("Bu ürün zaten listenize kaydedilmiş!");
              }
      });
       content.append(paragraph);      
      });
      }
init();

const slider = document.getElementById("slider");
const selectedRange = document.getElementById("selectedRange");
const lastRange = document.getElementById("lastRange");

  noUiSlider.create(slider, {
    start: [0, 250],
    connect: true,
    range: {
      'min': 0,
      'max': 250
    }
  });

  slider.noUiSlider.on("update", function(values, handle) {
    selectedRange.textContent = values[0] + " €";
    lastRange.textContent = values[1]+ " €";
  });


const selectSize = document.querySelectorAll("#size");
    selectSize.forEach(selectedSize => {
        selectedSize.addEventListener("click", () => {
          if (selectedSize.style.backgroundColor === 'indianred') {
              selectedSize.style.backgroundColor = "";
              selectedSize.style.color = "black";
          } else {
              selectedSize.style.backgroundColor = 'indianred';
          }
      });
    });
  
const selectColor = document.querySelectorAll("#selectColor");

  selectColor.forEach(selectedColor => {

  selectedColor.addEventListener("click", () => {
    if (selectedColor.style.outline === "" && selectedColor.style.outlineOffset === "") 
    {
      selectedColor.style.outline = "3px solid black";
      selectedColor.style.outlineOffset = "5px";
    }
    else{
      selectedColor.style.outline = "";
      selectedColor.style.outlineOffset = "";
    }
  });

});



