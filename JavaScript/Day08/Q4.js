const arr = [1,2,3,4,5];

console.log(arr.map(num => num * num));

console.log(arr.map(num => `num-${num}`));

const fruits = ["apple", "banana", "kiwi"];
console.log(fruits.map(fruit => fruit.length));

const temperatures = [0,100,37];

console.log(
    temperatures.map(c => (c * 9/5) +32)

);

const people =[
    {name: "A", age: 20},
    {name: "B", age: 30}
];

console.log(people.map(person => person.name));