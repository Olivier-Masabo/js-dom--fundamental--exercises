 function autocomplete(dictionary){
     let val= dictionary.map(element =>
       element + "");
       console.log(val)
let result = val.toString()
let separator = result.join(" ")

console.log(result)
console.log(separator)
// let final = result.forEach(element => element.startWith("ai")
//     );
// console.log(final)
}
autocomplete(['airplane','airport','apple','ball'])