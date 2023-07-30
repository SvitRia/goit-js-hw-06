// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
const bodyWidget = document.querySelector("body")
const nameColor = document.querySelector(".color")
const btnColor = document.querySelector(".change-color")

console.dir(nameColor);
console.dir(btnColor);
console.log(getRandomHexColor());

btnColor.addEventListener("click", getNewColor)
function getNewColor() {
  let randomColor = getRandomHexColor();
  bodyWidget.style.backgroundColor = randomColor;
  nameColor.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
