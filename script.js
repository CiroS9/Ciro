const WHATSAPP_NUMBER = "+39XXXXXXXXXX";
const SUBITO_URL = "https://www.subito.it/";
const AUTOSCOUT_URL = "https://www.autoscout24.it/";

function setLinks(){
  const wa = document.getElementById("waLink");
  const waText = document.getElementById("waText");
  const subito = document.getElementById("subitoLink");
  const autoscout = document.getElementById("autoscoutLink");

  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;
  if (wa) wa.href = waHref;
  if (waText) waText.textContent = WHATSAPP_NUMBER;

  if (subito) subito.href = SUBITO_URL;
  if (autoscout) autoscout.href = AUTOSCOUT_URL;

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

function setupReveal(){
  const items = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    for (const e of entries){
      if (e.isIntersecting){
        e.target.classList.add('show');
        obs.unobserve(e.target);
      }
    }
  }, { threshold: 0.15 });

  items.forEach(el => obs.observe(el));
}

function setupMobileMenu(){
  const btn = document.querySelector('.burger');
  const menu = document.querySelector('.mobile');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    menu.hidden = isOpen;
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    });
  });

  const closeMenu = () => {
    btn.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  };

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 941px)').matches) closeMenu();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLinks();
  setupReveal();
  setupMobileMenu();
});
