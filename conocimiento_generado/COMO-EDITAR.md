# Recetas — los cambios que se piden más seguido

Todas las rutas salen de la carpeta del sitio.

## Cambiar el teléfono, el WhatsApp o la dirección

`src/datos/sitio.json`. Se cambia **una sola vez** y queda cambiado en el pie, la página de
contacto, la banda de contacto del inicio, el botón flotante y los datos que lee Google.

```json
"whatsapp": "573177447678",
"whatsappTexto": "317 744 7678",
"direccion": "Calle 41 N° 1C-48 Apto 202A, Tunja, Boyacá",
"direccionCalle": "Calle 41 N° 1C-48 Apto 202A",
"horario": "Lun a vie: 8am - 6pm · Sábados: 8am a 12pm",
```

⚠️ `whatsapp` va **sin espacios, sin + y sin guiones**, empezando por 57. Si se escribe con
espacios, el botón de WhatsApp deja de abrir la conversación. `whatsappTexto` sí es para
leer: ahí van los espacios.

⚠️ La dirección está en **dos** campos: `direccion` (con ciudad, es la que se ve) y
`direccionCalle` (solo la calle, la usa Google). Cambiar los dos. Si cambia la dirección,
cambiar también `mapaUrl` (el enlace "Cómo llegar").

## Poner el correo electrónico

Hoy `correo` está vacío a propósito (el cliente no publica uno). Cuando lo entregue,
escribirlo en `sitio.json` → `correo`. No inventar uno.

## Cambiar el texto de la portada

`src/datos/inicio.json`, bloque `portada` (`titulo`, `texto`, `botones`, `imagen`).

## Cambiar el texto de un servicio

`src/datos/servicios.json`, dentro de `servicios`. **Aparece en la página de servicios**; el
resumen corto que sale en las tarjetas del inicio está aparte, en `inicio.json` →
`servicios.items`. Si se cambia el nombre de un servicio, cambiarlo en los dos.

## Agregar un servicio

1. En `servicios.json` copiar un bloque de `servicios` y pegarlo debajo.
2. Cambiar `id` (corto, sin espacios ni tildes), `corto` (lo que dice el botón del índice),
   `titulo`, `texto`, `puntos` e `imagen`.
3. El `icono` tiene que ser **uno de los de la lista de `STACK.md`**: si no está, no se ve.
4. Agregar la tarjeta también en `inicio.json` → `servicios.items` (con el mismo `id`).
5. Agregar el enlace en el pie: sale solo, el pie lee `servicios.json`.

## Agregar un artículo al blog

1. Crear un archivo en `src/content/blog/`, por ejemplo `corrosion-en-tanques.md`.
2. Al principio, entre rayas, estos cuatro datos:

```
---
title: "Título del artículo"
pubDate: 2026-11-02
imagen: /img/nombre-de-la-foto.webp
imagenAlt: Descripción de la foto
---
```

3. Debajo, el texto. Los párrafos se separan con una línea en blanco; las listas con `- `.
4. Agregar la dirección nueva a `public/sitemap.xml` (con `/` al final).

La lista del blog y la tarjeta de "última nota" del inicio se actualizan solas: muestran
el artículo más reciente por `pubDate`.

## Cambiar una pregunta frecuente

`src/datos/inicio.json` → `faq.items`. Máximo 6 recomendado: con más, la lista se vuelve
larga.

## Cambiar una cifra

`src/datos/inicio.json` → `cifras.items`. Son **exactamente 4**. `numero` es lo que cuenta
la animación; `sufijo` es lo que va después ("+"). ⚠️ No agregar cifras que el cliente no
haya dado.

## Cambiar una foto

Guardar la nueva en `public/img/` **con el mismo nombre** que la vieja. No hay que tocar
ningún otro archivo. Para fotos nuevas, prepararlas con
`node tools/preparar-fotos.mjs ORIGEN NOMBRE` (las recorta, reduce y pasa a WebP).

| Dónde | Medida | Proporción |
|---|---|---|
| Portada del inicio | 1600 px de ancho | 4:3 (se recorta al centro) |
| Servicios (tarjeta y página) | 1000 px de ancho | 4:3 |
| Foto de Nosotros | 1600 px de ancho | 16:9 o 4:3 |
| Imagen al compartir en redes | 1200 × 630 px | `public/img/og-imma.jpg` |

Guardar siempre en **WebP** si se puede: pesa la mitad que un JPG.

## Cambiar un ítem del menú

`src/datos/sitio.json`, lista `menu`. El `id` de cada ítem tiene que coincidir con el
`activa="..."` que lleva la página en su archivo `.astro`, o el menú no marca dónde está el
visitante.

## Cambiar los colores

`src/styles/global.css`, al principio del archivo (`@theme` y `:root`). ⚠️ Afecta a **todo**
el sitio y a los dos temas. Avisar antes de hacerlo. El rojo para texto en tema oscuro es
otro (`--marca-texto`, más claro): si se cambia el rojo de marca, revisar que ese siga
leyéndose.

## Pasar de demo a producción

Cuando el cliente tenga su dominio: en `sitio.json` poner `"indexar": true` (hoy es
`false` y el sitio lleva `noindex`), quitar `SITE_URL` y `SITE_BASE` del workflow para que
el sitio salga en la raíz, y agregar el correo. Ver `PUBLICAR.md`.

## Lo que NO se hace desde aquí

- **Las normas y certificaciones.** Ver `LIMITES.md`.
- **Textos legales:** el sitio todavía no los tiene; ver `PENDIENTES.md`.
