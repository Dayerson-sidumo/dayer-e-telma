const START_DATE = new Date("2025-04-29T00:00:00+02:00");

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function updateCounter(){
  let diff = Math.max(0, Date.now() - START_DATE.getTime());
  const dayMs = 86400000;
  const hourMs = 3600000;
  const minuteMs = 60000;

  const days = Math.floor(diff / dayMs); diff %= dayMs;
  const hours = Math.floor(diff / hourMs); diff %= hourMs;
  const minutes = Math.floor(diff / minuteMs);
  const seconds = Math.floor((diff % minuteMs) / 1000);

  $("#days").textContent = days.toLocaleString("pt-PT");
  $("#hours").textContent = String(hours).padStart(2,"0");
  $("#minutes").textContent = String(minutes).padStart(2,"0");
  $("#seconds").textContent = String(seconds).padStart(2,"0");
}
updateCounter();
setInterval(updateCounter, 1000);

const intro = $("#intro");
$("#enterSite").addEventListener("click", () => {
  intro.classList.add("hide");
  setTimeout(() => intro.remove(), 900);
});

const progress = $("#progress");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});
$$('.reveal').forEach((el) => observer.observe(el));

// Nossa música: abre o player oficial dentro do site.
const musicModal = $("#musicModal");
const musicButton = $("#musicButton");

function openMusic(){
  musicModal.classList.add("open");
  musicModal.setAttribute("aria-hidden","false");
  document.body.classList.add("locked");
}
function closeMusic(){
  musicModal.classList.remove("open");
  musicModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("locked");
}

musicButton.addEventListener("click", openMusic);
$("#closeMusic").addEventListener("click", closeMusic);
musicModal.addEventListener("click", (e) => { if(e.target === musicModal) closeMusic(); });

$$('.note').forEach(note => {
  note.addEventListener('click', () => {
    note.classList.toggle('active');
    burstHearts(note);
  });
});

function burstHearts(source){
  const rect = source.getBoundingClientRect();
  for(let i=0;i<5;i++){
    const heart = document.createElement('span');
    heart.textContent = '♥';
    heart.style.cssText = `position:fixed;left:${rect.right-50 + Math.random()*40}px;top:${rect.top+rect.height/2}px;color:#d69a9e;z-index:1001;pointer-events:none;font-size:${10+Math.random()*8}px;transition:all .9s ease;opacity:1`;
    document.body.appendChild(heart);
    requestAnimationFrame(() => {
      heart.style.transform = `translate(${(Math.random()-.5)*70}px,${-45-Math.random()*60}px) rotate(${(Math.random()-.5)*40}deg)`;
      heart.style.opacity = '0';
    });
    setTimeout(() => heart.remove(), 950);
  }
}

const lightbox = $("#lightbox");
const lightboxImg = $("#lightboxImg");
$$('.gallery-item[data-src]').forEach((item) => {
  item.addEventListener("click", (e) => {
    lightboxImg.src = e.currentTarget.dataset.src;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden","false");
    document.body.classList.add("locked");
  });
});
function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
  document.body.classList.remove("locked");
}
$("#closeLightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if(e.target === lightbox) closeLightbox(); });

const letterModal = $("#letterModal");
function openLetter(){
  letterModal.classList.add("open");
  letterModal.setAttribute("aria-hidden","false");
  document.body.classList.add("locked");
}
function closeLetter(){
  letterModal.classList.remove("open");
  letterModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("locked");
}
$("#openLetter").addEventListener("click", openLetter);
$("#closeLetter").addEventListener("click", closeLetter);
letterModal.addEventListener("click", (e) => { if(e.target === letterModal) closeLetter(); });

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    closeLightbox();
    closeLetter();
    closeMusic();
  }
});
