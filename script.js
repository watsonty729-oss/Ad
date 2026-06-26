/* ==========================================
   AI LEAD MARKETING
   SCRIPT.JS
==========================================*/

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>80){

nav.style.background="rgba(7,9,15,.95)";
nav.style.boxShadow="0 15px 40px rgba(0,0,0,.45)";

}else{

nav.style.background="rgba(7,9,15,.55)";
nav.style.boxShadow="none";

}

});


/*********************
SCROLL ANIMATIONS
**********************/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(".service-card,.pricing-card,#about,.hero-content").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


/*********************
MOUSE GLOW
**********************/

const glow=document.createElement("div");

glow.id="mouseGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/*********************
FLOATING PARTICLES
**********************/

const hero=document.querySelector(".hero-background");

for(let i=0;i<25;i++){

const p=document.createElement("span");

p.className="particle";

p.style.left=Math.random()*100+"%";

p.style.animationDelay=Math.random()*12+"s";

p.style.animationDuration=(8+Math.random()*10)+"s";

hero.appendChild(p);

}
