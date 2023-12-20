$(document).ready(function(){
    $("#form").validate({
        

        rules:{
            fname:{
                required: true,
                minlength: 3,
                maxlength: 6
            },
            lname:{
                required: true,
                minlength: 3,
                maxlength: 6
            },
            email:{
                required: true,
                email: true,
                
            },
            phone:{
                required: true,
                number: true,
                maxlength: 10
            },
            address:{
                required: true
            },
            date:{
                
                required: true,
                date: true
            },
            password:{
                required: true,
                minlength: 6,
                maxlength: 8
            },
            pin:{
                required: true
            },
            state:{
                required: true
            },
            city:{
                required: true
            }
        },
        messages: {
            fname: "Please enter your first name",
            lname: "pkease enter your last name",
            date: "please enter your date",
            email: {
              required: "We need your email address to contact you",
              email: "Your email address must be in the format of name@domain.com"
            },
            phon: "please enter the number",
            address: "please entre your mail id",
            password: "please enter your password",
            city: "please enter your city"
          },

          submitHandler: function() { alert("Submitted!") }

       });

      
});
$('#submit').click(function(){

    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var date = $("#date").val();
    var address = $("#address").val();
    var city = $("#city").val();
    var pin = $("#pin").val();
    var state = $("#state").val();
    var password = $("#password").val();
    
    


    if(fname == "" ){
        alert("please enter first name");
    }
    
    if(lname == "" ){
        alert("please enter last name");
    }
    if(email == "" ){
        alert("please enter email id");
    }
    if(phone == "" ){
        alert("please enter phone number");
    }
    if(date == "" ){
        alert("please enter your birth dtae ");
    }
    if(address == "" ){
        alert("please enter address ");
    }
    if(city == "" ){
        alert("please enter city");
    }
    if(pin == "" ){
        alert("please enter pin");
    }
    if(state == "" ){
        alert("please enter state");
    }
    if(password == "" ){
        alert("please enter password ");
    }
   else{
    alert("registration sucsessfully....")
   }
});