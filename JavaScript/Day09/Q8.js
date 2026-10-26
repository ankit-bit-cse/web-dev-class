const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Kiwi"];

// Q1: Get Banana, Mango, Orange
const result1 = fruits.slice(1, 4);
console.log(result1);

// Q2: Get last 3 fruits
const result2 = fruits.slice(-3);
console.log(result2);

// Q3: Copy the full array
const copy = fruits.slice();

// Q4: Add Watermelon into copy
copy.push("Watermelon");

console.log("Original:", fruits);
console.log("Copy:", copy);

// Q5: Get first 2 fruits
const result3 = fruits.slice(0, 2);
console.log(result3);