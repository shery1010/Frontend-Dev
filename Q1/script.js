
function delay(step){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      Math.random()<0.9 ? resolve(step) : reject(step+" FAILED!");
    },1000+Math.random()*1000);
  });
}

function printOut(t){
 out.style.opacity=0;
 setTimeout(()=>{out.innerText+=t+"\n"; out.style.opacity=1;},50);
}

run.onclick=async()=>{
  run.disabled=true; run.innerText="Running...";
  out.innerText="";
  try{
    const boil=await delay("Water boiled");
    printOut(boil);
    const brew=await delay("Coffee brewed");
    printOut(brew);
    const pour=await delay("Coffee poured");
    printOut(pour);
    printOut("Coffee ready for the team!");
  } catch(e){ printOut(e); }
  run.disabled=false; run.innerText="Run";
};
clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
