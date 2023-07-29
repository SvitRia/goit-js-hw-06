// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const ingredientList = document.querySelector('#ingredients')
 
 ingredients.map ((ingredient) =>{  
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ingredientList.append(li)
 })

 

//  const list = ingredients.map((ingredient) => `<li class item>${ingredient}</li>`
//   ).join("");
//   console.log(list);

//   ingredientList.innerHTML = list;


  console.log(ingredientList);
 

