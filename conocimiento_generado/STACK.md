# Con qué está hecho y dónde está cada cosa

## En una línea

Astro 7 + Tailwind 4, sitio estático. No hay base de datos, ni servidor, ni panel de
administración. Se compila a archivos HTML que cualquier hosting puede servir.

## El mapa de carpetas

```
web-immasas/
├── src/
│   ├── datos/          ← TODO EL TEXTO DEL SITIO. Un archivo por página.
│   ├── content/blog/   ← Los artículos del blog (un .md por artículo)
│   ├── pages/          ← Una página por archivo. La dirección sale del nombre.
│   ├── layouts/        ← Layout.astro: menú, pie, SEO, botón de tema. En todas.
│   ├── components/     ← Foto.astro
│   ├── lib/            ← fecha.ts (fechas en español) y posts.ts (lee el blog)
│   └── styles/
│       └── global.css  ← Colores, tipografías y todos los estilos
├── public/
│   ├── img/            ← Fotos del sitio (WebP) e imagen para compartir en redes
│   ├── brand/          ← Logotipo y favicon
│   ├── fonts/          ← Las dos tipografías, guardadas aquí
│   ├── vendor/         ← GSAP y los íconos, guardados aquí
│   ├── sitemap.xml     ← A mano: agregar cada página o artículo nuevo
│   └── robots.txt
├── tools/
│   ├── preparar-fotos.mjs     ← Recorta, reduce y pasa fotos a WebP
│   └── integracion-base.mjs   ← Solo para la demo en subcarpeta
├── conocimiento_generado/     ← Esta documentación
├── docs/MARCA.md              ← Manual de marca completo
├── .github/workflows/deploy.yml
└── dist/               ← Lo que se publica. Se genera solo; no editar.
```

## Las páginas y sus direcciones

| Archivo | Dirección |
|---|---|
| `src/pages/index.astro` | `/` |
| `src/pages/nosotros.astro` | `/nosotros` |
| `src/pages/servicios.astro` | `/servicios` |
| `src/pages/blog/index.astro` | `/blog` |
| `src/pages/blog/[slug].astro` | `/blog/<nombre-del-archivo-md>` |
| `src/pages/contacto.astro` | `/contacto` |
| `src/pages/404.astro` | cualquier dirección que no exista |

Para una página nueva basta con crear el archivo; luego agregarla a `public/sitemap.xml`.

## Nada se pide a servidores ajenos

Tipografías, íconos y la librería de animación **están guardados dentro del sitio**. No se
cargan desde Google ni desde un CDN: privacidad del visitante y que el sitio siga
funcionando dentro de diez años. El mapa tampoco está incrustado (enlace "Cómo llegar").

## Los íconos

Están en `public/vendor/lucide/lucide.min.js`. **No es la librería completa**: es un
subconjunto. Un nombre que no esté se ve **en blanco, sin error**. Los que hay:

```
bot sheet calendar-check text-cursor-input clipboard-check hard-hat plane landmark cog
paw-print graduation-cap sofa scale smile dumbbell car wrench arrow-right arrow-up
arrow-down arrow-left menu x chevron-down chevron-right message-circle message-square-more
send phone phone-call mail bell bell-ring clock zap check circle-check sparkles workflow tag
users user-round shopping-cart package boxes calendar-clock chart-column credit-card qr-code
contact wallet plug headset play sun moon plus minus star trending-up shield-check instagram
facebook linkedin quote list-checks map-pin info building-2 briefcase-business megaphone
receipt activity search eye microscope scan-search badge-check factory calendar layers award
map leaf briefcase list file-text route
```

Para agregar uno: copiar su dibujo de lucide.dev al archivo, en el mismo formato que los
demás (nombre entre comillas y los trazos como texto).

## Comandos

```
npm install        # una sola vez
npm run dev        # vista previa en el navegador
npm run build      # compila a dist/
```

Demo en subcarpeta: `SITE_URL=https://demos.emp2web.com SITE_BASE=/immasas npm run build`.

## SEO y compartir

`Layout.astro` genera, en cada página: título, descripción, dirección canónica, etiquetas de
redes sociales (con URL absoluta) y datos estructurados de la empresa para Google. Los
datos salen de `sitio.json` y `servicios.json`. Mientras `indexar` sea `false`, agrega
`noindex`.

## Animaciones

Aparecen al bajar con GSAP y con CSS puro. Si el visitante pidió "menos movimiento" en su
sistema, todo aparece de una vez, sin animar.

## Detalles que no son obvios

- `body` usa `overflow-x: clip`, **no** `hidden`: con `hidden` el índice fijo de Servicios
  deja de pegarse arriba.
- Para texto rojo sobre fondo oscuro se usa `--marca-texto`, no `--marca` (contraste).
