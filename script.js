// smooth scroll
document.querySelectorAll('a').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    if(this.getAttribute('href').startsWith('#')){
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({behavior:'smooth'});
    }
  });
});

const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", ()=>{
  cards.forEach(card=>{
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      card.classList.add("show");
    }
  });
});

