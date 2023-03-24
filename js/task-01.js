const listItem = document.querySelectorAll('#categories li.item');
const count = listItem.length;

console.log(`Number of categories: ${count}`);

listItem.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
});