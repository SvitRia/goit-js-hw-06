// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const createBox = document.querySelector('#boxes')
const inputAmound = document.querySelector('[type="number"]')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')

btnCreate.addEventListener("click", onCreateBtnClick)
btnDestroy.addEventListener("click", onDestroyBtnClick)
const amount = 0;
function onCreateBtnClick() {
const amount = inputAmound.value;
createBox.innerHTML = createBoxes(amount);
return amount;
}
function createBoxes(amount) {
  const arrBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    let size = 30 + i * 10;
    let color = getRandomHexColor();
    arrBoxes.push(`<div style="width:${size}px; height:${size}px; background:${color}"></div>`)
  };
return arrBoxes.join(" / ")
 
}
console.log(createBoxes(amount));

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function onDestroyBtnClick() {
  createBox.innerHTML = "";
} 