function circle(){
    let r = parseFloat(document.getElementById("radius").value);

    let area = Math.PI *(r**2);

    document.getElementById("area").innerHTML = area;
}