const WHATSAPP_NUMBER = "+39XXXXXXXXXX";
const WHATSAPP_MESSAGE = "Ciao, vorrei informazioni/consulenza per un'auto. Budget: __ • Utilizzo: __ • Modello (se c'è): __";

function makeWhatsAppLink(number, msg){
  const clean = String(number).replace(/\D/g, "");
  const text = encodeURIComponent(msg);
  return `https://wa.me/${clean}?text=${text}`;
}

function setupWhatsApp(){
  const href = makeWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE);
  document.querySelectorAll('[data-whatsapp]').forEach(a => a.setAttribute('href', href));
}

function setupMobileNav(){
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.mobile');
  if(!burger || !menu) return;

  const close = () => {
    burger.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    document.body.classList.remove('nav-open');
  };

  burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!isOpen));
    menu.hidden = isOpen;
    document.body.classList.toggle('nav-open', !isOpen);
  });

  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

function setupReveal(){
  const els = document.querySelectorAll('.reveal');
  if(!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

  els.forEach(el => io.observe(el));
}

function setupYear(){
  const y = document.getElementById('year');
  if(y) y.textContent = String(new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', () => {
  setupWhatsApp();
  setupMobileNav();
  setupReveal();
  setupYear();
});
