let name = prompt(`What is your name?`);

const item1 = prompt(`What is your first item?`);
let itemPrice1 = Number(prompt(`${item1} price`));
document.getElementById("item1").innerHTML = item1;
document.getElementById("itemPrice1").innerHTML = itemPrice1;

const item2 = prompt(`What is your second item?`);
let itemPrice2 = Number(prompt(`${item2} price`));
document.getElementById("item2").innerHTML = item2;
document.getElementById("itemPrice2").innerHTML = itemPrice2;

const item3 = prompt(`What is your third item?`);
let itemPrice3 = Number(prompt(`${item3} price`));
document.getElementById("item3").innerHTML = item3;
document.getElementById("itemPrice3").innerHTML = itemPrice3;

if (!itemPrice1 || itemPrice1 == 0){
    itemPrice1 = Number(prompt(`${item1} price is not valid. Please enter a new price.`))
} 
if (!itemPrice2 || itemPrice2 == 0){
    itemPrice2 = Number(prompt(`${item2} price is not valid. Please enter a new price.`))
} 
if (!itemPrice3 || itemPrice3 == 0){
    itemPrice3 = Number(prompt(`${item3} price is not valid. Please enter a new price.`))
} 
