function validate(){

     let emailId = document.getElementById("email").value
     let passwordId = document.getElementById("passwordId").value
     let validemail = sessionStorage.getItem(emailId);
    if(validemail){
     let userPassword = sessionStorage.getItem(emailId);
     console.log(userPassword);

     if(userPassword==passwordId){
        console.log(emailId);
        alert("successfully logged in");
        return true;
      }else{
         console.log(emailId);
        alert("login failed , try again");
        return false;
      }
    } else{
        alert("Please register!")
    }
    return false;
}

function register(){
    let emailId = document.getElementById("email").value
    let passwordId = document.getElementById("passwordId").value
     if(emailId!=""){
        console.log(emailId);
        sessionStorage.setItem(emailId,passwordId)
        alert("Registered successfully");
        return true;
    }else{
         console.log(emailId);
        alert("Registeration failed , try again");
        return false;
    }

}