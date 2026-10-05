# Da Bayou Digital Platform

Sitio estático de Da Bayou Sports Bar & Grill, preparado para publicación en GitHub Pages sin frameworks ni dependencias de producción.

## Ver la demo

Demo pública para revisión del cliente:

https://nawelyi.github.io/da-bayou-digital-platform/

GitHub Pages publica automáticamente el contenido de `main` desde la raíz del repositorio.

### Vista local

Requiere Node.js 18 o posterior. No hay dependencias que instalar.

```bash
npm run dev
```

Abrir `http://127.0.0.1:4173`.

## Validar

```bash
npm test
```

## Qué incluye esta primera versión

- experiencia responsive, diseñada primero para móvil;
- página principal con dirección visual original;
- menú oficial en una galería responsive con ampliación accesible;
- bloques para promociones, Gameday y eventos;
- Customer Club conectado a una landing pública de MailerLite;
- captura de nombre, email y consentimiento explícito;
- correo automático de bienvenida y QR definitivo;
- dirección confirmada y bloques preparados para completar horarios y contacto;
- enlaces oficiales de Facebook, Instagram y TikTok;
- metadata local, datos estructurados de restaurante, `robots.txt` y `sitemap.xml`;
- checklist visible para aprobación del cliente;
- imágenes originales generadas con IA y optimizadas para web.

## Límites intencionales de la demo

La landing del Customer Club transmite los registros consentidos a MailerLite y activa el correo de bienvenida. El logo, las imágenes del menú, la dirección y los enlaces sociales ya corresponden a los assets/datos enviados por el cliente. Horarios, teléfono, eventos y promociones siguen siendo contenido de demostración o están marcados como pendientes. No deben publicarse como información definitiva sin aprobación del cliente.

La fuente contractual se mantiene fuera del repositorio mediante `.gitignore`; se utiliza únicamente como referencia de alcance.

## Documentación

- `docs/PRODUCT_SCOPE.md`: alcance explícito, estado de la demo y pendientes.
- `docs/DECISIONS.md`: decisiones técnicas y de producto de esta versión.
- `docs/TASKS.md`: tareas priorizadas para convertir la demo en producción.
- `docs/IMAGE_ASSETS.md`: procedencia y prompts de los recursos visuales.
- `docs/STATUS.md`: estado de implementación, pruebas y conexión con GitHub.
- `docs/SEARCH_CONSOLE.md`: pasos manuales pendientes para verificación e indexación.
