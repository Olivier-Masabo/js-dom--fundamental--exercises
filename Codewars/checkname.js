 function nameInStr(str, name){
  let string = str.split("")
  let names = name.split("")
let result =names.every((item) =>string.includes(item))
console.log(result)
}
nameInStr("king alex rema amen", "kara")