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

//two sum

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j]; 
      }
    }
  }
}

console.log(twoSum([1, 2, 3])); 

//sorting string depending on thier indices

function sepStr(str) {
    let sentence =str.split(" ");
    let foreach=Math.max(...sentence.map(item => item.length))
    let newArr =[]
    for(let i=0;i<foreach;i++){
        const row=[]
        sentence.forEach(word => row.push(word[i] || ""))
        newArr.push(row)
    }
    return newArr;
}