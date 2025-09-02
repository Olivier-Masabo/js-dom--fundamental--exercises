  let myFunc = (arr) =>{
    let count =0
    while(arr.length > 1){
        arr.sort((a,b) => a - b)
        let sum = arr[0] + arr[1]
        count += sum
        arr.splice(0,2,sum)
    }
    return count
  }
  console.log(myFunc([1, 2, 3,4,5]));


  //finding total ascii code 

  function uniTotal (string) {
return string.split("").map(item => item.charCodeAt()).reduce((prev,acc ) => prev + acc,0)
}
console.log(uniTotal("Mary Had A Little Lamb"))