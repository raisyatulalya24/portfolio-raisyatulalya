// ===== SMOOTH SCROLL (ANTI ERROR) =====
document.querySelectorAll('a').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    const targetId = this.getAttribute('href');

    if(targetId && targetId.startsWith('#')){
      const target = document.querySelector(targetId);

      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth'});
      }
    }
  });
});

// ===== ANIMATION ON SCROLL =====
const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", ()=>{
  cards.forEach(card=>{
    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      card.classList.add("show");
    }
  });
});

// trigger awal biar langsung muncul
window.dispatchEvent(new Event('scroll'));