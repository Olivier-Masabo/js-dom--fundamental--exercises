 function replaceInPlace(sentence){
    return sentence.split(" ").map(item => item.split("").reverse().join("")).join(" ")

 }
 console.log(replaceInPlace("I am the good boy"))