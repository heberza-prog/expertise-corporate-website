function toggleTheme(){

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
? "dark"
: "light"
);

}

window.addEventListener("load",()=>{

const theme = localStorage.getItem("theme");

if(theme === "dark"){
document.body.classList.add("dark");
}

revealOnScroll();

});

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
