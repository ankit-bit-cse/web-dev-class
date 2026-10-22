function allUnique(str) {
    return new Set(str).size === str.length;
}

console.log(allUnique("abcde")); // true
console.log(allUnique("apple")); // false
console.log(allUnique("hello")); // false
console.log(allUnique("12345")); // true