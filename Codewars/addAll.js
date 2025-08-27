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