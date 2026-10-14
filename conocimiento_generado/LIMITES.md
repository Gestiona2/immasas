# Qué no tocar, y cuándo llamar al proveedor

## Nunca, sin consultar

**Las afirmaciones sobre certificaciones.** El sitio dice que el *equipo* está capacitado y
certificado con ASNT, ASME, API, NACE y AWS, tal como lo dice el cliente. **No afirmar que
la empresa o su proceso está certificado por esas entidades**, ni agregar ISO u otras
certificaciones, salvo que el cliente lo confirme con documento. Un comprador industrial lo
verifica.

**Las cifras.** Las cuatro del inicio (15+ años, 4 líneas de servicio, 5 normativas,
2 sectores) salen del texto del cliente. **No agregar obras entregadas, clientes atendidos,
toneladas, horas sin accidentes ni ninguna cifra sin que el cliente entregue el dato.**

**Clientes, proyectos y testimonios.** El sitio no los tiene y **no deben agregarse "de
ejemplo"**. Cuando el cliente entregue logos o proyectos reales con autorización, se
agregan; antes, no.

**La dirección.** Hay dos versiones en circulación (el texto del sitio dice Calle 41 N°
1C-48; el mapa del sitio anterior marcaba Cl. 40 # 1-47). Hasta que el cliente confirme
cuál es, no cambiarla.

**Los colores y las tipografías.** Vienen del logo y afectan a todo el sitio y a los dos
temas. Si lo piden, avisar el alcance antes.

## Cosas que se ven fáciles y no lo son

**Poner el mapa de Google dentro de la página.** Se evitó a propósito: un mapa incrustado
le envía la IP de cada visitante a Google sin que la persona lo pida. Por eso hay un enlace
"Cómo llegar" que lo abre en otra pestaña. Si lo piden, explicar esto primero.

**Cargar tipografías o íconos desde internet.** Todo está guardado dentro del sitio, por
privacidad y para que siga funcionando en diez años. No reemplazar por enlaces a Google
Fonts ni a un CDN.

**Poner un ícono que no existe.** Solo funcionan los que están guardados (lista en
`STACK.md`). Cualquier otro nombre deja el espacio **vacío, sin ningún aviso**. Si hace
falta uno nuevo, hay que agregarlo al archivo de íconos.

**Escribir un color directamente en un estilo.** Todo usa variables que cambian según el
tema. Un color escrito a mano se ve bien en tema claro y se rompe en tema oscuro.

**Escribir texto dentro de un archivo `.astro`.** El texto va en `src/datos/`. Si parece
que no hay campo para lo que se pide, casi siempre sí lo hay: revisar `SECCIONES.md`.

**Cambiar `overflow-x` del `body` a `hidden`.** Rompe el índice fijo de la página de
servicios. Debe quedar `clip`.

**Agregar una página sin ponerla en `public/sitemap.xml`.** Google tarda más en
encontrarla.

## El formulario

El formulario de contacto **no envía correos ni guarda nada**: arma el mensaje y abre
WhatsApp con él escrito. Es a propósito (no hay servidor ni datos que proteger). Si el
cliente quiere recibir los mensajes por correo, eso es trabajo del proveedor.

## Llamar al proveedor cuando

- La publicación falla dos veces seguidas
- Hay que cambiar dónde está alojado el sitio o a dónde apunta el dominio
- Se necesita que el formulario envíe correos de verdad
- Se quiere agregar una tienda, un área de clientes o algo que guarde datos
- Algo se ve roto en celular y no se sabe por qué
- Hay que redactar políticas de privacidad o tratamiento de datos
