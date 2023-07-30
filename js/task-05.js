// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameOutput = document.querySelector("#name-output")
console.dir(nameOutput);
const nameInput = document.querySelector("#name-input")
nameInput.addEventListener("input", setName)
function setName(elem) {
    nameOutput.textContent = nameInput.value.trim()!== "" ? elem.currentTarget.value.trim() : "Anonymous";
}
