// Smooth reveal animation (Microsoft-style scroll behavior)

const elements = document.querySelectorAll('.reveal');

function revealOnScroll(){
  const windowHeight = window.innerHeight;

  elements.forEach(el=>{
    const top = el.getBoundingClientRect().top;

    if(top < windowHeight - 100){
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Optional: smooth hover feel extension
document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('mouseenter',()=>{
    card.style.transition = "0.3s";
  });
});
