function validate(){
    alert("validating");
     let emailId = document.getElementById("email").value
    alert("validation started" + emailId);
    //let password = document.getElementById("passwordId").value
    // if(emailId.length == 0){
    //  alert ("Enter the email id")
    //     return false;
    // }    

    let user1 = {emailId:"raj@gmail.com",password:"raj@123"}
    let user2 ={emailId:"ravi@gmail.com",password:"ravi@123"}
    let user3 ={emailId:"ramesh@gmail.com",passord:"ramesh@123"}
     let users=[];
     users.push(user1);
     users.push(user2);
     users.push(user3);


    if(emailId=="admin@gmail.com"){
        console.log(emailId);
        alert("successfully logged in");
        sessionStorage.setItem("user","admin@gmail.com")
        return true;
    }else{
         console.log(emailId);
        alert("login failed , try again");
        return false;
    }
    return false;
}