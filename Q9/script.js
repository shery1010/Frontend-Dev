
class Person{constructor(n){this.name=n;} showName(){return this.name;}}
class Student extends Person{constructor(n,b){super(n);this.branch=b;} showBranch(){return this.branch;}}

function printOut(t){out.style.opacity=0;setTimeout(()=>{out.innerText=t;out.style.opacity=1;},50);}

run.onclick=()=>{
 run.disabled=true; run.innerText="Running...";
 setTimeout(()=>{
  let s=new Student("Shreya","CSE");
  printOut(s.showName()+" - "+s.showBranch());
  run.disabled=false; run.innerText="Run";
 },300);
};
clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
