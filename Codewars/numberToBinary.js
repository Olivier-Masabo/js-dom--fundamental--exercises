 const binaryArrayToNumber =arr =>{
    let arr1 = arr.map((item) =>item.toString()).reduce((prev,curr) =>prev +=curr)
    let result =parseInt(arr1,2)
    console.log(result)
 }
  binaryArrayToNumber([0,1,0,1])