 function removeExclamation(word){
    
        if(word.includes('!')){
           let other= word.replace(/!/gi, "")
           console.log(other)
        }
        else{
            console.log(false)
        }
    }
 removeExclamation("hello !! world!!! alex ! king mufasa!!")

