 const inputObj ={
    firstName:"King",
    lastName:"alex",
    age:20
 }

 function upperKeys(obj,callbackFunc){
    let otherObj ={};
    for(let value in obj){
        otherObj[callbackFunc(value)] =obj[value]
    }
    return otherObj;
 }

 const transFormingKeys =upperKeys(inputObj,value => value.toUpperCase())
 console.log(transFormingKeys)