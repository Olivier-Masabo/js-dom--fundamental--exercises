 function myForeach(arr,callbackFunc){
    for(let i=0;i< arr.length;i++){
        callbackFunc(arr[i])
    }
 }

 function callbackFn(item){
console.log(item + 2)
 }

 myForeach([1,2,3,4,5,6,7,8],callbackFn)