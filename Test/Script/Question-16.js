function random(){
    
    let random = Math.floor(Math.random() * 10000); 

    document.getElementById("otp").innerHTML = "OTP is : " +random;
}