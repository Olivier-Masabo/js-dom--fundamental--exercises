 function initializeNames(name){
  let result = name.split(" ").map((item)=>{
    if(item[0] && item.length - 1 ){
    return item
    }
    else{
        return item.charAt(0) + "."
    }
  })

 console.log(result)

}
initializeNames('Lois Mary Lane')