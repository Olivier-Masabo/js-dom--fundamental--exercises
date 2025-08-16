//  function flattenAndSort(array) {
//  return array.flat().sort((a,b) => a - b)
// }
// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))


// Encrypting string...

var encryptThis = function(text) {
 return text.split(" ").map(word =>{
    if(word < 1)return false;
return word.charCodeAt(0)+ word[word.length - 1] +  word.slice(2, -1) + word[1]
 }).join(" ")

}
console.log(encryptThis("Hello world"))