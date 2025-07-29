// Array: A variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana", "coconut"];
fruits.push("coconut");  // Adds an element
fruits.pop();            // Removes last element
fruits.unshift("mango"); // Adds element to beginning
fruits.shift();          // Removes element from beginning
let numOfFruits = fruits.length;
let index = fruits.indexOf("coconut");
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(numOfFruits);
console.log(index);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}
fruits.sort();
fruits.sort().reverse();
for (let fruit of fruits) {
    console.log(fruit);
}