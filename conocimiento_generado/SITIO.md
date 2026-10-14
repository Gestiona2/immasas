# IMMA S.A.S. BIC — qué es este sitio

## El negocio

**IMMA** (IMMA S.A.S. BIC) es una empresa colombiana de **ingeniería mecánica y metalúrgica
aplicada**: proyecta, monta, inspecciona y mantiene plantas y equipos industriales.

La idea que ordena el sitio: **vender capacidad técnica demostrable, no promesas.** Por eso
la portada no habla de "soluciones innovadoras" sino de qué hacen concretamente, y las
pruebas de confianza (años, normas, sectores) están a la vista antes de la primera
sección.

- **A quién le vende:** jefes de planta, gerencias de mantenimiento e integridad, y
  contratistas del **sector industrial y energético** en Colombia.
- **Las cuatro líneas de servicio** (todo el sitio gira alrededor de estas):
  1. Proyectos y mantenimientos industriales
  2. Gestión e integridad de activos
  3. Monitoreo y control de la corrosión interior y exterior
  4. Ensayos no destructivos (END / NDT)
- **Contacto:** WhatsApp **317 744 7678** · Calle 41 N° 1C-48 Apto 202A ·
  Lun a vie 8am–6pm, sábados 8am–12pm
- **No publican correo electrónico** en el sitio actual. `sitio.json.correo` está vacío a
  propósito: no inventar uno. Ver `PENDIENTES.md`.

## Dónde vive la confianza

El sitio tiene tres anclas de credibilidad, y hay que cuidarlas porque son lo que un
comprador industrial busca primero:

| Ancla | Dónde está |
|---|---|
| **15+ años de experiencia** | Portada (banda de confianza), cifras, página Nosotros |
| **Certificación ASNT · ASME · API · NACE · AWS** | Banda de confianza, cifras, FAQ y Nosotros |
| **Sectores industrial y energético** | Banda de confianza, cifras, Nosotros |

## Mapa de páginas

| Ruta | Qué es | Contenido en |
|---|---|---|
| `/` | Inicio: portada, confianza, servicios, nosotros, métodos END, cifras, última nota del blog, FAQ, banda de contacto | `src/datos/inicio.json` |
| `/servicios` | Índice fijo + las cuatro líneas con foto, detalle y puntos | `src/datos/servicios.json` |
| `/nosotros` | Presentación, misión, visión, historia, valores, normas | `src/datos/nosotros.json` |
| `/contacto` | Datos de contacto + formulario por WhatsApp | `src/datos/contacto.json` |
| `/blog` | Lista de artículos | `src/content/blog/*.md` |
| `/blog/<artículo>` | Artículo completo | `src/content/blog/<archivo>.md` |

Los datos que se repiten en **todas** las páginas (menú, pie, WhatsApp, dirección,
horario) están en `src/datos/sitio.json`.

## Blog

Hay **un solo artículo**, tomado del sitio actual de IMMA:

- `/blog/que-son-los-ensayos-no-destructivos` — publicado el 15 de septiembre de 2021.

El texto es el del artículo original, recuperado de la web actual. No se inventó nada.

## Cómo hablar en este sitio

- **Corporativo y directo.** Trato de usted, sin jerga innecesaria, hablando de alcance,
  plazos, calidad y cumplimiento.
- **Nunca inventar cifras, clientes, proyectos ni testimonios.** Si falta un dato, se le
  pide al cliente. El sitio hoy **no tiene testimonios ni cartera de clientes publicada**
  —no agregarlos "de ejemplo".
- Las normas (ASNT, ASME, API, NACE, AWS) **solo se mencionan como capacitación y
  certificación del equipo**, tal como lo dice el cliente. No afirmar que el proceso está
  certificado por esas entidades salvo que el cliente lo confirme.


## SEO y compartir

- `Layout.astro` genera canonical, Open Graph / Twitter con **URL absoluta** y JSON-LD de
  `Organization` (con las cuatro líneas como servicios). Los datos salen de `sitio.json`
  (`url`, `razonSocial`, `direccion`, `whatsapp`) y de `servicios.json`.
- Imagen para compartir: `public/img/og-imma.jpg` (1200×630).
- `public/sitemap.xml` y `public/robots.txt` son **a mano**: si se agrega una página o un
  artículo del blog, agregar su URL al sitemap.
- `/404` existe (`src/pages/404.astro`, textos en `src/datos/sitio-404.json`).

## Detalles técnicos que no son obvios

- `body` usa `overflow-x: clip`, **no** `hidden`: con `hidden` el `position: sticky` del
  índice de servicios deja de funcionar.
- `public/vendor/lucide/lucide.min.js` es un **subconjunto** de iconos. Un icono que no
  esté ahí se ve en blanco, sin error. Al usar un icono nuevo, agregarlo al archivo.
- Los artículos del blog se leen con `src/lib/posts.ts` (lo usan la lista y el inicio).
