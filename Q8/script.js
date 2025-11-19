
function submitOrder(){
 return new Promise((res,rej)=>{
   setTimeout(()=>Math.random()<0.5?res("Success"):rej("Failed"),800);
 });
}

async function processOrder(){
 for(let i=1;i<=3;i++){
   try{
     let ok=await submitOrder();
     return "Attempt "+i+": Success";
   }catch(e){
     out.innerText+="Attempt "+i+": Failed\n";
   }
 }
 throw "Order could not be processed";
}

function printOut(t){ out.style.opacity=0; setTimeout(()=>{out.innerText+=t+"\n"; out.style.opacity=1;},50); }

run.onclick=async()=>{
 out.innerText="";
 run.disabled=true; run.innerText="Running...";
 try{
   let x=await processOrder();
   printOut(x);
 }catch(e){ printOut(e); }
 run.disabled=false; run.innerText="Run";
};

clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
