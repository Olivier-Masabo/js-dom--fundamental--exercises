 function multiply(m,n){
    let finalArr =[]
    for(let i=1;i <=m ;i++){
        finalArr.push(n * i)
    }
    return finalArr;
 }

 console.log(multiply(3,5))