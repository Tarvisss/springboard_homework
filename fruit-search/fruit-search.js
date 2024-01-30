
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const button = document.querySelector('#search-button');
input.addEventListener("input", searchHandler)
document.getElementById("search-button").addEventListener("click", (eventClick)=>{
    eventClick.preventDefault()
  });



const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



function searchHandler(e) {

	removeFruitSuggestions();

const filteredFruit = [];
const value = input.value.toLowerCase();

if (value.length === 0) return;
fruit.forEach((fruit) =>{
if(fruit.substring(0,value.length).toLowerCase() === value)
filteredFruit.push(fruit);
});
console.log(filteredFruit);
showSuggestions(filteredFruit);
}



function showSuggestions(list) {
const listedFruit = document.createElement("ul");
listedFruit.className = "suggestions";
listedFruit.id = "suggestions";
list.forEach((fruits) =>{
const listItemFruit = document.createElement("li");
const fruitButton = document.createElement("button");
fruitButton.className = ("fruit-button");

fruitButton.innerHTML = fruits;

fruitButton.addEventListener("click",onFruitButtonClick);
listItemFruit.appendChild(fruitButton);

listedFruit.appendChild(listItemFruit);


});

document.querySelector("#search-container").appendChild(listedFruit);
}

function removeFruitSuggestions(){
const listedFruit = document.querySelector("#suggestions");
if( listedFruit) listedFruit.remove();

}

function onFruitButtonClick(event){
  event.preventDefault();

const buttonElement = event.target;
input.value = buttonElement.innerHTML;

removeFruitSuggestions();
}