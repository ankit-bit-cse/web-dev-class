function twoSum(a, target) {
    let l = 0, r = a.length - 1;

    while (l < r) {
        const sum = a[l] + a[r];

        if (sum === target) {
            return [l, r];
        }

        if (sum < target) {
            l++;
        } else {
            r--;
        }
    }
}

let a = [1, 2, 3, 4, 6];
let target = 7;

console.log(twoSum(a, target));