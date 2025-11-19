
function step(name){
 return new Promise((res,rej)=>{
   setTimeout(()=>{
     Math.random()<0.85 ? res(name) : rej(name+" FAILED");
   },1000+Math.random()*1000);
 });
}

function printOut(t){ out.style.opacity=0; setTimeout(()=>{out.innerText+=t+"\n"; out.style.opacity=1;},50); }

run.onclick=async()=>{
 out.innerText="Start Pipeline\n";
 run.disabled=true; run.innerText="Running...";

 try{
   printOut(await step("Step 1: Order taken"));
   printOut(await step("Step 2: Food prepared"));
   printOut(await step("Step 3: Package ready"));
   printOut(await step("Step 4: Out for delivery"));
   printOut("Delivery completed!");
 }catch(e){
   printOut("Pipeline failed!");
 }

 run.disabled=false; run.innerText="Run";
};

clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
