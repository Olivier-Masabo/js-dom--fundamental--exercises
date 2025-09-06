  const inputObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for(let value in inputObject){
    console.log(`${value.toUpperCase()}: ${inputObject[value]}`)
}

//shifting first letter at the end and remain special character unchangable

function pigIt(str) {
  let words = str.split(" ").map(item => {
    return /^[a-zA-Z]+$/.test(item) 
      ? item.slice(1) + item.charAt(0) + "ay" 
      : item;
  });
  return words.join(" ");
}