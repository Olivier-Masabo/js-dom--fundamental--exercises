 function total(arr){
 let result = arr.filter((item) =>{
    for(let i=2;i<=Math.sqrt(item);i++){
     if(item %i === 0){
        return false;
     }
     else{
        return true
     }
    }
 })
 console.log(result.reduce((prev,acc) =>prev + acc,0))
};

total([1,2,3,4,5,6,7])