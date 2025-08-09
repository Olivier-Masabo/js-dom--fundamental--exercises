 function evenChars(string) {
  return string.split("").map((item,index) =>{
  if(index %2 !== 0){
      return item;
  }
  else{
      return [] || "invalid string";
  }}).filter(elem => typeof elem ==="string")

  
}
console.log(evenChars("abcdefghijklmnopqrst"))


function monkeyCount(n) {
  let newArr =[]
for(let i =1;i<=n;i++){
  newArr.push(i)
}
  return newArr;
}
monkeyCount(5)


function between(a, b) {
  let newarr =[]
  for( let i =a; i <= b;i++){
   newarr.push(i)
  }
  return newarr;
}
between(1, 4)