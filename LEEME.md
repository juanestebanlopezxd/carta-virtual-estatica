# Carta virtual Hard Burgers — versión sin servidor

Solo HTML, CSS y JavaScript. No necesita Node.js, `npm start` ni base de datos.

## Abrirla
- **En tu computador:** doble clic en `index.html`.
- **En VS Code:** clic derecho sobre `index.html` → *Reveal in File Explorer* y doble clic,
  o instala la extensión *Live Server* y dale *Open with Live Server*.

## Archivos

| Archivo | Para qué |
|---|---|
| `index.html` | La página: carta, carrito y pantalla de pago |
| `styles.css` | Colores, tamaños y diseño |
| `app.js` | Toda la lógica: carrito, ingredientes, adicionales, buscador, pago y mensaje de WhatsApp |
| `data/restaurantes.js` | **Los datos**: productos, precios, adicionales, horario, WhatsApp, llave y QR |
| `img/` | Logo y QR de pago |

## Cambiar precios, productos u otros datos
Abre `data/restaurantes.js`, cambia el valor y guarda. Recarga la página con Ctrl + F5.
Es JavaScript: respeta las comillas `"`, las comas `,` y las llaves `{ }`.

- Precio de un producto: `"precio": 24900` (sin puntos ni $).
- Agotado: `"disponible": false`.
- Número de WhatsApp que recibe los pedidos: `"whatsapp": "573185255540"` (57 + número).
- Horario que se muestra arriba: `"horarioTexto": "4:00 p. m. – 11:00 p. m."`.
- Cerrar la carta un día: `"abierto": false`.
- Llave y titular: en `"pago" → "cuentas"`. QR: reemplaza `img/qr-hard-burgers.png` (y la tarjeta `img/qr-hard-burgers-tarjeta.png`).

## Publicarla gratis (para tener el link)
Cualquier hosting de páginas estáticas sirve. El más fácil:
1. Entra a **https://app.netlify.com/drop**
2. Arrastra **la carpeta completa** `carta-estatica`.
3. Te da un link tipo `https://algo.netlify.app`. Ese es el link para el perfil de WhatsApp.
   (Si creas una cuenta gratis puedes cambiarle el nombre y actualizarla arrastrando la carpeta otra vez.)

Otras opciones: GitHub Pages, Cloudflare Pages, Vercel.

## Qué no tiene (frente a la versión con servidor)
- No guarda un registro de pedidos ni hay panel: los pedidos quedan en el chat de WhatsApp.
- Los precios se calculan en el navegador. Por eso, al recibir el pedido, el restaurante debe
  revisar que el total cuadre con la carta y que el pago haya llegado en Nequi.
