(function(){
"use strict";
var root=document.documentElement,reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
var $=function(s,el){return (el||document).querySelector(s)},$$=function(s,el){return Array.prototype.slice.call((el||document).querySelectorAll(s))};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};

/* theme: dark by default, the visitor's choice is remembered */
var tb=$("#themeBtn");
function label(){tb.setAttribute("aria-label",root.dataset.theme==="light"?"Switch to dark mode":"Switch to light mode")}
if(tb){label();tb.addEventListener("click",function(){var t=root.dataset.theme==="light"?"dark":"light";root.dataset.theme=t;try{localStorage.setItem("apex-theme",t)}catch(e){}label()})}

/* phone menu */
var menu=$("#menu"),mb=$("#menuBtn");
function closeMenu(){menu.classList.remove("open");mb.setAttribute("aria-expanded","false")}
if(mb){mb.addEventListener("click",function(){var o=menu.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
  menu.addEventListener("click",function(e){if(e.target.closest("a"))closeMenu()});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")closeMenu()})}

/* disc carousel */
var stage=$("[data-stage]");
if(stage){(function(){
  var list=JSON.parse($("#stageData").textContent),compact=stage.classList.contains("compact");
  var el=$(".crate",stage),discs=$$(".disc",el),now=$("[data-now]",stage),count=$("[data-count]",stage),open=$("[data-open]",stage);
  var prev=$('[data-step="-1"]',stage),next=$('[data-step="1"]',stage);
  var D,gap,idx=0,pos,target,last=-1,dragging=false,sx=0,sy=0,sp=0,axis=null,dist=0,downI,wheelT;
  function measure(){D=discs[0].offsetWidth;gap=D*(innerWidth<860?.78:.7);target=-idx*gap;if(pos===undefined)pos=target}
  function go(i){idx=Math.max(0,Math.min(list.length-1,i));target=-idx*gap}
  function act(i){if(i!==idx)go(i);else location.href=list[i].href}
  function panel(p){
    if(compact)return '<div class="swap"><h3>'+esc(p.t)+'</h3><p class="sub">'+esc(p.sub)+"</p></div>";
    return '<div class="swap">'+(p.latest?'<span class="tag">Latest</span>':"")+"<h2>"+esc(p.t)+'</h2></div><dl class="rows swap">'+p.rows.map(function(r){return "<div><dt>"+esc(r[0])+"</dt><dd>"+esc(r[1])+"</dd></div>"}).join("")+"</dl>";
  }
  function frame(){
    pos+=(target-pos)*(dragging||reduce?1:.13);
    for(var i=0;i<discs.length;i++){var x=i*gap+pos,a=Math.min(Math.abs(x/gap),3),s=1-Math.min(a,1)*.3-Math.max(0,a-1)*.08,d=discs[i];
      d.style.transform="translate3d("+x+"px,"+Math.min(a,1)*D*.05+"px,"+(-a*60)+"px) scale("+s+")";
      d.style.zIndex=100-Math.round(a*10);d.style.opacity=a>2.2?Math.max(0,3-a)/.8:1}
    var near=Math.max(0,Math.min(list.length-1,Math.round(-pos/gap)));
    if(near!==last){last=near;var p=list[near];now.innerHTML=panel(p);
      if(count)count.textContent=("0"+(near+1)).slice(-2)+" / "+("0"+list.length).slice(-2);
      open.href=p.href;discs.forEach(function(d,i){d.classList.toggle("on",i===near)});
      prev.disabled=near===0;next.disabled=near===list.length-1}
    requestAnimationFrame(frame);
  }
  measure();frame();
  el.addEventListener("wheel",function(e){if(Math.abs(e.deltaX)<=Math.abs(e.deltaY))return;e.preventDefault();
    target=Math.max(-(list.length-1)*gap,Math.min(0,target-e.deltaX));clearTimeout(wheelT);wheelT=setTimeout(function(){go(Math.round(-target/gap))},120)},{passive:false});
  el.addEventListener("pointerdown",function(e){var d=e.target.closest(".disc");dist=0;downI=d?d.dataset.i:null;dragging=true;axis=null;sx=e.clientX;sy=e.clientY;sp=pos;el.classList.add("drag")});
  el.addEventListener("pointermove",function(e){if(!dragging)return;var dx=e.clientX-sx,dy=e.clientY-sy;dist=Math.max(dist,Math.hypot(dx,dy));
    if(!axis&&(Math.abs(dx)>6||Math.abs(dy)>6))axis=Math.abs(dx)>Math.abs(dy)?"x":"y";
    if(axis!=="x")return;if(!el.hasPointerCapture(e.pointerId))el.setPointerCapture(e.pointerId);pos=sp+dx;target=pos});
  function end(){if(!dragging)return;dragging=false;el.classList.remove("drag");
    if(axis==="x"){var v=pos-sp;go(Math.round(-(pos+(Math.abs(v)>30?Math.sign(v)*gap*.35:0))/gap))}else target=-idx*gap}
  el.addEventListener("pointerup",function(){var tap=dragging&&dist<10&&downI!=null;end();if(tap)act(+downI)});
  el.addEventListener("pointercancel",end);
  el.addEventListener("pointerleave",function(e){if(!el.hasPointerCapture(e.pointerId))end()});
  el.addEventListener("click",function(e){var b=e.target.closest(".hit");if(b&&e.detail===0)act(+b.parentNode.dataset.i)});
  stage.addEventListener("click",function(e){var s=e.target.closest("[data-step]");if(s)go(idx+ +s.dataset.step)});
  addEventListener("keydown",function(e){if(e.target.closest("input,textarea,select"))return;if(e.key==="ArrowRight")go(idx+1);if(e.key==="ArrowLeft")go(idx-1)});
  addEventListener("resize",measure);
})()}

/* enquiry form -> WhatsApp */
var form=$("#enq");
if(form){(function(){
  var send=$("#waSend"),WA=send.getAttribute("href").split("?")[0],v=function(id){return $("#"+id).value.trim()};
  function msg(){var d=v("fDate"),date=d?new Date(d+"T00:00").toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):"";
    return ["Hello Apex Video, I'd like to enquire about coverage for an event.",v("fName")&&"Name: "+v("fName"),"Type of coverage: "+$("#fType").value,date&&"Event date: "+date,v("fLoc")&&"Location: "+v("fLoc"),v("fNote")&&"Details: "+v("fNote")].filter(Boolean).join("\n")}
  function sync(){send.href=WA+"?text="+encodeURIComponent(msg())}
  form.addEventListener("input",sync);form.addEventListener("submit",function(e){e.preventDefault();sync();window.open(send.href,"_blank","noopener")});sync();
})()}
})();
