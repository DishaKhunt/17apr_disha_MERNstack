let num1 = document.getElementById('fv');
let num2 = document.getElementById('sv');
let sp = document.getElementById('span');
function answer() {
    num1 = parseInt(num1.value);
    num2 = (num2.value);
    if (num1 < num2) {
        sp.innerHTML = true;
    }
    else {
        sp.innerHTML = false;
    }
}