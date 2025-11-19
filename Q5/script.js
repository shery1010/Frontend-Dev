
function step(name,cb){
 setTimeout(()=>{cb(name+" completed");},1000);
}

function printOut(t){ out.style.opacity=0; setTimeout(()=>{out.innerText+=t+"\n"; out.style.opacity=1;},50); }

run.onclick=()=>{
 out.innerText="";
 run.disabled=true; run.innerText="Running...";

 // Callback hell
 step("Design",(a)=>{
  printOut(a);
  step("Build",(b)=>{
    printOut(b);
    step("Test",(c)=>{
      printOut(c);
      step("Deploy",(d)=>{
        printOut(d);
        step("Celebrate",(e)=>{
          printOut(e);
          run.disabled=false; run.innerText="Run";
        });
      });
    });
  });
 });

};

clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
