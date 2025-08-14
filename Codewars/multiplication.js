 function multiplied(number){
    let result ="";
    for(let i=1;i<=10;i++){
        result +=` ${i} * ${number} = ${number * i}\n`
    }
    return result.trim()
 }

 console.log(multiplied(4))