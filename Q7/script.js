
function loadProfile(){ return new Promise((res,rej)=>setTimeout(()=>Math.random()<0.8?res("Profile Loaded"):rej("Profile Fail"),2000)); }
function loadPosts(){ return new Promise((res,rej)=>setTimeout(()=>Math.random()<0.8?res("Posts Loaded"):rej("Posts Fail"),1500)); }
function loadMessages(){ return new Promise((res,rej)=>setTimeout(()=>Math.random()<0.8?res("Messages Loaded"):rej("Messages Fail"),1000)); }

function printOut(t){ out.style.opacity=0; setTimeout(()=>{out.innerText+=t+"\n"; out.style.opacity=1;},50); }

run.onclick=async()=>{
 out.innerText="";
 run.disabled=true; run.innerText="Running...";

 let start=Date.now();
 let results=await Promise.allSettled([loadProfile(),loadPosts(),loadMessages()]);
 let end=Date.now();

 results.forEach(r=> printOut(JSON.stringify(r)));

 printOut("Total time: "+(end-start)+"ms");

 run.disabled=false; run.innerText="Run";
};

clear.onclick=()=>{out.innerText=""; out.style.opacity=0;}
