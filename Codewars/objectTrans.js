  const inputObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for(let value in inputObject){
    console.log(`${value.toUpperCase()}: ${inputObject[value]}`)
}