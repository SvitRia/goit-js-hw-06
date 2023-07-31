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
// const listLi = [];
//  function createLi(ingredients) {
//     for(let i = 0; i < ingredients.length; i += 1) {
//        const li = document.createElement("li");
//        li.textContent = ingredients[i];
//        li.classList.add("item");
//        console.dir(li); 
//        listLi.push(li);
//     }
//     console.dir(listLi);
//     ingredientList.innerHTML = listLi.join("")
//  }
//  console.dir(createLi(ingredients));

 const item = ingredients.map ((ingredient) =>{  
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li
 }
 )
 ingredientList.append(...item)

 

 

//  const list = ingredients.map((ingredient) => `<li class item>${ingredient}</li>`
//   ).join("");
//   console.log(list);

//   ingredientList.innerHTML = list;


  console.dir(ingredientList);
 

