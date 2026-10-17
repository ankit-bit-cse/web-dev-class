function countpositive(arr) {

    let count = 0;

    for(let i = 0; i<arr.length; i++) {
    
        if(arr[i]>=0){
            count++
        }
    }
    console.log(count);
}

countpositive([10,-4,22,-55,-44]);