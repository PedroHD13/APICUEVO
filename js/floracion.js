/* Calendario de floración. Para cambiar flores o meses, edita solo los datos de arriba. */
(() => {
  const meses = ["Jul", "Ago", "Sep", "Oct", "Nov", "Dic", "Ene", "Feb", "Mar"];
  const cosecha = [4, 5, 6, 7];
  const flores = [
    { id: "chanar", nombre: "Chañar", on: [1, 2, 3], texto: "Es de las primeras en florecer, con racimos amarillos antes de que salgan las hojas. Abre la temporada y le da a la miel un tono claro." },
    { id: "algarrobo", nombre: "Algarrobo", on: [2, 3, 4], texto: "El árbol más generoso del Chaco. Su flor es pequeña y abundante, y aporta un dulzor suave y redondo." },
    { id: "quebracho", nombre: "Quebracho blanco", on: [2, 3, 4, 5], texto: "Florece en primavera con flores blancas y perfumadas. Suma notas florales y algo de cuerpo." },
    { id: "mistol", nombre: "Mistol", on: [3, 4, 5], texto: "Sus flores verdosas atraen mucho a las abejas. Da una miel de color ámbar y sabor más intenso." },
    { id: "silvestres", nombre: "Flores silvestres", on: [2, 3, 4, 5, 6, 7, 8], texto: "Hierbas, cactus y arbustos del monte que florecen con las lluvias. Son las que hacen que cada cosecha sea distinta." }
  ];
  const textoTodas = "Toca una flor para ver cuándo florece y qué aporta a la miel. La franja marrón marca la temporada de cosecha.";

  const cal = document.getElementById("cal");
  const chips = document.getElementById("chips");
  const nombre = document.getElementById("fNombre");
  const texto = document.getElementById("fTexto");
  if (!cal || !chips) return;

  const fila = (id, etiqueta, activos, extra = "") => {
    const celdas = meses.map((m, i) =>
      `<span class="cal__celda${activos.includes(i) ? " on " + extra : ""}" title="${etiqueta}: ${m}"></span>`
    ).join("");
    return `<div class="cal__fila" data-fila="${id}"><span class="cal__etiqueta">${etiqueta}</span><div class="cal__meses">${celdas}</div></div>`;
  };

  let html = `<div class="cal__fila cal__fila--cabeza"><span></span><div class="cal__meses">${meses.map((m) => `<span class="cal__mes">${m}</span>`).join("")}</div></div>`;
  flores.forEach((f) => {
    html += fila(f.id, f.nombre, f.on);
    const b = document.createElement("button");
    b.className = "chip"; b.type = "button"; b.dataset.f = f.id; b.textContent = f.nombre;
    b.setAttribute("aria-pressed", "false");
    chips.appendChild(b);
  });
  html += fila("cosecha", "Cosecha", cosecha, "cosecha");
  cal.innerHTML = html;

  chips.addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    const id = b.dataset.f;
    chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
    cal.querySelectorAll("[data-fila]").forEach((el) => {
      const f = el.dataset.fila;
      el.classList.toggle("tenue", id !== "all" && f !== id && f !== "cosecha");
    });
    if (id === "all") { nombre.textContent = "Todas las flores"; texto.textContent = textoTodas; return; }
    const f = flores.find((x) => x.id === id);
    nombre.textContent = `${f.nombre}: de ${meses[f.on[0]]} a ${meses[f.on[f.on.length - 1]]}`;
    texto.textContent = f.texto;
  });
})();
