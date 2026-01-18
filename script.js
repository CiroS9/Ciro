// === CONTATTI (modifica solo queste 2 righe quando vuoi) ===
const WHATSAPP_NUMBER = "+39XXXXXXXXXX"; // es: +393331112233
const WHATSAPP_MESSAGE = "Ciao, vorrei informazioni/consulenza per un’auto. Budget: ___ • Utilizzo: ___";

function makeWhatsAppLink(number, msg) {
  const clean = String(number).replace(/\D/g, "");
  const text = encodeURIComponent(msg);
  return `https://wa.me/${clean}?text=${text}`;
}

function setupWhatsApp() {
  const links = document.querySelectorAll("[data-whatsapp]");
  const href = makeWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE);
  links.forEach(a => a.setAttribute("href", href));
}

function setupMobileNav() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mobile-nav");
  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
    document.body.classList.toggle("nav-open", !isOpen);
  });

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      menu.hidden = true;
      document.body.classList.remove("nav-open");
    });
  });
}

function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

  els.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  setupWhatsApp();
  setupMobileNav();
  setupReveal();
});
