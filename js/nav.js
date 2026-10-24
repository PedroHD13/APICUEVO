/* Menú móvil y año del pie. */
(() => {
  const boton = document.querySelector(".nav__boton");
  const menu = document.getElementById("menu");
  const anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();
  if (!boton || !menu) return;
  const abrir = (si) => { boton.setAttribute("aria-expanded", String(si)); menu.dataset.abierto = String(si); };
  boton.addEventListener("click", () => abrir(boton.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) abrir(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") abrir(false); });
})();
