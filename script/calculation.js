
let btn = document.getElementById("btn");
let steps = 0;
let increments=document.getElementById("increments");
let result = document.getElementById("result");
let errorText = document.getElementById("error");
let numberInput = document.getElementById("number-input");
let xLabel=[];
let yLabel=[];



errorText.style.display="none";


btn.addEventListener("click", function(){
  xLabel=[];
yLabel=[];
collatz();
makeChart();
numberInput.value = " ";


})


function collatz(){
    let number = parseFloat(document.getElementById("number-input").value);
    if (number <= 1) {
        errorText.style.display="flex";
        html.style.display="none";  
         
      }
    while(number != 1){
        if(number%2==0){
            number = number/2;
        }else{
            number = (number*3)+1;
        }
        xLabel.push(steps);
        yLabel.push(number);
       
        console.log(yLabel);
        console.log(xLabel);
        steps++;
    }
  }




