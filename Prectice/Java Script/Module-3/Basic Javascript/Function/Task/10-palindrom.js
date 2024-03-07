const btn = document.getElementById("btn");


btn.addEventListener("click",function(){
    let inp = parseInt(document.getElementById("inp").value);

    if(reverse(inp) == inp){
        Swal.fire({
            title: "Good job!",
            text: "The number is a palindrome.",
            icon: "success"
        });
    }
    else{
        Swal.fire({
            title: "Oops!",
            text: "The number is not a palindrome.",
            icon: "error"
        });
    }
});

// reverse number
function reverse(num){
    let reverse = 0;
    while(num>0){
        let lastdigit = num%10;
        reverse = reverse*10 + lastdigit;
        num = Math.floor(num / 10);
    }
   return reverse;
}