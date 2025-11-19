
function Person(n){this.name=n;}
Person.prototype.showName=function(){return this.name;}
function Student(n,b){Person.call(this,n);this.branch=b;}
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;
Student.prototype.showBranch=function(){return this.branch;}

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
