const numbers = [5, 10, 15, 20, 25, 30, 35, 40];

// Q1: Get [10, 15, 20, 25]
const result1 = numbers.slice(1, 5);
console.log(result1);

// Q2: Get last 4 elements
const result2 = numbers.slice(-4);
console.log(result2);

// Q3: Get first 5 elements
const result3 = numbers.slice(0, 5);
console.log(result3);

// Q4: Create a copy
const copy = numbers.slice();

// Q5: Add 50 to copy
copy.push(50);

// Q6: Print both arrays
console.log("Original:", numbers);
console.log("Copy:", copy);