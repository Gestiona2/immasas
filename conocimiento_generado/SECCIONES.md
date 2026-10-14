# Inventario de secciones — IMMA S.A.S. BIC

Qué hay en cada página, dónde vive su texto, y qué se puede cambiar sin romper nada.

> **Lo primero y más importante: TODO el texto vive en `src/datos/`.** Un archivo por
> página, más `sitio.json` para lo que se repite. Los `.astro` tienen el diseño y **ni una
> frase escrita a mano**. Si crees que hay que tocar un `.astro` para cambiar un texto,
> vuelve a mirar el JSON: el campo existe.

## Los archivos de contenido

| Archivo | Qué controla |
|---|---|
| `src/datos/sitio.json` | Menú, teléfono, dirección, horario, textos del pie. **Se ve en todas las páginas.** |
| `src/datos/inicio.json` | Toda la página de inicio |
| `src/datos/servicios.json` | La página de servicios y el índice fijo (el pie también lee sus títulos) |
| `src/datos/nosotros.json` | La página Nosotros |
| `src/datos/contacto.json` | Formulario y datos de la página de contacto |
| `src/datos/blog.json` | Textos de la lista del blog (los artículos están en `src/content/blog/`) |
| `src/datos/sitio-404.json` | La página de "no encontrada" |

---

## Lo que se repite en todas las páginas (`sitio.json`)

### Menú de arriba
- **Dónde:** lista `menu`. 5 ítems hoy; con más de 7 se amontona.
- **Cuidado:** el `id` de cada ítem debe coincidir con el `activa="..."` de la página.

### Teléfono, dirección y horario
- **Dónde:** `whatsapp`, `whatsappTexto`, `direccion`, `direccionCalle`, `ciudad`,
  `departamento`, `mapaUrl`, `horario`.
- **Cambiarlos aquí los cambia en el pie, la página de contacto, la banda de contacto del
  inicio y el botón flotante de WhatsApp, de una vez.**
- **Cuidado:** `whatsapp` va sin espacios ni signos (ver `COMO-EDITAR.md`).

### Pie de página
- Cuatro columnas: marca con botón de WhatsApp, servicios (leen `servicios.json`), páginas
  (leen `menu`) y contacto. Los rótulos están en `sitio.json` → `pie`.

### Interruptor de buscadores
- `indexar`: `false` mientras sea demo (agrega `noindex`). Ponerlo en `true` al salir a
  producción.

---

## Inicio (`inicio.json`)

Las secciones, en el orden en que aparecen:

### 1. Portada — `portada`
- **Qué es:** título grande, texto, dos botones y una foto industrial a la derecha.
- **Campos:** `encabezado`, `titulo`, `texto`, `botones` (lista), `imagen`, `imagenAlt`.
- **Cuidado:** el botón con `href: "whatsapp"` abre WhatsApp; los que empiezan por `/`
  llevan a una página del sitio.

### 2. Banda de confianza — `confianza`
- **Qué es:** cuatro datos cortos con ícono bajo la portada.
- **Cuidado:** solo datos que el cliente haya dado (ver `LIMITES.md`).

### 3. Servicios — `servicios`
- **Qué es:** cuatro tarjetas con foto. Cada una enlaza a su sección en `/servicios`.
- **Campos por tarjeta:** `id` (**debe coincidir con el `id` en `servicios.json`**), `titulo`,
  `texto`, `icono`, `imagen`.
- **Cuidado:** exactamente 4; con más, la rejilla de dos columnas queda desbalanceada.

### 4. Nosotros — `nosotros`
- **Qué es:** presentación corta con foto y botón a `/nosotros`.

### 5. Métodos de ensayo — `metodos`
- **Qué es:** los métodos de inspección agrupados por tipo de defecto (volumétricos,
  superficiales, visuales y de condición, materiales), con foto.
- **Campos:** `grupos` (cada uno con `titulo`, `texto`, `icono`, `items`), `imagen`, `boton`.
- **Cuidado:** la agrupación sale del artículo del blog del cliente. No agregar métodos que
  IMMA no ofrezca.

### 6. Cifras — `cifras`
- **Qué es:** cuatro números que cuentan al entrar a la pantalla, sobre fondo oscuro.
- **Cuidado:** **exactamente 4**. `numero` es entero; `sufijo` va pegado ("+").

### 7. Última nota del blog — `blog`
- **Qué es:** tarjeta con el artículo más reciente. Se llena sola desde `src/content/blog/`.
  Si no hay artículos, la sección desaparece.

### 8. Preguntas frecuentes — `faq`
- **Qué es:** lista desplegable. Cada ítem: `pregunta`, `respuesta`.
- **Cuántas caben bien:** hasta 6.

### 9. Banda de contacto — `contacto`
- **Qué es:** llamado final sobre fondo oscuro con botones y tres datos (teléfono, horario,
  dirección). Los datos salen de `sitio.json`, no de aquí.

---

## Servicios (`servicios.json`)

- **Cabecera:** `cabecera`. **Índice fijo** que se queda pegado arriba: `indice` y el campo
  `corto` de cada servicio.
- **Cada servicio** (`servicios`): `id`, `corto`, `titulo`, `texto`, `icono`, `imagen`,
  `puntos` (lista con check). La foto alterna de lado sola.
- **Llamado final:** `cta_bloque` (título y texto) y `cta` (dos botones).
- **Cuidado:** el `id` es el ancla (`/servicios#end`); si se cambia, actualizar los enlaces
  del inicio (`inicio.json` → `servicios.items[].id`).

## Nosotros (`nosotros.json`)

`introduccion`, `mision`, `vision`, `historia`, `valores` (seis tarjetas con ícono),
`normas` (ASNT, ASME, API, NACE, AWS como capacitación del equipo), `foto`.
- **Cuidado:** la visión dice "En el 2026…". Pendiente de confirmar con el cliente.

## Contacto (`contacto.json`)

- `canal`: el bloque de WhatsApp. `opciones`: qué datos de `sitio.json` se muestran (la
  dirección lleva el enlace "Cómo llegar").
- `formulario`: etiquetas, ejemplos y la lista de servicios del desplegable. **El formulario
  abre WhatsApp con el mensaje escrito; no envía correos.**

## Blog

- Lista: `blog.json` (textos) + `src/content/blog/*.md` (artículos).
- Hoy hay **un artículo** (¿Qué son los ensayos no destructivos?, 15-sep-2021), tomado del
  sitio anterior.
