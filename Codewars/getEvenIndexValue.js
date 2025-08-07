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
