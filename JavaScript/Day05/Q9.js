function findSmallest(arr) {

     let smallest = arr[0];

    for(let i=1; i < arr.length; i++) {

        if(arr[i] < smallest) {

            smallest = arr[i];
        }
       
    }

    return smallest;
}

console.log(findSmallest([12, 5, 30, -2, 8]));