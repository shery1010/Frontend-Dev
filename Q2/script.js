
function applyOperation(numbers, op){ return numbers.map(op); }

function printOut(t){
 out.style.opacity=0;
 setTimeout(()=>{out.innerText=t; out.style.opacity=1;},50);
}

run.onclick=()=>{
 run.disabled=true; run.innerText="Running...";
 let arr=document.getElementById("nums").value.split(',').map(Number);
 if(arr.some(isNaN)) arr=[1,2,3,4];
 setTimeout(()=>{
   let doubled=applyOperation(arr,n=>n*2);
   let squared=applyOperation(arr,n=>n*n);
   printOut("Doubled: "+doubled+"\nSquared: "+squared);
   run.disabled=false; run.innerText="Run";
 },300);
};
clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
