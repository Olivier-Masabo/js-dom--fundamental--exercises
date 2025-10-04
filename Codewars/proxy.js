
const student ={
    name :"Alex",
    marks:87,
    password:"KingAlex123@"
}

const handleStud = {
    get(obj,prop){
        if(prop === "password"){
            console.log("Access denied to password")
            return "********"
        }
        else{
           return obj[prop]  
        }
    },
    set(obj,prop,value){
        if(value > 100 || value < 0){
            console.log("Invalid marks")
            return false;  
        }
        else{
            obj[prop] = value;
            return true;
        }
    }
    
}
const myProxy = new Proxy(student,handleStud)

console.log(myProxy.name)