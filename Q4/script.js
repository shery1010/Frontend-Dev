
function Car(b,m){this.brand=b;this.model=m;}
Car.prototype.getDetails=function(){return this.brand+" "+this.model;}

function printOut(t){
 out.style.opacity=0;
 setTimeout(()=>{out.innerText=t; out.style.opacity=1;},50);
}

run.onclick=()=>{
 run.disabled=true; run.innerText="Running...";
 setTimeout(()=>{
  let c1=new Car("BMW","X5"), c2=new Car("Audi","Q7");
  printOut(c1.getDetails()+"\n"+c2.getDetails());
  run.disabled=false; run.innerText="Run";
 },300);
};
clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
