// =========================
// DARK MODE
// =========================

function toggleTheme(){

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
? "dark"
: "light"
);

}

// =========================
// LOAD THEME
// =========================

window.addEventListener("load",()=>{

const theme = localStorage.getItem("theme");

if(theme === "dark"){
document.body.classList.add("dark");
}

// INIT ANIMATIONS

revealOnScroll();

});

// =========================
// SCROLL REVEAL
// =========================

function revealOnScroll(){

const reveals = document.querySelectorAll(
".reveal, .reveal-left, .reveal-right"
);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{
threshold:0.15
}

);

reveals.forEach(el=>observer.observe(el));

}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target = document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// =========================
// KPI COUNTER
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText = "0";

const updateCounter = ()=>{

const target = +counter.getAttribute("data-target");

const current = +counter.innerText;

const increment = target / 80;

if(current < target){

counter.innerText = `${Math.ceil(current + increment)}`;

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

// =========================
// PARALLAX HERO
// =========================

window.addEventListener("scroll",()=>{

const scrolled = window.scrollY;

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

heroImage.style.transform =
`translateY(${scrolled * 0.04}px) scale(1.02)`;

}

});

// =========================
// NAVBAR BLUR
// =========================

window.addEventListener("scroll",()=>{

const navbar = document.querySelector(".navbar");

if(window.scrollY > 30){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});
