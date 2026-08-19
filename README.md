# Da Bayou Digital Platform

Primera versión demostrable del sitio de Da Bayou Sports Bar & Grill, preparada para aprobación visual y validación de alcance con el cliente.

## Ver la demo

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
- menú demostrativo con categorías interactivas;
- bloques para promociones, Gameday y eventos;
- Customer Club con formulario funcional en modo demostración;
- vista previa del futuro QR;
- ubicación, horarios y contacto preparados para los datos definitivos;
- checklist visible para aprobación del cliente;
- imágenes originales generadas con IA y optimizadas para web.

## Límites intencionales de la demo

El formulario no transmite ni almacena datos. Menú, precios, dirección, horarios, teléfono, enlaces sociales, eventos y promociones son contenido de demostración o están marcados como pendientes. No deben publicarse como información definitiva sin aprobación del cliente.

La fuente contractual se mantiene fuera del repositorio mediante `.gitignore`; se utiliza únicamente como referencia de alcance.

## Documentación

- `docs/PRODUCT_SCOPE.md`: alcance explícito, estado de la demo y pendientes.
- `docs/DECISIONS.md`: decisiones técnicas y de producto de esta versión.
- `docs/TASKS.md`: tareas priorizadas para convertir la demo en producción.
- `docs/IMAGE_ASSETS.md`: procedencia y prompts de los recursos visuales.
- `docs/STATUS.md`: estado de implementación, pruebas y conexión con GitHub.

