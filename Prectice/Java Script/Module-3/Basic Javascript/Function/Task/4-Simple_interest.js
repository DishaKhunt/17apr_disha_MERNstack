function simple_interest(){
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    let amount = p*(1+(r*t));

    document.getElementById("amount").innerHTML = amount;
}