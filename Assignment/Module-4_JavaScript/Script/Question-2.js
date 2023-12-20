function ans(){
    let text = document.getElementById('inp').value;
    let ans = document.getElementById('output');
   
    // Check if the input is a number
    if (!isNaN(text)) {
        ans.innerHTML = 'Input is a number.';
    } else {
        ans.innerHTML = 'Input is not a number.';
    }

    console.log(typeof text);
}