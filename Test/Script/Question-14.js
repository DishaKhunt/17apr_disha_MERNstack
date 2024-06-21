function reverse(){
    let inp = parseInt(document.getElementById("inp").value);

    let reverse = 0;
    while(inp>0){
        let lastdigit = inp%10;
        reverse = reverse*10 + lastdigit;
        inp = Math.floor(inp / 10);
    }

    document.getElementById("ans").innerHTML = reverse;
}