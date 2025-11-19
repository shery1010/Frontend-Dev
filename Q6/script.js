
async function loadProducts(){
 try{
   const res=await fetch("https://fakestoreapi.com/products");
   if(!res.ok) throw new Error();
   return res.json();
 }catch(e){ throw "Failed to load products. Please try again."; }
}

function printOut(t){
 out.style.opacity=0;
 setTimeout(()=>{out.innerText=t; out.style.opacity=1;},50);
}

run.onclick=async()=>{
 out.innerText="Loading...";
 extra.innerHTML="";
 run.disabled=true; run.innerText="Running...";

 try{
   let data=await loadProducts();
   printOut("Loaded "+data.length+" products");

   let grid=document.createElement("div");
   grid.className="product-grid";

   data.forEach(p=>{
     let card=document.createElement("div");
     card.className="product-card";
     card.innerHTML=`<img src="${p.image}"><h4>${p.title}</h4><p>$${p.price}</p>`;
     grid.appendChild(card);
   });

   extra.appendChild(grid);

 }catch(e){
   printOut(e);
 }

 run.disabled=false; run.innerText="Run";
};

clear.onclick=()=>{out.innerText=""; out.style.opacity=0; extra.innerHTML="";}
