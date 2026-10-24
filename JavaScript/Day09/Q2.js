const prices = [500,100,250,50]

const copypricesarr =[...prices]

copypricesarr.sort((a,b) => {
    return a-b
})

console.log(copypricesarr);
console.log(prices);