 let myArr = [1, 2, 3, 4, 5].sort((a,b) =>a - b)
let sum = myArr.reduce((prev,curr) => prev + curr,0)
let average=(sum / 5)
let max= Math.max(...myArr)
let min= Math.min(...myArr)
let myObj = {sum,average,min,max}
console.log(myObj)