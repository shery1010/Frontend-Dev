
function makeMultiplier(m){return function(x){return x*m;}}

function printOut(t){out.style.opacity=0;setTimeout(()=>{out.innerText=t;out.style.opacity=1;},50);}

run.onclick=()=>{
 run.disabled=true; run.innerText="Running...";
 let m=parseInt(document.getElementById("mult").value)||3;
 setTimeout(()=>{
  const mul=makeMultiplier(m);
  printOut("Result: "+mul(5));
  run.disabled=false; run.innerText="Run";
 },300);
};
clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
