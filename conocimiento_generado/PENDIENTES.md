# PENDIENTES — IMMA S.A.S. BIC

Lo que falta para cerrar el sitio o que requiere confirmación del cliente.

## Confirmar con el cliente

- [ ] **Correo electrónico.** El sitio actual no publica ninguno; `sitio.json.correo` queda
      vacío a propósito. Con correo se puede agregar a contacto, pie y datos estructurados.
- [ ] **Dirección: hay dos versiones.** El texto del sitio actual dice "Calle 41 N° 1C-48
      Apto 202A", pero el mapa de su página de contacto marca "Cl. 40 # 1-47, Tunja, Boyacá".
      Se publicó la del texto + ciudad Tunja, Boyacá (la ciudad sale de su propio mapa).
      Confirmar cuál es la correcta; se cambia en `sitio.json` (`direccion`, `direccionCalle`,
      `mapaUrl`). El mapa es un enlace "Cómo llegar", no un mapa incrustado (privacidad).
- [ ] **Cartera de clientes, proyectos y testimonios.** No hay ninguno publicado y no se
      inventan. Son lo que más sube la confianza de un comprador industrial: logos de
      clientes autorizados, 2-3 proyectos con alcance y resultado.
- [ ] **Certificaciones.** La web dice que el *equipo* está capacitado y certificado
      (ASNT, ASME, API, NACE, AWS). Si IMMA tiene certificados de empresa (ISO u otros),
      mostrarlos con número y vigencia.
- [ ] **Fotos propias de obra.** Las fotos actuales son las del sitio anterior.
- [ ] **Redes sociales** (LinkedIn sobre todo, para B2B). `sitio.json.redes` vacío.
- [ ] **Dominio y hosting.** La web actual está en immasas.com; decidir dónde se publica
      la nueva (ver `generador`, política de publicación) antes de apuntar el dominio.
- [ ] **Texto de la visión.** Dice "En el 2026 IMMA será…"; el año ya está corriendo.
      Pedir al cliente el texto vigente.
- [ ] **Habeas data / política de privacidad.** El formulario envía por WhatsApp (no guarda
      datos), pero conviene una política corta enlazada en el pie.

## Para pasar de demo a producción (si el cliente compra)

- [ ] Publicar en la cuenta del cliente y quitar `SITE_URL` / `SITE_BASE` (ver `PUBLICAR.md`).
- [ ] `sitio.json` → `"indexar": true`.
- [ ] Remoto de Git sin el alias SSH del proveedor.
- [ ] Empaquetar la entrega: `AGENTS.md` y `CLAUDE.md` (asistente del cliente),
      `TUTORIAL.md` con ejemplos de este sitio, y los scripts `instalar.*` y `doctor.*`.
      Hoy **no existen**: la demo solo lleva la documentación de `conocimiento_generado/`.
- [ ] Archivar el compilado (`dist/`) con la fecha.

## Hecho

- Rediseño completo, SEO técnico, sitemap, robots, 404, índice de servicios, métodos END.
- Documentación `conocimiento_generado/` completa (8 archivos).
- Contraste del tema oscuro corregido (rojo claro para texto).
