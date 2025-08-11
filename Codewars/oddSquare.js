 function oddSquareFunc(arr){
    let result = arr.filter((item) =>item %2 !==0).map(elem => elem *elem)
    console.log(result)
 }
 oddSquareFunc([1, 2, 3, 4, 5, 6])
 oddSquareFunc([10, 15, 20, 25, 30])