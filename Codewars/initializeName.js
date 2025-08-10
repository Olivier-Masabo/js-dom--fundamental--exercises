 function initializeNames(name){
    let splided = name.split(" ");
    if(splided.length > 2){
        return splided.map((a)=> splided.indexOf(a) > 0 && splided.indexOf(a) < splided.length-1 ? `${a.charAt(0)}.` : a).join(" ");
    }
   return name

}
console.log(initializeNames('Lois Gihugu Mary'))