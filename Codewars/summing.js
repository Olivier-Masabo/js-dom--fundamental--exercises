//  Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

// For example:

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

// [] ==> null

function uniqueSum(num){
let numbr =num.filter((item,index) =>{ return num.indexOf(item) === index}).reduce((curr,acc) => curr + acc,0)
if(numbr === 0){
  console.log(null)
  return 0;
}
console.log(numbr);
 
}
uniqueSum([ 1, 3, 8, 1, 8])
uniqueSum([-1,-1,5,2,-7])
uniqueSum([])