function createElement(){

    let email = document.getElementById('email').value; 
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let password = document.getElementsByID('password').value;
    let cpassword = document.getElementById('cpassword').value;

    
     var nameRegex = /^[A-Za-z\s]+$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordRegex = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/;


    if(fname == ""){
        alert("please enter the first name");
        return false;
    }
    if((fname.length <= 2) || (fname.length > 20)){
        alert("user name must be between 2 and 20");
        return false;
    }
    if(!isNaN(fname)){
        alert("only charecter is allowed");
    }

    if(lname == ""){
        alert("please enter the last name");
        return false;
    }
    if((lname.length <= 2) || (fname.length > 20)){
        alert("user name must be between 2 and 20");
        return false;
    }
    if(!isNaN(lname)){
        alert("only charecter is allowed");
    }

    if(password == ""){
        alert("please enter the password ");
        return false;
    }
    if((password.length <= 6) || (password.length > 20)){
        alert("user name must be between 6 and 20");
        return false;
    }

    if(cpassword == ""){
        alert("please enter the confirom password ");
        return false;
    }
   
    if(password != cpassword){
        alert("password is not matching");
    }
    
    if(email == ""){
        alert("please enter the email. ");
        return false;
    }
   
        
}