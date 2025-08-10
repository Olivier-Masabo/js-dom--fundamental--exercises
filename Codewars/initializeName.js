 function initializeNames(name){
    let splided = name.split(" ");
    if(splided.length > 2){
        return splided.map((a)=> splided.indexOf(a) > 0 && splided.indexOf(a) < splided.length-1 ? `${a.charAt(0)}.` : a).join(" ");
    }
   return name

}
console.log(initializeNames('Lois Gihugu Mary'))


// sum of unique item in array

function repeats(arr){
return arr.filter((item) =>arr.indexOf(item) === arr.lastIndexOf(item)).reduce((prev,curr) => prev + curr,0)
};
repeats([4,5,7,5,4,8])