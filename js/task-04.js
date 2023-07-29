// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;
const count = document.querySelector("#value")
const decrBtn = document.querySelector(`button[data-action = "decrement"]`)
const incrBtn = document.querySelector(`button[data-action = "increment"]`)

function getDecrsum() {
   counterValue -= 1;
   count.textContent=counterValue;
};
decrBtn.addEventListener("click", getDecrsum);

function getIncrement() {
    counterValue += 1;
    count.textContent=counterValue;
}
incrBtn.addEventListener("click", getIncrement);

console.dir(count);
console.dir(decrBtn);
console.dir(incrBtn);
console.dir(getDecrsum);
