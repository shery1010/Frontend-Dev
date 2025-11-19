
Array.prototype.myMap=function(cb){
 let arr=[]; for(let i=0;i<this.length;i++) arr.push(cb(this[i],i));
 return arr;
};

function printOut(t){out.style.opacity=0;setTimeout(()=>{out.innerText=t;out.style.opacity=1;},50);}

run.onclick=()=>{
 run.disabled=true; run.innerText="Running...";
 let arr=document.getElementById("mapnums").value.split(',').map(Number);
 if(arr.some(isNaN)) arr=[1,2,3];
 setTimeout(()=>{
  printOut(arr.myMap(n=>n*2));
  run.disabled=false; run.innerText="Run";
 },300);
};
clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
