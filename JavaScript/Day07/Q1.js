function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if ("aeiou".includes(ch)) {
            count++;
        }
    }

    return count;
}
console.log(countVowels("ANKIT KUMAR"));