 function sumOfNumInStr(str){
   let numb = /\d+/ig;
   let result = str.match(numb).map(Number).reduce((prev,curr)=> prev +curr)
   console.log(result)
 }
 sumOfNumInStr("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog")