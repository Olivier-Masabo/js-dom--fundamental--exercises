 function toWeirdCase(string){
    let word =string.split("").filter((item,index) =>{index %2 !==0 ? item.toUpperCase() :item.toLowerCase()}).join()
   return word
    

}
console.log(toWeirdCase("Gambira"))