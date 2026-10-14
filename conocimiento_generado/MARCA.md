# Marca — IMMA S.A.S. BIC

> Ingeniería mecánica y metalúrgica aplicada

Los valores de abajo son los que usa el sitio hoy. El detalle completo, con la derivación
desde el sitio anterior, está en `docs/MARCA.md`.

## Colores

| Nombre | Código | Uso |
|---|---|---|
| Rojo corporativo | `#9c1822` | Botones, acentos, línea del menú activo |
| Rojo claro (solo texto en tema oscuro) | `#ff8a80` | Texto rojo sobre fondos oscuros |
| Negro industrial | `#1a1a1a` | Texto principal en tema claro |
| Tinta | `#0e1014` | Fondo de portada, cifras, banda de contacto y pie |
| Gris | `#5a5a5a` | Texto secundario |

⚠️ **El rojo corporativo no se usa para texto sobre fondo oscuro**: da 2,3:1 de contraste y
el mínimo legible es 4,5:1. Ahí va el rojo claro. Los botones y fondos sí llevan el
corporativo.

## Tipografías

| Uso | Familia | Archivo |
|---|---|---|
| Títulos | Sora (variable, 400–800) | `public/fonts/sora-variable.woff2` |
| Cuerpo | Plus Jakarta Sans (variable, 300–700) | `public/fonts/plus-jakarta-sans-variable.woff2` |

## Logo

- `public/brand/logo.png` — versión roja, para fondos claros
- `public/brand/logo-blanco.png` — versión blanca, para fondos oscuros (portada, pie, tema
  oscuro)
- `public/brand/logo@2x.png` — para redes y datos de Google
- `public/brand/favicon.png`

El menú cambia solo entre las dos versiones según el fondo y el tema.

## Tono

- **Corporativo y directo.** Trato de usted. Habla de alcance, plazos, calidad y
  cumplimiento.
- **Técnico sin jerga innecesaria.** Las siglas (END, UT, RT…) se explican donde aparecen.
- **Confiable:** solo datos verificables. Nunca cifras, clientes ni testimonios inventados.

## Temas

El sitio tiene tema claro y oscuro (botón de la luna en el menú). Recuerda la elección del
visitante. Todo color va con variables (`var(--text)`, `var(--bg)`…), nunca escrito a mano.

## Imagen para compartir

`public/img/og-imma.jpg` (1200 × 630). Es la que sale cuando alguien pega el enlace en
WhatsApp, LinkedIn o Facebook.
