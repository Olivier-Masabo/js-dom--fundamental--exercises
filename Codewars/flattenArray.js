 function flattenAndSort(array) {
 return array.flat().sort((a,b) => a - b)
}
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))


// Encrypting string...

var encryptThis = function(text) {
 return text.split(" ").map(word =>{
    if(word < 1)return false;
return word.charCodeAt(0)+ word[word.length - 1] +  word.slice(2, -1) + word[1]
 }).join(" ")

}
console.log(encryptThis("Hello world"))

// First non-repeated character

function firstNonRepeatingLetter(s) {
 const arr = s.split("")
 const lowercase = s.toLowerCase()
 for(let i=0;i<arr.length;i++){
   if(lowercase.indexOf(lowercase[i]) === lowercase.lastIndexOf(lowercase[i])){
     return arr[i]
   }
 }
  return ""
}
firstNonRepeatingLetter("moonmen")