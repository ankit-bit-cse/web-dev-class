function calculatesum(arr) {
    let sum =0;
    
    for(let i = 0; i<arr.length;i++) {
        sum = sum+arr[i]
    }

    console.log(sum);
}

calculatesum([10,20,22,34,44]);