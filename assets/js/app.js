/* =========================
   DARK MODE
========================= */

function toggleTheme(){

document.body.classList.toggle("dark");

}

/* =========================
   SCROLL REVEAL
========================= */

const reveals =
document.querySelectorAll(
".reveal, .reveal-right"
);

function revealOnScroll(){

reveals.forEach((el)=>{

const top =
el.getBoundingClientRect().top;

const windowHeight =
window.innerHeight;

if(top < windowHeight - 100){

el.classList.add("active");

}

});

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();
