function calculateAverage(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
     sum = sum+arr[i];
    }

    let average = sum / arr.length;

    return average;
}

console.log(calculateAverage([10, 20, 30, 40]));