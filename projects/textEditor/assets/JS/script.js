const bold= document.querySelector("#bold");
const italic= document.querySelector("#italic");
const underline= document.querySelector("#underline");
const lineThrough= document.querySelector("#lineThrough");
const backColor= document.querySelector("#backColor");
const textColor= document.querySelector("#textColor");
const clear= document.querySelector("#clear");
const left= document.querySelector("#left");
const center= document.querySelector("#center");
const right= document.querySelector("#right");
const myText= document.querySelector("#myText");
const select= document.querySelector("#fontSize");
const fontFamily= document.querySelector("#fontFamily");
const upperCase= document.querySelector("#upperCase");
const lowerCase= document.querySelector("#lowerCase");
const indentLeft= document.querySelector("#indentLeft");
const indentRight= document.querySelector("#indentRight");
const capitalize= document.querySelector("#capitalize");
const page = document.documentElement;

select.addEventListener("change", (e) =>{
    let selectedValue = e.target.value;
    myText.style.fontSize = selectedValue + "px";
});
fontFamily.addEventListener("change", (e) =>{
    selectedValue = e.target.value;
    myText.style.fontFamily = selectedValue;
});
bold.addEventListener("click", () => {
    myText.style.fontWeight = "bold";
});
italic.addEventListener("click", () => {
    myText.style.fontStyle= "italic";
});
underline.addEventListener("click", () => {
    myText.style.textDecoration= "underline";
});
backColor.addEventListener("click", () => {
    myText.style.backgroundColor= backColor.value;
});
textColor.addEventListener("click", () => {
    myText.style.color= textColor.value;
});
clear.addEventListener("click", () => {
    myText.style= "";
});
left.addEventListener("click", () => {
    myText.style.textAlign= "left";
});
center.addEventListener("click", () => {
    myText.style.textAlign= "center";
});
right.addEventListener("click", () => {
    myText.style.textAlign= "right";
});
upperCase.addEventListener("click", () => {
    myText.style.textTransform= "uppercase";
});
lowerCase.addEventListener("click", () => {
    myText.style.textTransform= "lowercase";
});
lineThrough.addEventListener("click", () => {
    myText.style.textDecoration= "line-through";
});
indentRight.addEventListener("click", () => {
    myText.style.textIndent = "32px";
});
indentLeft.addEventListener("click", () => {
    myText.style.textIndent= "";
});
capitalize.addEventListener("click", () => {
    myText.style.textTransform= "capitalize";
});

page.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});




