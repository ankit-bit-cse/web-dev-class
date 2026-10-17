
function targetsearch(arr, target) {
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            index = i;
            break;
        }
    }

    console.log(index);
}

targetsearch([10, 22, 33, 45], 22);
