# Google Search Console — pasos después del despliegue

La preparación técnica está incluida en el repositorio, pero la verificación e indexación requieren acceso autorizado a Google Search Console. No se ha añadido ningún token de verificación ficticio.

1. Añadir una propiedad de prefijo de URL para `https://nawelyi.github.io/da-bayou-digital-platform/`.
2. Verificar la propiedad con el método o token proporcionado por Google.
3. Enviar `https://nawelyi.github.io/da-bayou-digital-platform/sitemap.xml`.
4. Usar Inspección de URLs con `https://nawelyi.github.io/da-bayou-digital-platform/`.
5. Solicitar la indexación.

Si Google proporciona después una etiqueta meta de verificación, debe añadirse como un único elemento `<meta>` en el `<head>` de `index.html`, en el punto señalado por el comentario existente.
