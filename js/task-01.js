const listItem = document.querySelector('#categories');
const items = listItem.querySelectorAll('.item')


console.log(`Number of categories: ${items.length}`);

items.forEach((category) => {
const categoryTitle = category.querySelector("h2").textContent;
const categoryElements = category.querySelectorAll("li").length;

console.dir(`Category: ${categoryTitle}`);
console.dir(`Elements: ${categoryElements}`);
});