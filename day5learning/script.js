//array method: forEach, map, filter, find, reduce

//filter:  Creates a new array with only elements that pass a condition
const items = [
  { name: "bike", price: 100 },
  { name: "tv", price: 50 },
  { name: "alblum", price: 55 },
  { name: "keyboard", price: 500 },
];

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(filteredItems);
console.log(items);

//map:Creates a new array by transforming each element./convert a arrway into new
const items2 = items.map((item) => {
  return item.name;
});
console.log(items2);

//find: will find the first item match the condition, or undefine if not found
const itemsFound = items.find((item) => {
  return item.name === "bike";
});
console.log(itemsFound);

//for each
items.forEach((item) => {
  console.log(item.name);
});

//some: return true if some of the element in the array match the condition
const hasInexpesiveItem = items.some((item) => {
  return item.price <= 100;
});
console.log(hasInexpesiveItem);

//every: every element in array need to match the condition, if not, will return false
const hasInexpesiveItem1 = items.every((item) => {
  return item.price <= 100;
});
console.log(hasInexpesiveItem1);

//reduce:Reduces the array to a single value by running a function on each item and carrying over a result
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

//if it is simple array, just use include to check if the element is in array
//if it is complicated, use find
const item3 = [1, 2, 3];
const includeTwo = item3.includes(2);
console.log(includeTwo);

//object descture/ rename
const obj = { mushroom: 1, banana: 2 };
//const { mushroom, banana } = obj;
//console.log(mushroom)  //output:1
const { mushroom: haha, banana } = obj;
console.log(haha); //output1

//access obj of obj
const obj1 = {
  parent: {
    kid: "baby",
  },
};
const {
  parent: { kid },
} = obj1;
console.log(kid);

//conbine 2 array together
const al = ["a", "b", "c"];
const numbers = [1, 2, 3];
const res = [...al, ...numbers]; // spread
const res1 = al.concat(numbers);

console.log(res);
console.log(res1);

//ternary: shortcut of if else statment
let age = 12;
let message = age >= 18 ? "you are an adult" : "you are a minor";
console.log(message);

//write function
function sayHi(name) {
  console.log(`hi, ${name}`);
}
sayHi("ying");
