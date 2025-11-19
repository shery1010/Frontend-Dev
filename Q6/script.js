
function Person(n){this.name=n;} Person.prototype.sayName=function(){return this.name;}
function Faculty(n,d){Person.call(this,n);this.dept=d;}
Faculty.prototype=Object.create(Person.prototype);
Faculty.prototype.constructor=Faculty;
Faculty.prototype.sayDept=function(){return this.dept;}
function Professor(n,d,s){Faculty.call(this,n,d);this.special=s;}
Professor.prototype=Object.create(Faculty.prototype);
Professor.prototype.constructor=Professor;
Professor.prototype.saySpecial=function(){return this.special;}

function printOut(t){out.style.opacity=0;setTimeout(()=>{out.innerText=t;out.style.opacity=1;},50);}

run.onclick=()=>{
 run.disabled=true; run.innerText="Running...";
 setTimeout(()=>{
  let p=new Professor("Shreya","CSE","AI");
  printOut(p.sayName()+" - "+p.sayDept()+" - "+p.saySpecial());
  run.disabled=false; run.innerText="Run";
 },300);
};
clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
