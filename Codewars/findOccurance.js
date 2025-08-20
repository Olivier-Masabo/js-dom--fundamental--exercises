 function findOccur(arr,n){
    let newArr =[]
    for(let i=0;i<arr.length;i++){
        if(arr[i] === n){
            newArr.push(i)
        }
    }
    return newArr;
 }
 console.log(findOccur([1,2,3,4,5,6,7,8,5,6,5],5))

 // find lottery machine

 function lottery(str){
  let checking = /\d/ig
  let result =str.match(checking)
  if(result){
    
  let final =[...new Set(result)].join("")
  return final
  }else{
    return "One more run!"
  }
}