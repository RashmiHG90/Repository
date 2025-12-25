function validate(){
    alert("validating");
     let emailId = document.getElementById("email").value
    alert("validation started" + emailId);
    //let password = document.getElementById("passwordId").value
    // if(emailId.length == 0){
    //  alert ("Enter the email id")
    //     return false;
    // }    
    if(emailId=="admin@gmail.com"){
        console.log(emailId);
        alert("successfully logged in");
        return true;
    }else{
         console.log(emailId);
        alert("login failed , try again");
        return false;
    }
    return false;
}