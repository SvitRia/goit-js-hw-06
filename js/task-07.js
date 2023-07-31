// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const size = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
span.style.fontSize = "36px"; 
size.addEventListener("input", getSizeControl)
function getSizeControl(event) {
    
 let cureentSize = event.currentTarget.value;
 if(cureentSize > 16 && cureentSize < 26) {
    span.style.fontSize = "16px";
 } else if(cureentSize > 26 && cureentSize < 36){
    span.style.fontSize = "24px";
 } else if(cureentSize > 36 && cureentSize < 46){
    span.style.fontSize = "30px";
} else if(cureentSize > 46 && cureentSize < 56){
    span.style.fontSize = "36px";
} else if(cureentSize > 56 && cureentSize < 66){
    span.style.fontSize = "42px";
} else if(cureentSize > 66 && cureentSize < 76){
    span.style.fontSize = "48px";
} else if(cureentSize > 76 && cureentSize < 86){
    span.style.fontSize = "56px";
} else if(cureentSize > 86 && cureentSize < 96){
    span.style.fontSize = "62px";   
}}