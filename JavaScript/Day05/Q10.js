function countEven(arr) {

    let even = 0;

    for(let i=0; i<arr.length; i++) {

        if (arr[i] % 2 == 0) {
            even ++;

        }
    }

    return even;
}

console.log(countEven([12, 5, 30, -2, 8]))