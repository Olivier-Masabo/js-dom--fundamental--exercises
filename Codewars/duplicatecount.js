 function duplicateCount(text){
  let count = text.split("").filter((item,index) =>{

      if(text.indexOf(item) != index){
          console.log(`${item} comes ${item.length}`)
      }
  }

    )
  
  
}
duplicateCount("helloeeeellllooowwh")