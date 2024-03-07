function power(){
    let a = parseInt(document.getElementById("inp1").value);
    let n = parseInt(document.getElementById("inp2").value);

    let power = a**n;
    document.getElementById("ans").innerHTML = power;
}

