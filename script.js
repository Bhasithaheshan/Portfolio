const P=[
 {f:"traderJournal",n:"Trader Journal",d:"A professional trading journal web app with a TradingView-inspired dark glassmorphism UI. It tracks the full trade lifecycle, auto-calculates win rate and risk-reward, and shows a live Chart.js analytics dashboard. Fully client-side, so your data stays private in your browser.",t:["HTML","CSS","JavaScript","Chart.js"],i:["1.png"],u:"https://bhasithaheshan.github.io/TradingJournal/"},
 {f:"tradexpertz",n:"TradeXpertz",d:"A modern trading education platform with structured learning modules for Technical Analysis, Smart Money Concepts and Market Structure. A fast, responsive dark UI built on a custom Blogger engine.",t:["HTML5","CSS","JavaScript","Blogger"],i:["1.png"],u:"https://tradexpertzclub.blogspot.com/#home"},
 {f:"trading-management",n:"Trading Money Management",d:"A free trading discipline platform with 15+ calculators for Binary Options, Forex and Crypto, plus a daily target tracker and trade journal. Built as an installable, offline-ready PWA in vanilla HTML, CSS and JavaScript, with all data kept privately in the browser.",t:["HTML5","CSS3","JavaScript","PWA"],i:["1.png","2.png","3.png","4.png"],u:"https://bhasithaheshan.github.io/Moneymanagement/"},
 {f:"traveller-portfolio",n:"Traveller Portfolio",d:"A modern, immersive travel portfolio that showcases journeys, destinations and photography albums. It has destination cards, social media integration and a contact section, all in a dark, nature-inspired responsive design.",t:["HTML","CSS","JavaScript"],i:["1.png"],u:"https://thusithamalshan.vercel.app/"}
];
const E=[
 {y:"2022",s:"Thalakolawewa Maha Vidyalaya",h:"GCE Ordinary Level",b:["A7 B2"],g:[["Mathematics","A"],["Science","A"],["ICT","A"],["Sinhala","A"],["History","A"],["Buddhism","A"],["Commerce","A"],["English","B"],["Music","B"]]},
 {y:"2025",s:"Ibbagamuwa Central College",h:"GCE Advanced Level, Technology Stream",b:["Result: A C C","🏆 District Rank: 125"],g:[["Science for Tech.","A"],["Engineering Tech.","C"],["Information Tech.","C"]]},
 {y:"Higher Ed.",s:"ESOFT Metro Campus",h:"Diploma in English",b:[],x:"Focus: International client communication & technical branding"},
 {y:"2026",s:"Rajarata University of Sri Lanka",h:"Bachelor of Engineering Technology (Hons)",b:["Engineering Technology (ET)"],x:"Normal intake · Index No. 5915554"},
 {y:"Recognition",s:"Mathematics Olympiad",h:"4th Place Finisher",b:["Provincial Level Competition"],x:"",a:1}
];
const SK=["HTML","CSS","JavaScript","Python","Java","Figma","UI Design","Branding","Illustrator","Photoshop","Canva","Web Dev","Trading"];
const $=s=>document.querySelector(s)||document.createElement("div");
$("#track").innerHTML=[...SK,...SK,...SK,...SK].map(s=>`<span>${s}</span>`).join("");
$("#skillbox").innerHTML=SK.map(s=>`<span>${s}</span>`).join("");
$("#pgrid").innerHTML=P.slice(0,+($("#pgrid").dataset.limit||P.length)).map((p,k)=>`<article class="tile card rv">
 <button class="shot" data-k="${k}" aria-label="View ${p.n} screenshots"><img src="projects/${p.f}/${p.i[0]}" alt="${p.n} screenshot" loading="lazy"><span class="num mono">0${k+1}</span></button>
 <div class="cbody"><h3>${p.n}</h3><p>${p.d}</p><ul class="tags">${p.t.map(t=>`<li>${t}</li>`).join("")}</ul>
 <div class="acts"><a class="btn p" href="${p.u}" target="_blank" rel="noopener">Live Demo ↗</a><button class="btn" data-k="${k}">Screenshots${p.i.length>1?" ("+p.i.length+")":""}</button></div></div></article>`).join("");
$("#edu").innerHTML=E.map(e=>`<div class="tile row rv ${e.a?"award":""}"><div class="yr">${e.y}</div><div><div class="sch">${e.s}</div><h3>${e.h}</h3>
 ${e.b.length?`<div class="badges">${e.b.map((b,i)=>`<span class="bd ${i?"o":""}">${b}</span>`).join("")}</div>`:""}
 ${e.g?`<div class="subs">${e.g.map(g=>`<div><span>${g[0]}</span><b>${g[1]}</b></div>`).join("")}</div>`:""}
 ${e.x?`<p class="sch">${e.x}</p>`:""}</div></div>`).join("");
/* typing effect */
(function(){const el=document.querySelector("#typed");if(!el)return;
const W=["Web & Graphic Designer","Frontend Developer","Trader","Building Digital Solutions @ Neolabz"];let w=0,c=0,del=false;
function tick(){const t=W[w];c+=del?-1:1;el.textContent=t.slice(0,c);let d=del?40:85;
 if(!del&&c===t.length){del=true;d=1600}else if(del&&c===0){del=false;w=(w+1)%W.length;d=400}
 setTimeout(tick,d)}
el.textContent="";setTimeout(tick,500)})();
/* lightbox */
let cur=0,idx=0;const lb=$("#lb");
function show(){const p=P[cur];$("#lbimg").src=`projects/${p.f}/${p.i[idx]}`;$("#lbimg").alt=p.n;$("#cap").textContent=`${p.n}  ${idx+1}/${p.i.length}`}
function openLb(k){cur=+k;idx=0;show();lb.classList.add("open");document.body.style.overflow="hidden"}
function closeLb(){lb.classList.remove("open");document.body.style.overflow=""}
function step(d){const n=P[cur].i.length;idx=(idx+d+n)%n;show()}
document.addEventListener("click",e=>{const b=e.target.closest("[data-k]");if(b)openLb(b.dataset.k);
 if(e.target===lb||e.target.closest("#x"))closeLb();if(e.target.closest("#prev"))step(-1);if(e.target.closest("#next"))step(1)});
document.addEventListener("keydown",e=>{if(!lb.classList.contains("open"))return;if(e.key==="Escape")closeLb();if(e.key==="ArrowLeft")step(-1);if(e.key==="ArrowRight")step(1)});
/* nav */
$("#menu").onclick=()=>$("#links").classList.toggle("open");
document.querySelectorAll("#links a").forEach(a=>a.onclick=()=>$("#links").classList.remove("open"));
/* reveal + counters */
const io=new IntersectionObserver(en=>en.forEach(x=>{if(!x.isIntersecting)return;x.target.classList.add("in");io.unobserve(x.target);
 x.target.querySelectorAll("[data-n]").forEach(c=>{const n=+c.dataset.n,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1200,1);c.textContent=Math.round(n*(1-Math.pow(1-p,3)))+c.dataset.s;if(p<1)requestAnimationFrame(f)})(t0)})}),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
