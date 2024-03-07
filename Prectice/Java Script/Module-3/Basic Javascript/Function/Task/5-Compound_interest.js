function compound_interest(){
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let n = parseFloat(document.getElementById("number").value);

    // let amount = p*((1+(r/n))**(n*t));

    let amount = p*(Math.pow((1+r/100),n));

    document.getElementById("amount").innerHTML = amount;
}