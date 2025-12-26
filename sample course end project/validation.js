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
        document.getElementById("email").value=""
        document.getElementById("passwordId").value=""

    }
    return false;
}

function register(){
    let emailId = document.getElementById("email").value
    let username = document.getElementById("name").value
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailId)) {
    let passwordId = document.getElementById("passwordId").value
     if(emailId!=""){
        console.log(emailId);
        sessionStorage.setItem(emailId,passwordId)
        sessionStorage.setItem("user1",username)
        alert("Registered successfully");
        return true;
    }else{
         console.log(emailId);
        alert("Registeration failed , try again");
        return false;
    }

    }else{
        alert("Please enter a valid email address (e.g., name@example.com).");
        return false;
    }

}