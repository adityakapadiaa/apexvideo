const YT=id=>"https://youtu.be/"+id;
const SET_Z190="Sony Z190 cameras · Blackmagic switcher · Wireless talkback";
const one=(t,id,sub="")=>[["The film",[[t,sub,YT(id)]]]];
/* k: event | wedding · st: short name printed on the disc · cer: format · meta: extra credit rows · l: latest · img: thumbnail file in /img (omit when there is none yet) */
const P=[
 {id:"virasat-2026",img:"virasat-site",k:"event",l:1,title:"Virasat 2026",st:"Virasat",year:"2026",cer:"15-day cultural music festival",
  meta:[["Venue","Himalayan Cultural Centre, Dehradun"],["Organised by","REACH"],["Role","Official videography partner"],["Setup",SET_Z190]],
  pal:["#f0b25a","#a5402c","#1c2f3a"],tag:"Official Videography Partner",
  syn:"Official videography partner for Virasat 2026, a fifteen-day cultural music festival at the Himalayan Cultural Centre in Dehradun, organised by REACH. Packed houses, some of the biggest names in Indian music, and a multi-camera setup switched live.",
  hl:YT("GeqZB9-NWFo"),films:one("Inauguration Highlights","GeqZB9-NWFo","Festival highlight")},
 {id:"janfest-2026",img:"janfest-2025",k:"event",l:1,title:"Janfest 2026",st:"Janfest",year:"2026",cer:"College music festival",
  meta:[["Venue","St. Xavier's College, Mumbai"],["Setup",SET_Z190]],
  pal:["#e7c27a","#6f3b6b","#1b1d33"],tag:"Glamour and grace on stage",
  syn:"Multi-camera coverage of Janfest 2026 at St. Xavier's College, Mumbai, with renowned artists on stage across the festival.",
  films:[["Films",[["Festival film","",null]]]]},
 {id:"mumbai-margazhi-2026",img:"mumbai-margazhi-2025",k:"event",l:1,title:"Mumbai Margazhi 2026",st:"Margazhi",year:"2026",cer:"Carnatic music festival, 7th edition",
  meta:[["Venue","St Andrews Auditorium, Bandra"],["Organised by","Banyan Tree Events"],["Setup","Sony Z280 cameras · Datavideo switcher · Wireless talkback"]],
  pal:["#e8a54b","#8a2f24","#2a1a14"],tag:"A feast of Carnatic music",
  syn:"Video coverage for the 7th edition of Mumbai Margazhi Mahotsavam, a festival of Carnatic music organised by Banyan Tree Events at St Andrews Auditorium, Bandra.",
  films:[["Films",[["Festival film","",null]]]]},
 {id:"symphony-of-santoor-2026",k:"event",title:"Symphony of Santoor",st:"Santoor",year:"2026",cer:"Santoor with chamber orchestra",
  meta:[["Venue","Jio World Convention Centre, Mumbai"],["Featuring","Rahul Shivkumar Sharma"],["Organised by","Banyan Tree Events"]],
  pal:["#d9c9f0","#5b4a9b","#15122b"],tag:"Santoor meets symphony",
  syn:"Video coverage of Symphony of Santoor, a Banyan Tree Events concert pairing santoor maestro Rahul Shivkumar Sharma with a chamber orchestra.",
  priv:1,films:[]},
 {id:"barkha-ritu-2026",k:"event",title:"Barkha Ritu 2026",st:"Barkha Ritu",year:"2026",cer:"Festival of monsoon ragas",
  meta:[["Organised by","Banyan Tree Events"]],
  pal:["#9fd0d6","#2f6f8f","#12202e"],tag:"Ragas for the rains",
  syn:"Video coverage of Barkha Ritu 2026, Banyan Tree Events' festival of Indian classical music built around the ragas of the monsoon.",
  priv:1,films:[]},
 {id:"samanvay-2026",k:"event",title:"Samanvay",st:"Samanvay",year:"2026",cer:"Hindustani and Carnatic jugalbandi",
  meta:[["Date","11 June 2026"],["Venue","Nehru Centre Auditorium, Mumbai"],["Featuring","Ashwini Bhide-Deshpande · Sudha Raghunathan"],["Organised by","Banyan Tree Events"]],
  pal:["#f0c27a","#a5562c","#2a1712"],tag:"Two traditions, one stage",
  syn:"Samanvay brings two classical traditions together through a live jugalbandi featuring Ashwini Bhide-Deshpande and Sudha Raghunathan. An evening shaped by listening, response, and the shared language of raga and rhythm.",
  priv:1,films:[]},
 {id:"khusrau-kabir-2026",k:"event",title:"Khusrau-Kabir 2026",st:"Khusrau Kabir",year:"2026",cer:"Festival of Sufi and Bhakti poetry in music",
  meta:[["Date","7 January 2026"],["Venue","Nehru Centre Auditorium, Mumbai"],["Organised by","Banyan Tree Events"]],
  pal:["#e3d6a8","#3f6b4f","#101d18"],tag:"Across centuries, in song",
  syn:"Video coverage of Khusrau-Kabir, the Banyan Tree Events concert series celebrating the shared spiritual philosophies, poetry and musical legacies of Hazrat Amir Khusrau and Saint Kabirdas.",
  priv:1,films:[]},
 {id:"speak-greasy",img:"speak-greasy",k:"event",title:"Speak Greasy",st:"Speak Greasy",year:"Ongoing",cer:"Food talk show with Gauri Devidayal",meta:[["Guests","Multiple guests"]],
  pal:["#f0c08a","#8d5a3b","#22302c"],tag:"Chefs, stories, second helpings",syn:"Speak Greasy, a conversation series hosted by Gauri Devidayal with leading chefs, filmed multi-camera for episodic release.",
  hl:YT("pOGfNleMURE"),films:[["Episodes",[["Ep 6 · The Coastal Cuisine Connoisseur","Chef Sandeep Sreedharan",YT("pOGfNleMURE")],["Ep 5 · Teachings From The Tutor","Chef Mohib Farooqui",YT("sZvm4E3jV2A")]]]]},
 {id:"bh-style-icons",img:"bh-style-icons",k:"event",title:"BH Style Icons",st:"Style Icons",year:"2023",cer:"Awards show",meta:[["Featuring","Anushka Sharma · Ajay Devgn · Kartik Aaryan"]],
  pal:["#f3d9a0","#a0712c","#141414"],tag:"Red carpet, bright lights",syn:"Coverage of the BH Style Icons awards, where Anushka Sharma, Ajay Devgn and Kartik Aaryan took home trophies.",
  hl:YT("8_Isq27cymI"),films:one("BH Style Icons","8_Isq27cymI","Promo")},
 {id:"indian-music-conference-2019",img:"indian-music-conference-2019",k:"event",title:"Indian Music Conference",st:"IMC 2019",year:"2019",cer:"Music conference series, Episode 16",meta:[["Featuring","Pt. Hariprasad Chaurasia · Rakesh Chaurasia, flute"],["Organised by","Banyan Tree Events"]],
  pal:["#b9d7cf","#3d6b64","#122321"],tag:"Breath, bamboo, silence",syn:"Rakesh Chaurasia on flute at the Indian Music Conference 2019, filmed for Banyan Tree Events' episodic series.",
  hl:YT("0tv93nIqv7I"),films:one("Rakesh Chaurasia · Flute","0tv93nIqv7I","Episode 16")},

 {id:"yash-shreya",img:"yash-shreya",k:"wedding",title:"Yash & Shreya",year:"2026",cer:"Pooja, Mehendi, Mandap & Mameru, Haldi, Sangeet, Wedding",meta:[["Coverage","Multi-camera"]],
  pal:["#f2b65c","#b8452f","#1d4f52"],tag:"Six ceremonies, one story",
  syn:"From the first pooja to the pheras, we followed Yash and Shreya through six ceremonies and cut highlight films of the celebrations.",
  hl:YT("3_bx91CfZM4"),
  films:[["Sangeet",[["Sangeet Highlight","",YT("ovrOrO1JpwE")]]],["The Wedding",[["Wedding Highlight","",YT("3_bx91CfZM4")]]]]},
 {id:"shikhar-rasna",img:"shikhar-rasna",k:"wedding",title:"Shikhar & Rasna",year:"2024",cer:"Wedding highlight",meta:[],pal:["#f1b8a0","#9b3d4f","#2a1b2c"],tag:"Every glance, every vow",syn:"Shikhar and Rasna's wedding, cut into a cinematic highlight film.",hl:YT("CHFdAPYEqb8"),films:one("Wedding Highlight","CHFdAPYEqb8")},
 {id:"riya-vrajesh",img:"riya-vrajesh",k:"wedding",title:"Riya & Vrajesh",year:"",cer:"Wedding highlight",meta:[],pal:["#f6d48b","#c4672f","#3b2216"],tag:"A day in gold",syn:"Riya and Vrajesh's wedding highlight film.",hl:YT("e5DtDwmW6H0"),films:one("Wedding Highlight","e5DtDwmW6H0")},
 {id:"mayur-bhairavi",img:"mayur-bhairavi",k:"wedding",title:"Mayur & Bhairavi",year:"",cer:"Wedding highlight",meta:[],pal:["#e9a7c3","#7d2f6a","#1e1630"],tag:"A magical wedding",syn:"Mayur and Bhairavi's wedding, told as a highlight film.",hl:YT("knSRO8laP54"),films:one("Wedding Highlight","knSRO8laP54")},
 {id:"riddhi-gautam",img:"riddhi-gautam",k:"wedding",title:"Riddhi & Gautam",year:"",cer:"Wedding highlight",meta:[],pal:["#f3c98a","#a0522d","#26302a"],tag:"Laughter, then pheras",syn:"Riddhi and Gautam's wedding highlight film.",hl:YT("A7jZPZHEB8w"),films:one("Wedding Highlight","A7jZPZHEB8w")},
 {id:"pooja-vikas",img:"pooja-vikas",k:"wedding",title:"Pooja & Vikas",year:"",cer:"Wedding highlight",meta:[],pal:["#f7e09a","#d07a2c","#5c2a1b"],tag:"Marigold and music",syn:"Pooja and Vikas's wedding highlight film.",hl:YT("gNbr3ObE7x8"),films:one("Wedding Highlight","gNbr3ObE7x8")},
 {id:"harsh-hiral",img:"harsh-hiral",k:"wedding",title:"Harsh & Hiral",year:"",cer:"Cinematic pre-wedding film",meta:[],pal:["#a9d3d0","#3c6f8f","#141c33"],tag:"Before the big day",syn:"A cinematic pre-wedding film for Harsh and Hiral.",hl:YT("YIHfJD7TpDE"),films:one("Pre-Wedding Film","YIHfJD7TpDE")},
 {id:"reema-chaitanya",img:"reema-chaitanya",k:"wedding",title:"Reema & Chaitanya",year:"",cer:"Engagement ceremony",meta:[],pal:["#f0b9a0","#a24b3a","#2b2420"],tag:"The ring, the promise",syn:"Reema and Chaitanya's engagement ceremony on film.",hl:YT("jgHTyb6HuWs"),films:one("Engagement Ceremony","jgHTyb6HuWs")}
];
const IMG={};
P.forEach(p=>{if(p.img)IMG[p.id]="/img/"+p.img+".webp"});
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- printed disc art (poster-style, like the reference) ---------- */
let uid=0;
function art(p){
  const id="a"+(uid++),[a,b,c]=p.pal;
  const venue=(p.meta||[]).find(m=>m[0]==="Venue"||m[0]==="Location");
  const ring=([p.cer.replace(/,/g," ·"),venue&&venue[1],"Dhaval Apex Video",p.year].filter(Boolean).join(" · ")+" · ").toUpperCase();
  const nm=p.st||p.title;let [l1,l2]=nm.includes(" & ")?nm.split(" & "):[nm,""];
  const amp=nm.includes(" & ");if(!amp&&nm.length>10&&nm.includes(" ")){const w=nm.split(" ");l1=w[0];l2=w.slice(1).join(" ")}
  const fs=Math.max(24,Math.min(40,300/Math.max(l1.length,l2.length,6)*1.05));
  return `<svg viewBox="0 0 400 400" aria-hidden="true"><defs>
    <radialGradient id="${id}g" cx="32%" cy="30%" r="90%"><stop offset="0" stop-color="${a}"/><stop offset=".5" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></radialGradient>
    <radialGradient id="${id}s" cx="30%" cy="26%" r="30%"><stop offset="0" stop-color="#fff8e6" stop-opacity=".9"/><stop offset="1" stop-color="#fff8e6" stop-opacity="0"/></radialGradient>
    <linearGradient id="${id}h" x1="0" y1="0" x2="1" y2="1"><stop offset=".42" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".3"/><stop offset=".58" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <path id="${id}p" d="M200,200 m-172,0 a172,172 0 1,1 344,0 a172,172 0 1,1 -344,0"/>
    <mask id="${id}m"><rect width="400" height="400" fill="#fff"/><circle cx="200" cy="200" r="50" fill="#000"/></mask>
    <filter id="${id}n" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" seed="${uid}"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .25 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>
    <radialGradient id="${id}v" cx="50%" cy="50%" r="50%"><stop offset=".62" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></radialGradient>
  </defs><g mask="url(#${id}m)">
    <circle cx="200" cy="200" r="200" fill="url(#${id}g)"/>
    ${IMG[p.id]?`<image href="${IMG[p.id]}" x="-60" y="0" width="520" height="400" preserveAspectRatio="xMidYMid slice"/><circle cx="200" cy="200" r="200" fill="url(#${id}v)"/>`:`<circle cx="200" cy="200" r="200" fill="url(#${id}s)"/>`}
    <circle cx="200" cy="200" r="200" fill="#000" filter="url(#${id}n)"/>
    <text font-family="Manrope, Arial, sans-serif" font-size="10" letter-spacing="3" fill="#fff" fill-opacity=".8"><textPath href="#${id}p">${esc(ring+ring)}</textPath></text>
    <g fill="#fff" text-anchor="middle" font-family="Manrope, Arial, sans-serif" ${IMG[p.id]?'display="none"':""}>
      <text x="200" y="${l2?118:130}" font-weight="700" font-size="${fs}" fill-opacity=".92">${esc(l1)}</text>
      ${amp?`<text x="200" y="150" font-size="16" font-style="italic" fill-opacity=".8">&amp;</text>`:""}${l2?`<text x="200" y="300" font-size="${fs}" fill-opacity=".92">${esc(l2)}</text>`:""}
      <text x="200" y="${l2?328:300}" font-family="Manrope, Arial, sans-serif" font-size="9" letter-spacing="3" fill-opacity=".75">APEX · ${p.k==="wedding"?"WEDDING FILM":"EVENT FILM"}</text>
    </g>
    <circle cx="200" cy="200" r="72" fill="none" stroke="#fff" stroke-opacity=".25"/>
    <circle cx="200" cy="200" r="64" fill="#e9e9e7" fill-opacity=".92"/>
    <circle cx="200" cy="200" r="58" fill="none" stroke="#b9b9b6" stroke-width="2"/>
    <circle cx="200" cy="200" r="200" fill="url(#${id}h)"/>
    <circle cx="200" cy="200" r="198" fill="none" stroke="#000" stroke-opacity=".15" stroke-width="3"/>
  </g></svg>`;
}
function scribble(){
  const n=70,pts=[];let d="";
  for(let i=0;i<=n;i++){const t=i/n,a=-1.9+t*Math.PI*2.18,r=100+Math.sin(t*7)*4+(t>.92?(t-.92)*90:0);pts.push([Math.cos(a)*r*1.04,Math.sin(a)*r*.98+(t>.92?(t-.92)*40:0)])}
  d=`M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for(let i=1;i<pts.length-1;i++){const m=[(pts[i][0]+pts[i+1][0])/2,(pts[i][1]+pts[i+1][1])/2];d+=` Q${pts[i][0].toFixed(1)},${pts[i][1].toFixed(1)} ${m[0].toFixed(1)},${m[1].toFixed(1)}`}
  return `<svg class="scrib" viewBox="-118 -118 236 236" aria-hidden="true"><path d="${d}" style="--L:760"/></svg>`;
}
function discEl(p,attrs=""){return `<div class="disc" ${attrs}><div class="face"><div class="spin">${art(p)}</div></div>${scribble()}</div>`}

/* ---------- home ---------- */
const state={event:0,wedding:0};let cleanup=null;
function home(k){
  const list=P.filter(p=>p.k===k);
  return `<section class="home gut">
    <div class="intro"><h1>${k==="wedding"?"Wedding films, <i>ceremony by ceremony</i>":"Multi-camera films of <i>events &amp; live shows</i>"}</h1><span class="cap" style="color:var(--soft)">${list.length} films · drag to browse</span></div>
    <div class="layout">
      <div class="side">
        <div class="credits" id="credits"></div>
        <p class="blurb2" id="blurb2"></p>
        <div class="ctrl"><span class="count" id="count"></span><button class="arrow" data-step="-1" aria-label="Previous film">←</button><button class="arrow" data-step="1" aria-label="Next film">→</button><a class="open" id="openLink" href="#">Open film</a></div>
      </div>
      <div class="mtitle" id="mtitle" aria-hidden="true"></div>
      <div class="crate" id="crate" aria-roledescription="carousel" aria-label="${k==="wedding"?"Wedding films":"Event films"}">
        <div class="track" id="track">${list.map((p,i)=>`<div class="disc" data-i="${i}"><div class="face"><div class="spin">${art(p)}</div></div>${scribble()}<button class="hit" data-i="${i}" aria-label="${esc(p.title)}"></button></div>`).join("")}</div>
      </div>
    </div>
  </section>`;
}
function creditsHTML(p){
  const venue=(p.meta||[]).find(m=>m[0]==="Venue"||m[0]==="Location"||m[0]==="Featuring");
  const rows=[[p.k==="wedding"?"Film":"Format",p.cer],venue,p.year&&["Year",p.year]].filter(Boolean).slice(0,3);
  return `<div class="swap"><h2>${esc(p.title)}${p.l?'<span class="sample">Latest</span>':""}</h2>
    ${rows.map(([a,b])=>`<div class="r"><span class="cap">${esc(a)}</span><span class="v">${esc(b)}</span></div>`).join("")}</div>`;
}
function quotesHTML(p){
  if(!p.q) return `<p class="blurb swap">${esc(p.syn)}</p>`;
  return p.q.map(v=>v?`<div class="q swap"><div class="st">${"★".repeat(v.stars)}</div><div class="src cap">${esc(v.src)}</div><div class="txt">“${esc(v.text)}”</div></div>`
   :`<div class="q pending swap"><div class="st">★★★★★</div><div class="src cap">Client</div><div class="txt">“Testimonial to add”</div></div>`).join("");
}
function mountHome(k){
  const list=P.filter(p=>p.k===k),el=document.getElementById("crate"),track=document.getElementById("track");
  const discs=[...track.children],prev=document.querySelector('[data-step="-1"]'),next=document.querySelector('[data-step="1"]');
  let D,gap,idx=state[k],pos,target,raf,last=-1,dragging=false,sx=0,sy=0,sp=0,moved=0,axis=null,wheelT;
  function measure(){D=discs[0].offsetWidth;gap=D*(innerWidth<860?.78:.7);target=-idx*gap;pos=pos===undefined?target:pos}
  measure();
  function go(i){idx=Math.max(0,Math.min(list.length-1,i));state[k]=idx;target=-idx*gap}
  function frame(){
    pos+=(target-pos)*(dragging||reduce?1:.13);
    discs.forEach((d,i)=>{
      const x=i*gap+pos,o=x/gap,a=Math.min(Math.abs(o),3);
      const s=1-Math.min(a,1)*.3-Math.max(0,a-1)*.08;
      d.style.transform=`translate3d(${x}px,${Math.min(a,1)*D*.05}px,${-a*60}px) scale(${s})`;
      d.style.zIndex=100-Math.round(a*10);
      d.style.opacity=a>2.2?Math.max(0,3-a)/.8:1;
    });
    const near=Math.max(0,Math.min(list.length-1,Math.round(-pos/gap)));
    if(near!==last){last=near;const p=list[near];
      document.getElementById("credits").innerHTML=creditsHTML(p);
      document.getElementById("blurb2").textContent=p.syn;
      document.getElementById("mtitle").innerHTML=`<div class="swap"><h3>${esc(p.title)}</h3><p class="cap">${esc(p.cer)}</p></div><span class="cue cap">Details ↓</span>`;
      document.getElementById("count").textContent=`${String(near+1).padStart(2,"0")} / ${String(list.length).padStart(2,"0")}`;
      document.getElementById("openLink").href="/films/"+p.id+"/";
      discs.forEach((d,i)=>d.classList.toggle("on",i===near));
      prev.disabled=near===0;next.disabled=near===list.length-1}
    raf=requestAnimationFrame(frame);
  }
  frame();
  /* horizontal trackpad swipes only; vertical scrolling always scrolls the page */
  const onWheel=e=>{if(Math.abs(e.deltaX)<=Math.abs(e.deltaY))return;e.preventDefault();
    target=Math.max(-(list.length-1)*gap,Math.min(0,target-e.deltaX));clearTimeout(wheelT);wheelT=setTimeout(()=>go(Math.round(-target/gap)),120)};
  el.addEventListener("wheel",onWheel,{passive:false});
  el.addEventListener("pointerdown",e=>{dragging=true;moved=0;axis=null;sx=e.clientX;sy=e.clientY;sp=pos;el.classList.add("drag")});
  el.addEventListener("pointermove",e=>{if(!dragging)return;const dx=e.clientX-sx,dy=e.clientY-sy;
    if(!axis&&(Math.abs(dx)>6||Math.abs(dy)>6))axis=Math.abs(dx)>Math.abs(dy)?"x":"y";
    if(axis!=="x")return;moved=Math.abs(dx);if(!el.hasPointerCapture(e.pointerId))el.setPointerCapture(e.pointerId);pos=sp+dx;target=pos});
  const end=()=>{if(!dragging)return;dragging=false;el.classList.remove("drag");if(axis==="x"){const v=pos-sp;go(Math.round(-(pos+(Math.abs(v)>30?Math.sign(v)*gap*.35:0))/gap))}else target=-idx*gap};
  el.addEventListener("pointerup",end);el.addEventListener("pointercancel",end);el.addEventListener("pointerleave",e=>{if(!el.hasPointerCapture(e.pointerId))end()});
  el.addEventListener("click",e=>{const b=e.target.closest(".hit");if(!b||moved>6)return;const i=+b.dataset.i;if(i!==idx){go(i);return}
    location.href="/films/"+list[i].id+"/"});
  document.getElementById("mtitle").addEventListener("click",()=>document.querySelector(".side").scrollIntoView({behavior:reduce?"auto":"smooth"}));
  const side=e=>{const s=e.target.closest("[data-step]");if(s)go(idx+ +s.dataset.step)};
  document.querySelector(".side").addEventListener("click",side);
  const key=e=>{if(e.target.closest("input,textarea"))return;if(e.key==="ArrowRight")go(idx+1);if(e.key==="ArrowLeft")go(idx-1)};
  addEventListener("keydown",key);addEventListener("resize",measure);
  cleanup=()=>{cancelAnimationFrame(raf);removeEventListener("keydown",key);removeEventListener("resize",measure)};
}

/* ---------- film page ---------- */
function paintStill(cv,p,seed){
  const r=cv.getBoundingClientRect(),dp=Math.min(devicePixelRatio||1,1.5),w=cv.width=Math.max(2,r.width*dp),h=cv.height=Math.max(2,r.height*dp),x=cv.getContext("2d");
  if(IMG[p.id]&&!paintStill.skip){const im=new Image();im.onload=()=>{const s=Math.max(w/im.naturalWidth,h/im.naturalHeight),iw=im.naturalWidth*s,ih=im.naturalHeight*s;
      x.filter="blur("+Math.round(2*dp)+"px) saturate(1.05)";x.drawImage(im,(w-iw)/2,(h-ih)/2,iw,ih);x.filter="none";
      const g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,"rgba(0,0,0,.25)");g.addColorStop(1,"rgba(0,0,0,.55)");x.fillStyle=g;x.fillRect(0,0,w,h)};
    im.onerror=()=>{paintStill.skip=1;paintStill(cv,p,seed);paintStill.skip=0};im.src=IMG[p.id];return}
  const [a,b,c]=p.pal;x.fillStyle=c;x.fillRect(0,0,w,h);
  let s=seed;const rnd=()=>((s=(s*9301+49297)%233280)/233280);
  const blob=(px,py,rad,col,al)=>{const g=x.createRadialGradient(px,py,0,px,py,rad);g.addColorStop(0,col);g.addColorStop(1,"rgba(0,0,0,0)");x.globalAlpha=al;x.fillStyle=g;x.fillRect(0,0,w,h);x.globalAlpha=1};
  blob(w*(.25+rnd()*.2),h*(.3+rnd()*.2),Math.max(w,h)*.6,a,1);blob(w*(.72+rnd()*.15),h*(.6+rnd()*.2),Math.max(w,h)*.55,b,.85);
  for(let i=0;i<34;i++)blob(rnd()*w,rnd()*h*.6,(10+rnd()*48)*dp,"#fff2d2",.12+rnd()*.25);
  const g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,"rgba(0,0,0,.05)");g.addColorStop(1,"rgba(0,0,0,.35)");x.fillStyle=g;x.fillRect(0,0,w,h);
  const im=x.getImageData(0,0,w,h),dt=im.data;for(let i=0;i<dt.length;i+=4){const n=(Math.random()-.5)*20;dt[i]+=n;dt[i+1]+=n;dt[i+2]+=n}x.putImageData(im,0,0);
}
function filmHTML(p){
  const words=p.title.toUpperCase().split(" ").map((w,i)=>`<span class="w"><span style="animation-delay:${.1+i*.1}s">${esc(w)}</span></span>`).join(" ");
  const same=P.filter(x=>x.k===p.k),at=same.indexOf(p),nx=same[(at+1)%same.length];
  const tw=p.tag.split(" "),per=Math.ceil(tw.length/4),lines=[];for(let i=0;i<tw.length;i+=per)lines.push(tw.slice(i,i+per).join(" "));
  let n=0;
  return `<article class="film fade-in">
    <header class="gut">
      <h1 class="ftitle">${words}</h1>
      <div class="fcred"><span class="fb"><span class="cap">Filmed by</span>Dhaval Apex Video </span><span class="cap">${p.k==="wedding"?"Film":"Format"}</span>${esc(p.cer)}${p.l?'<span class="sample">Latest</span>':""}</div>
      <div class="rows">
        ${[p.year&&["Year",p.year],...(p.meta||[]),!p.priv&&["Films",String(p.films.reduce((n,g)=>n+g[1].filter(x=>x[2]).length,0)||"Coming soon")],["Studio","Mumbai"]].filter(Boolean).map(([a,b])=>`<div class="r${/^(Films|Studio|Role|Year)$/.test(a)?" minor":""}"><span class="cap">${esc(a)}</span><span class="v">${esc(b)}</span></div>`).join("")}
      </div>
      <div class="frame">
        <span class="x tl"></span><span class="x tr"></span><span class="x bl"></span><span class="x br"></span>
        ${discEl(p)}
        <div class="btnrow">${p.priv?"":`<a class="dbl" ${p.hl?`href="${p.hl}" target="_blank" rel="noopener"`:'aria-disabled="true"'}>Watch online</a>`}${p.full?`<a class="dbl" href="${p.full}" target="_blank" rel="noopener">Full film</a>`:`<a class="dbl" href="https://wa.me/919892951911" target="_blank" rel="noopener">Book now</a>`}</div>
      </div>
    </header>
    <section class="still" id="still">
      <canvas id="stillCv"></canvas>
      <div class="lines"><div></div><div></div><div></div><div></div></div>
      ${lines.map((w,i)=>`<span class="word" style="${i%2?"right":"left"}:6%;top:calc(${(i+1)*25}% - 2px);transform:translateY(-100%)">${esc(w)}</span>`).join("")}
      ${p.hl?`<a class="dbl watch" href="${p.hl}" target="_blank" rel="noopener">Watch trailer</a>`:""}
    </section>
    <div class="band gut"><p class="syn">${esc(p.syn)}</p>
      ${p.priv?"":`<section class="films"><h2>The Films</h2>
        <div class="cer">${p.films.map(([nm,items])=>`<div class="grp"><h3><span class="cap" style="font-size:10px">${esc(nm)}</span><span class="cap" style="font-size:10px">${String(++n).padStart(2,"0")}</span></h3>${items.map(([t,sub,url,type])=>url
          ?`<a class="row" href="${url}" target="_blank" rel="noopener"><span><span class="t">${esc(t)}</span>${sub?`<small>${esc(sub)}</small>`:""}</span><span class="go">${type||"Watch"} ↗</span></a>`
          :`<div class="row off"><span><span class="t">${esc(t)}</span>${sub?`<small>${esc(sub)}</small>`:""}</span><span class="go">Film coming soon</span></div>`).join("")}</div>`).join("")}</div>
      </section>`}
    </div>
    <a class="next" href="/films/${nx.id}/" aria-label="Next production: ${esc(nx.title)}">
      <span class="lab cap">Next production</span>
      <span class="nt">${esc(nx.title)}</span>
      ${discEl(nx)}
    </a>
  </article>`;
}
function mountFilm(p){
  const seed=[...p.id].reduce((s,c)=>s+c.charCodeAt(0),0);
  requestAnimationFrame(()=>paintStill(document.getElementById("stillCv"),p,seed));
  const still=document.getElementById("still"),words=[...still.querySelectorAll(".word")];
  const onScroll=()=>{const r=still.getBoundingClientRect(),t=Math.max(-1,Math.min(1,(r.top+r.height/2-innerHeight/2)/innerHeight));
    words.forEach((w,i)=>{const dir=i%2?1:-1;w.style.transform=`translate(${reduce||innerWidth<600?0:t*dir*40}px,-100%)`})};
  onScroll();addEventListener("scroll",onScroll,{passive:true});
  cleanup=()=>removeEventListener("scroll",onScroll);
}

/* ---------- index ---------- */
const idxBtn=document.getElementById("idxBtn"),idxPanel=document.getElementById("idxPanel");
document.querySelectorAll(".navbtn").forEach(b=>b.addEventListener("click",()=>{const go=()=>document.getElementById(b.dataset.to)?.scrollIntoView({behavior:reduce?"auto":"smooth"});
  go()}));
idxBtn.onclick=()=>{const o=idxPanel.hidden;idxPanel.hidden=!o;idxBtn.setAttribute("aria-expanded",o)};
document.addEventListener("click",e=>{if(!e.target.closest(".idx")){idxPanel.hidden=true;idxBtn.setAttribute("aria-expanded","false")}});

document.querySelectorAll(".copy").forEach(b=>b.addEventListener("click",()=>{
  const reset=t=>{b.textContent=t;setTimeout(()=>b.textContent="Copy",1500)};
  const sel=()=>{const r=document.createRange();r.selectNodeContents(b.previousElementSibling);const s=getSelection();s.removeAllRanges();s.addRange(r);reset("Selected")};
  try{navigator.clipboard.writeText(b.dataset.copy).then(()=>reset("Copied"),sel)}catch(_){sel()}
}));

/* ---------- boot: each page is pre-rendered; mount its behaviour ---------- */
const PAGE=window.PAGE||{};
if(PAGE.view==="home")mountHome(PAGE.k);
else if(PAGE.view==="film"){const p=P.find(x=>x.id===PAGE.id);if(p)mountFilm(p)}

/* ---------- theme ---------- */
(function(){
  const root=document.documentElement,b=document.getElementById("themeBtn"),mq=matchMedia("(prefers-color-scheme: dark)");
  const dark=()=>root.dataset.theme?root.dataset.theme==="dark":mq.matches;
  const lab=()=>b.setAttribute("aria-label",dark()?"Switch to light mode":"Switch to dark mode");
  try{const s=localStorage.getItem("apex-theme");if(s==="dark"||s==="light")root.dataset.theme=s}catch(_){}
  lab();b.onclick=()=>{const t=dark()?"light":"dark";root.dataset.theme=t;try{localStorage.setItem("apex-theme",t)}catch(_){}lab()};
})();

