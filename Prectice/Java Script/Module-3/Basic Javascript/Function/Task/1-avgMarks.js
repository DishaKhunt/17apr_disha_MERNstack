function result(){

    let maths  = parseInt(document.getElementById('maths').value);
    let physics = parseInt(document.getElementById('physics').value);
    let chemistry = parseInt(document.getElementById('chemistry').value);
    let english = parseInt(document.getElementById('english').value);
    let biology = parseInt(document.getElementById('biology').value);

    let totalMarks = maths + physics + chemistry + english + biology;
    let percentage = (totalMarks/250)*100;

    document.getElementById("total").innerHTML = totalMarks;
    document.getElementById("percentage").innerHTML = percentage + "%";
}