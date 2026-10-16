/* ---- intro animation (BHASITHA) ---- */
(function(){
  const root=document.documentElement,ov=document.getElementById("intro");
  if(!ov||!root.classList.contains("intro-on"))return;
  const W="BHASITHA",N=12;
  try{sessionStorage.setItem("intro","1")}catch(e){}
  ov.innerHTML='<div class="cols">'+Array.from({length:N},(_,c)=>`<i style="left:${c*100/N}%;width:calc(${100/N}% + 1px)"></i>`).join("")+'</div><div class="iw">'+[...W].map(c=>`<span><b>${c}</b></span>`).join("")+'</div><span class="skip">Click to skip</span>';
  root.classList.remove("intro-on");root.classList.add("intro-run");
  const L=[...ov.querySelectorAll(".iw b")],C=[...ov.querySelectorAll(".cols i")];
  L.forEach((b,i)=>b.animate([{transform:"translateY(118%)"},{transform:"translateY(0)"}],{duration:800,delay:350+i*90,easing:"cubic-bezier(.2,.8,.2,1)",fill:"both"}));
  let done=false,t;
  function out(){
    if(done)return;done=true;clearTimeout(t);
    const sk=ov.querySelector(".skip");if(sk)sk.animate([{opacity:1},{opacity:0}],{duration:250,fill:"both"});
    L.forEach((b,i)=>b.getAnimations().forEach(a=>a.finish()));
    L.forEach((b,i)=>b.animate([{transform:"translateY(0)"},{transform:"translateY(-118%)"}],{duration:600,delay:i*45,easing:"cubic-bezier(.7,0,.8,.2)",fill:"both"}));
    C.forEach((c,i)=>c.animate([{transform:"translateY(0)"},{transform:"translateY(-101%)"}],{duration:800,delay:380+i*55,easing:"cubic-bezier(.7,0,.2,1)",fill:"both"}));
    setTimeout(()=>{ov.remove();root.classList.remove("intro-run")},380+N*55+850);
  }
  t=setTimeout(out,350+7*90+800+750);
  ov.addEventListener("click",out);
})();
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
let SET={t:"",u:[],c:null},idx=0;const lb=$("#lb");
function show(){$("#lbimg").src=SET.u[idx];$("#lbimg").alt=SET.t;$("#cap").textContent=`${(SET.c&&SET.c[idx])||SET.t}  ${idx+1}/${SET.u.length}`}
function openSet(t,u,i,c){SET={t,u,c:c||null};idx=i||0;show();lb.classList.add("open");document.body.style.overflow="hidden"}
function openLb(k){const p=P[+k];openSet(p.n,p.i.map(x=>`projects/${p.f}/${x}`))}
function closeLb(){lb.classList.remove("open");document.body.style.overflow=""}
function step(d){const n=SET.u.length;idx=(idx+d+n)%n;show()}
document.addEventListener("click",e=>{const b=e.target.closest("[data-k]");if(b)openLb(b.dataset.k);
 const g=e.target.closest("[data-gi]");if(g){const c=G[+g.dataset.gc];openSet(c.n,[...document.querySelectorAll("#ggrid .gimg img")].map(m=>m.getAttribute("src")),+g.dataset.gi,c.t)}
 if(e.target===lb||e.target.closest("#x"))closeLb();if(e.target.closest("#prev"))step(-1);if(e.target.closest("#next"))step(1)});
document.addEventListener("keydown",e=>{if(!lb.classList.contains("open"))return;if(e.key==="Escape")closeLb();if(e.key==="ArrowLeft")step(-1);if(e.key==="ArrowRight")step(1)});
/* graphic design gallery */
// ADD NEW DESIGNS: put images in projects/graphic-design/<folder>/ named 1.jpg, 2.jpg, 3.jpg ... then raise "c" (count).
// ADD NEW CATEGORY: copy one line below and change n (name), f (folder), c (count), e (file extension).
const G=[
 {n:"Logo Design",f:"logo-design",c:1,e:"jpg",t:["TechStore.lk"]},
 {n:"Business Card Design",f:"business-card-design",c:2,e:"jpg"}
];
// t:[...] = optional business names shown under each design (same order as 1, 2, 3 ...)
// File type is detected automatically (jpg, png, jpeg, webp), so e is only a first guess.
const EXT=["jpg","png","jpeg","webp","JPG","PNG"];
function fx(img){const e=img.dataset.e||"",o=[e,...EXT.filter(x=>x!==e)];let n=+(img.dataset.n||0)+1;if(n>=o.length)return;img.dataset.n=n;img.src=img.getAttribute("src").replace(/\.[A-Za-z]+$/,"."+o[n])}
const gUrls=c=>Array.from({length:c.c},(_,i)=>`projects/graphic-design/${c.f}/${i+1}.${c.e}`);
(function(){
  const tabs=document.querySelectorAll(".tab");if(!tabs.length)return;
  let cat=Math.max(0,G.findIndex(c=>c.c>0));
  function drawG(){
    $("#subtabs").innerHTML=G.map((c,i)=>`<button class="chipb ${i===cat?"on":""}" data-cat="${i}">${c.n}<small>${c.c}</small></button>`).join("");
    const c=G[cat],u=gUrls(c);
    $("#ggrid").innerHTML=u.length?u.map((src,i)=>`<figure class="gfig"><button class="gimg" data-gc="${cat}" data-gi="${i}" aria-label="${(c.t&&c.t[i])||c.n+" "+(i+1)}"><img src="${src}" data-e="${c.e}" alt="${(c.t&&c.t[i])||c.n+" "+(i+1)}" loading="lazy" onerror="fx(this)"></button>${c.t&&c.t[i]?`<figcaption>${c.t[i]}</figcaption>`:""}</figure>`).join(""):`<div class="empty"><b>${c.n}</b>New designs are coming soon.</div>`;
  }
  function setTab(t){
    tabs.forEach(b=>{const on=b.dataset.tab===t;b.classList.toggle("on",on);b.setAttribute("aria-selected",on)});
    $("#pw").hidden=t!=="web";$("#pg").hidden=t!=="graphic";
    try{history.replaceState(null,"",t==="graphic"?"#graphic":location.pathname)}catch(e){}
  }
  tabs.forEach(b=>b.addEventListener("click",()=>setTab(b.dataset.tab)));
  $("#subtabs").addEventListener("click",e=>{const b=e.target.closest("[data-cat]");if(b){cat=+b.dataset.cat;drawG()}});
  drawG();setTab(location.hash==="#graphic"?"graphic":"web");
  addEventListener("hashchange",()=>setTab(location.hash==="#graphic"?"graphic":"web"));
})();
/* nav */
$("#menu").onclick=()=>$("#links").classList.toggle("open");
document.querySelectorAll("#links a").forEach(a=>a.onclick=()=>$("#links").classList.remove("open"));
/* reveal + counters */
const io=new IntersectionObserver(en=>en.forEach(x=>{if(!x.isIntersecting)return;x.target.classList.add("in");io.unobserve(x.target);
 x.target.querySelectorAll("[data-n]").forEach(c=>{const n=+c.dataset.n,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1200,1);c.textContent=Math.round(n*(1-Math.pow(1-p,3)))+c.dataset.s;if(p<1)requestAnimationFrame(f)})(t0)})}),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
