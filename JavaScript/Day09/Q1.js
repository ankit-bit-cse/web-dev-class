

const arr=[8,6,5,4,3,10,32,45]
const arrB=[...arr];

arr.sort((a,b) => {
    return a - b
});

console.log(arr);

arrB.sort((a,b) => {
    return b-a
});

console.log(arrB)