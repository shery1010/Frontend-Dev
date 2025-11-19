
function showEndMessage(){ return "Welcome to the course!"; }
function greetUser(name, callback){ return "Hello " + name + "\n" + callback(); }

function printOut(txt){
  const o=document.getElementById("out");
  o.style.opacity=0;
  setTimeout(()=>{o.innerText=txt;o.style.opacity=1;},50);
}

run.onclick=()=>{
  run.disabled=true; run.innerText="Running...";
  const name=document.getElementById("name").value || "User";
  setTimeout(()=>{
    printOut(greetUser(name,showEndMessage));
    run.disabled=false; run.innerText="Run";
  },300);
};
clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
