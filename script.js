/* 
    1.Create a shopping List array with 3 items
    2.Add 2 more items to the shopping list
    3.Print the shopping list
    4.Remove the last item from the shopping list
    5.Print the shopping list
*/

let shoppingList = ["Milk", "Eggs", "Bread"];
console.log("Initial shopping list:", shoppingList);
shoppingList.push("Apple", "Bananas");
console.log("Shopping list after adding items:", shoppingList);
shoppingList.pop();
console.log("Shopping list after removing the last item:", shoppingList);

/* 
    Create a function, when the items in shopping list are more than 5, print in console: "Your cart is full." 
*/

function cart() {
  if (shoppingList.length > 5) console.log("Your cart is full");
  shoppingList.forEach((item, index) => console.log(`${index + 1}. ${item}`));
}
cart();

/* 
    Create a function, takes an item as an argument, return to see if the item is in the shopping list.
    Create an object with 3 key-value pairs name, price, quantity
*/

function isItemInShoppingList(item) {
  const formattedItem = String(item).toLowerCase();
  const exists = shoppingList.some(
    item => item.toLowerCase() === formattedItem
  );

  return exists
    ? `${item} is on the shopping list.`
    : `${item} is not on the shopping list.`;
}
console.log(isItemInShoppingList("apple"));

let newItem = {
  name: "Orange",
  price: 1.5,
  quantity: 3,
};

//Playground
shoppingList.push(newItem.name);
console.log("Shopping list after adding new item:", shoppingList);

console.log(isItemInShoppingList(newItem.name));
