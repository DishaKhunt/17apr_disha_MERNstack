// use switch case
let day;
switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}
document.getElementById("demo1").innerHTML = "Today is "+ "<b>"+ day +"</b>";

setInterval(myFunction2, 1000);

function myFunction2(){
    let date =  new Date();

    document.getElementById("demo2").innerHTML = 
    "Current time is : "+
    date.getHours() + ":"+
    date.getMinutes() + ":"+
    date.getSeconds();
}
