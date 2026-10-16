
function largestElement(arr) {
    let largestNum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }

    console.log(largestNum);
}

largestElement([5, 3, 7, 0, -4]);
