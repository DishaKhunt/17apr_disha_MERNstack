function ractangle(){
    let l = parseFloat(document.getElementById("length").value);
    let w = parseFloat(document.getElementById("width").value);

    // formula of ractangle Area
    let area = l*w;

    document.getElementById("area").innerHTML = area;
}