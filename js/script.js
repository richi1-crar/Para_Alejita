document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.getElementById("menuToggle");
 const nav=document.getElementById("mainNav");
 if(toggle&&nav){
  toggle.addEventListener("click",()=>{
   const open=nav.classList.toggle("open");
   toggle.setAttribute("aria-expanded",String(open));
   toggle.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú");
  });
  nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
   nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");
  }));
 }
 const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
 const button=document.getElementById("surpriseBtn"),message=document.getElementById("surpriseMessage");
 if(button&&message)button.addEventListener("click",()=>{
  message.classList.add("visible");
  button.innerHTML='Mensaje descubierto <span>♡</span>';
  button.disabled=true;
 });
 const items=document.querySelectorAll(".reveal");
 if("IntersectionObserver" in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}
  }),{threshold:.12});
  items.forEach(item=>observer.observe(item));
 }else{items.forEach(item=>item.classList.add("visible"));}
});