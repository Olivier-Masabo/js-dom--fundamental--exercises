 function duplicateCount(text){
  let count = text.split("").filter((item,index) =>{

      if(text.indexOf(item) != index){
          console.log(`${item} comes ${item.length}`)
      }
  }

    )
  
  
}
duplicateCount("helloeeeellllooowwh")

// getting only duplicate


 function onlyDuplicates(str) {
  return str.split("").filter(item => str.indexOf(item) !== str.lastIndexOf(item)).join("")
}