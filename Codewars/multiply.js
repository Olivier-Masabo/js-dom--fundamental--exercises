 function multiply(m,n){
    let finalArr =[]
    for(let i=1;i <=m ;i++){
        finalArr.push(n * i)
    }
    return finalArr;
 }

 console.log(multiply(3,5))


 // finding summation 
 var summation = function (num) {
    let result=[]
    for (let i = 1; i <=num; i++){
       result.push(i)
    }
    return result.reduce((prev,curr) => prev + curr);
 
}
summation(8)