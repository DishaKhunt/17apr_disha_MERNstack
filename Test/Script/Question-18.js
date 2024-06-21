// create an Array
let arr1 = [12,34,56,1];
let arr2 = [-12,-34,0,-56,-1]

// min function
function min(arr){
    let min = arr[0];

    for(let i = 0; i<=arr.length; i++){
        if(arr[i]< min){
          min = arr[i];
        }
    }
    return min;
}


// display the lowest Number
document.getElementById("demo").innerHTML = 
"Array is : "+arr1+"<br>"+ 
"Lowest Number is : "+"<b>"+min(arr1)+"</b>"+"<br><br>"+
"Array is : "+arr2+"<br>"+ 
"Lowest Number is : "+"<b>"+min(arr2)+"</b>";