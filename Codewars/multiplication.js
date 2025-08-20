 function multiplied(number){
    let result ="";
    for(let i=1;i<=10;i++){
        result +=` ${i} * ${number} = ${number * i}\n`
    }
    return result.trim()
 }

 console.log(multiplied(4))

 // simple calculator using javaScript

 
function calculator(a,b,sign){
 if( typeof a !=="number" ||  typeof b !=="number" ) return "unknown value"
 switch(sign){
      
   case "+":
   return a + b
   break;
    case "-":
   return a - b
   break;
    case "/":
   return a / b
   break;
    case "*":
   return a * b
   break;
    default :
   return "unknown value";
   break;
 }
   

  }
  console.log(calculator(3,7,"-"))