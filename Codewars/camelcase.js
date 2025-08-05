 function toCamelCase(str){
let word = str.split(/[_-]/).map((item,index) =>{
  return index != 0?item.charAt(0).toUpperCase() + item.slice(1).toLowerCase(): item

}).join('')

console.log(word)
}
toCamelCase("hello_mufasa-and_samuel")