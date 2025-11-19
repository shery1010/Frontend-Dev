
function server(name,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      Math.random()<0.9 ? resolve(name+" done") : reject(name+" failed");
    },delay);
  });
}

function printOut(t){
 out.style.opacity=0;
 setTimeout(()=>{out.innerText+=t+"\n"; out.style.opacity=1;},50);
}

run.onclick=async()=>{
 out.innerText="";
 run.disabled=true; run.innerText="Running...";

 let A=server("Server A",2000);
 let B=server("Server B",3000);

 try{
   let all=await Promise.all([A,B]);
   printOut("Deployment completed for all servers");
   printOut(all.join("\n"));
 }catch(e){
   printOut("Error: "+e);
 }

 Promise.race([server("A",2000),server("B",3000)])
   .then(r=>printOut("Fastest response: "+r))
   .catch(e=>printOut("Race Error: "+e));

 run.disabled=false; run.innerText="Run";
};

clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
