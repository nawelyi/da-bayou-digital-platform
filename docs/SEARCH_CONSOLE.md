# Google Search Console — pasos después del despliegue

El dominio de producción es `https://dabayousportsbarandgrill.com/`. La preparación técnica de SEO está en el repositorio, pero la verificación y solicitud de indexación requieren acceso autorizado a Google Search Console.

1. Añadir una propiedad **Dominio** para `dabayousportsbarandgrill.com` en Google Search Console (sin `https://`).
2. Verificar la propiedad añadiendo en Porkbun el registro **TXT** que Google entregue. No inventar ni añadir ningún token hasta obtenerlo.
3. Una vez publicado y accesible por HTTPS el sitio definitivo, enviar `https://dabayousportsbarandgrill.com/sitemap.xml`.
4. Usar **Inspección de URLs** para `https://dabayousportsbarandgrill.com/` y solicitar indexación de la página pública.
5. Revisar resultados de indexación, rendimiento y posibles errores durante los días siguientes.

Si Google ofrece el método de prefijo URL en lugar de propiedad Dominio, se puede usar la etiqueta meta de verificación de Google en `index.html` (hay un comentario que indica el lugar). La propiedad Dominio con TXT es preferible porque cubre variantes `www` y sin `www`.

Antes de enviar el sitemap, retirar cualquier texto interno de `Client preview` o `For client review` y publicar la versión `Opening Soon` aprobada.
