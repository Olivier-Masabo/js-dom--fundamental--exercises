 function group(arr){
    let arr2 =[]

    for(let i =0;i<arr.length;i++){
        let arr3=[]
        let result =arr.filter((item) =>arr.indexOf(item) !== arr.lastIndexOf(item)).sort((a,b) =>b - a)
        arr3.push(result)
        console.log(arr3)
    }
    // arr2.push()
 }
 group([2,3,4,5,3,4,2,9,0])