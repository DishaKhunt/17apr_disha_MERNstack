// crete an Array
let arr1 = [12,34,56,1];
let arr2 = [-12,-34,0,-56,-1]


// max function
function max(arr){
    let max = arr[0];

    for(let i = 0; i<=arr.length; i++){
        if(arr[i]> max){
          max = arr[i];
        }
    }
    return max;
}

// display the highest number
document.getElementById("demo").innerHTML = 
"Array is : "+arr1+"<br>"+ 
"Highest Number is : "+"<b>"+max(arr1)+"</b>"+"<br><br>"+
"Array is : "+arr2+"<br>"+ 
"Highest Number is : "+"<b>"+max(arr2)+"</b>";