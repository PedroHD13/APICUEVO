# APICUEVO

Página informativa de Apicuevo, miel de abeja multifloral de Cuevo (Bolivia). HTML + CSS + JS sin dependencias ni build.

## Cómo verla
Abre `index.html` en el navegador (o usa la extensión Live Server de VS Code).

## Estructura
```
index.html            Contenido de la página
css/
  main.css            Entrada: importa todo en orden
  00-tokens.css       Colores, tipografías y medidas (guía de marca)
  01-base.css         Reset, tipografía base, utilidades
  02-componentes.css  Botones y navegación
  sections/           Un archivo por sección (hero, miel, historia, proceso, presentaciones, preguntas, pie)
js/
  nav.js              Menú móvil y año del pie
  floracion.js        Calendario de floración (datos al inicio del archivo)
assets/img/           Fotos y logos
```

## Para trabajar en equipo
Cada sección tiene su propio CSS: si cada quien edita secciones distintas, casi no habrá conflictos al hacer merge.

## Pendientes
- [ ] Escribir la historia real en `index.html` (sección `#historia`, busca `TODO`).
- [ ] Poner el número real de WhatsApp (pie de página).
- [ ] Confirmar precios y datos de contacto.
