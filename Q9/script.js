
run.onclick=()=>{
 out.innerText="";
 run.disabled=true; run.innerText="Running...";

 let logs=[];

 logs.push("Script start");
 setTimeout(()=>logs.push("Timeout callback"),0);
 Promise.resolve().then(()=>logs.push("Promise callback"));
 logs.push("Script end");

 setTimeout(()=>{
   out.style.opacity=0;
   setTimeout(()=>{out.innerText=logs.join("\n"); out.style.opacity=1;},50);
   run.disabled=false; run.innerText="Run";
 },10);
};

clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
