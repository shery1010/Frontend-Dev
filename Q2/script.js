
function printOut(t){
 out.style.opacity=0;
 setTimeout(()=>{out.innerText=t; out.style.opacity=1;},50);
}

run.onclick=()=>{
  out.innerText="";
  run.disabled=true; run.innerText="Running...";

  let logs=[];

  logs.push("Start");

  setTimeout(()=>logs.push("setTimeout callback"),0);

  Promise.resolve().then(()=>logs.push("Promise.then callback"));

  logs.push("Synchronous log");
  logs.push("End");

  setTimeout(()=>{
    printOut(logs.join("\n"));
    run.disabled=false; run.innerText="Run";
  },10);
};
clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
