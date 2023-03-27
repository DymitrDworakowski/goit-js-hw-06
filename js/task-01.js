// const listItem = document.querySelector('#categories');
// const items = listItem.querySelectorAll('.item')


// console.log(`Number of categories: ${items.length}`);

// items.forEach((category) => {
// const categoryTitle = category.querySelector("h2").textContent;
// const categoryElements = category.querySelectorAll("li").length;

// console.dir(`Category: ${categoryTitle}`);
// console.dir(`Elements: ${categoryElements}`);
// });

const cat = document.getElementById('categories').children.length;
console.log(`Number of categories: ${cat}`);
const array = document.querySelectorAll('h2');

array.forEach((title) => {
  console.log('Category:', title.textContent);
  console.log('Elements:', title.nextElementSibling.children.length);
});