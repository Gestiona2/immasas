# Cómo se publica este sitio

## Estado actual

**Es una demostración piloto**, publicada para que el cliente la vea y decida si la compra.
Vive en `https://demos.emp2web.com/immasas/` y lleva `noindex` (Google no la indexa). El
sitio real del cliente sigue siendo `immasas.com`, con el WordPress anterior.

Cómo está montada la demo:

- Repositorio `Gestiona2/immasas` (público, de la cuenta del proveedor).
- **GitHub Pages por workflow** (`.github/workflows/deploy.yml`): con cada cambio en la rama
  `main` se compila y se publica solo.
- El workflow compila con `SITE_URL=https://demos.emp2web.com` y `SITE_BASE=/immasas`.
  Como el sitio usa rutas que empiezan por `/`, la integración
  `tools/integracion-base.mjs` les antepone `/immasas` al compilar. Con el dominio del
  cliente esa integración no hace nada.

## Si el cliente compra: pasar a producción

Lo decide el proveedor **con el cliente presente**, con sus cuentas:

1. **Dónde se aloja.** Hosting que ya tenga, Cloudflare Pages, Netlify o GitHub Pages.
2. **A nombre de quién.** Dominio, GitHub y hosting van a nombre del cliente. El proveedor
   no conserva credenciales ajenas.
3. **Código del sitio:** mover el repositorio a la cuenta del cliente. El remoto **no puede
   quedar con el alias SSH del proveedor** (`git@github-emp2web:...`): en el equipo del
   cliente no resuelve.
4. **Quitar la subcarpeta:** borrar `SITE_URL` y `SITE_BASE` del workflow (o del comando de
   compilación) para que el sitio salga en la raíz del dominio.
5. **Abrir a Google:** en `src/datos/sitio.json` poner `"indexar": true`.
6. **Qué pasa con el WordPress viejo.** Dejarlo apagado pero respaldado unas semanas.

## Cómo funcionará una vez en producción

1. Se hace el cambio en el texto o la foto
2. Se ve en la vista previa (`npm run dev`)
3. El cliente aprueba
4. Se guarda y se publica
5. **Tarda de 2 a 4 minutos.** Si no lo ve, recargar con Ctrl+F5

**El compilado se hace en la nube.** El cliente nunca compila para publicar.

## Si la publicación falla

El sitio **sigue mostrando la versión anterior**. No se rompe ni se pierde nada. Avisar al
proveedor. Si el primer despliegue de GitHub Pages queda en "waiting", cancelarlo y
relanzarlo desde la pestaña Actions del repositorio.

## Cómo deshacer

Cada publicación queda guardada: se puede volver a la anterior sin perder nada. Si el
cliente dice "quedó mal, devuélvelo", se puede.

## Guardar el compilado

Al cerrar la entrega, archivar también la carpeta `dist/` compilada con la fecha, no solo
el código. Es lo que mantiene el sitio recuperable dentro de diez años.
