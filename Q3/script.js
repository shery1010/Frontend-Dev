
const user1={name:'Shreya', showName:()=>this.name};
const user2={name:'Shreya', showName(){return this.name;}};

function printOut(t){
 out.style.opacity=0;
 setTimeout(()=>{out.innerText=t; out.style.opacity=1;},50);
}

run.onclick=()=>{
 run.disabled=true; run.innerText="Running...";
 setTimeout(()=>{
  printOut("Arrow this.name: "+user1.showName()+"\nFixed: "+user2.showName());
  run.disabled=false; run.innerText="Run";
 },300);
};
clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
