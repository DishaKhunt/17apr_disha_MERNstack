// Multiplication 
function mul(){

    let inp1 = parseInt(document.getElementById("inp1").value);
    let inp2 = parseInt(document.getElementById("inp2").value);
    let ans = inp1*inp2;
    document.getElementById("ans").innerHTML = ans;
}

// Division
function div(){

    let inp1 = parseInt(document.getElementById("inp1").value);
    let inp2 = parseInt(document.getElementById("inp2").value);
    let ans = inp1/inp2;
    document.getElementById("ans").innerHTML = ans;
}