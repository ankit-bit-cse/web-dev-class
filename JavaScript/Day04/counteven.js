
function countEven() {
    let count = 0;

    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            count++;
        }
    }

    console.log("Count = " + count);
}

countEven();
