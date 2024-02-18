const submit_btn = document.querySelector("#submit-btn");

submit_btn.addEventListener("click", function(){
    const userName = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(userName === ""){
        alert("Please Enter your Username");
        return false;
    }
    if(!isNaN(userName)){
        alert("please Enter the valid charecter.Don't use number.");
        return false;
    }
    if(email === ""){
        alert("please Enter your email address.");
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert("Please enter a valid email address.");
        return false;
    }
    if(password === ""){
        alert("please Enter your password.");
        return false;
    }
   
    Swal.fire({
            title: "Good job!",
            text: "Submit SuccessFully!",
            icon: "success"
    });

});
