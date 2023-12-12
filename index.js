const items = [
    { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
    { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
    { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
    { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
    { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
    { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
    { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
    { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
  ];
  
//write the following functions and test them

//use the map method instead 
function getItemNames(items){
    let itemNames = [];
    for (let i = 0;i < items.length; i++){
        itemNames.push(items[i].name);
    }
return itemNames;
}
console.log(getItemNames(items));//returns an array of the names of the items

function getitemPrices(item){
let itemPrices = [];
    for (let i = 0;i < items.length; i++){
    itemPrices.push(items[i].price);
    }
return itemPrices;
}
console.log(getitemPrices(items));//returns an array of prices

function findItemById(id , items){
for (let i = 0; i<items.length; i++)
    if (items[i].id === id)
    {
    return items[i];
    }
}
console.log(findItemById(2, items));//returns an item by it's id

function mostExpensiveItem(items){
    let mostExpensiveItem = items [0];
    for (let i=0; i < items.length; i++){
        if (items[i].price > mostExpensiveItem.price)
        return items[i];
    }
}

function leastExpensiveItem(items){
    let leastExpensiveItem = items [0];
    for (let i=0; i < items.length; i++){
        if (items[i].price < leastExpensiveItem.price)
        return items[i];
    }
}
console.log(mostExpensiveItem(items));//returns the most expensive item 
console.log(leastExpensiveItem(items));//returns the least expensive item 
  
function calculateInventory(items){
    let total = 0;
    for (let i = 0; i < items.length; i++){
    total = total + items[i].price * items[i].inventory;
    return total;
    }
}

console.log(calculateInventory(items));//returns the total value of the inventory 