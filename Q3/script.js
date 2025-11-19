
function getBugs(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(Math.random()<0.8) resolve(["UI glitch","API timeout","Login failure"]);
      else reject("API Failure!");
    },1000);
  });
}

function printOut(t){
 out.style.opacity=0;
 setTimeout(()=>{out.innerText=t; out.style.opacity=1;},50);
}

run.onclick=async()=>{
 out.innerText="";
 run.disabled=true; run.innerText="Running...";

 try{
   let bugs=await getBugs();
   printOut("Bugs Loaded:\n"+bugs.join("\n"));
 }catch(e){
   printOut("Error: "+e);
 }

 run.disabled=false; run.innerText="Run";
};

clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
