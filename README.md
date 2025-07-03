# La Navaja Producciones

Este es el repositorio para el sitio web de "La Navaja Producciones", una plataforma digital que combina una sección de noticias de interés con una biblioteca de fanzines autoeditados. El proyecto está construido con tecnologías web modernas para ofrecer una experiencia rápida, dinámica y fácil de gestionar.

## Tecnologías Utilizadas

*   **Framework:** [Next.js](https://nextjs.org/) (con App Router)
*   **Librería UI:** [React](https://react.dev/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI:** [ShadCN/UI](https://ui.shadcn.com/)
*   **Inteligencia Artificial:** [Firebase Genkit](https://firebase.google.com/docs/genkit)
*   **Visualizador de PDF:** [react-pdf](https://github.com/wojtekmaj/react-pdf)

## Estructura y Gestión de Contenido

El contenido del sitio (tanto las noticias como los fanzines) se gestiona de forma dinámica a través de una estructura de carpetas en el directorio `public/`. Esto permite añadir, modificar o eliminar contenido simplemente gestionando los archivos, sin necesidad de tocar el código fuente principal.

### Gestión de Fanzines

Para añadir un nuevo fanzine, sigue estos pasos:

1.  Crea una nueva carpeta dentro de `public/fanzines/`. El nombre de la carpeta debe ser único y descriptivo (por ejemplo, `cyber-dreams-issue-1`).

2.  Dentro de esa nueva carpeta, crea un archivo llamado `metadata.json` con la siguiente estructura:
    ```json
    {
      "id": 1,
      "slug": "cyber-dreams-issue-1",
      "title": "Cyber Dreams - Número 1",
      "description": "Una exploración de futuros distópicos y ciberpunk.",
      "tags": ["Ciencia Ficción", "Cyberpunk"],
      "hint": "futuristic city"
    }
    ```
    *   `id`: Un número único para ordenar los fanzines.
    *   `slug`: El mismo nombre que la carpeta.
    *   `title`: El título del fanzine.
    *   `description`: Una breve descripción.
    *   `tags`: Un array de etiquetas.
    *   `hint`: Palabras clave para la imagen (uso interno).

3.  Añade el archivo PDF del fanzine en la misma carpeta (por ejemplo, `fanzine.pdf`).
4.  Añade la imagen de portada en la misma carpeta (por ejemplo, `portada.png`). El código la detectará automáticamente.

### Gestión de Noticias

El proceso para las noticias es muy similar:

1.  Crea una nueva carpeta dentro de `public/noticias/`. El nombre de la carpeta debe ser único (por ejemplo, `lanzamiento-web`).

2.  Dentro, crea un archivo `metadata.json` con esta estructura:
    ```json
    {
      "id": 1,
      "slug": "lanzamiento-web",
      "title": "¡Estrenamos nueva página web!",
      "description": "Descubre todas las novedades que trae nuestra nueva plataforma.",
      "content": [
        "Este es el primer párrafo del artículo. Aquí puedes extenderte sobre el tema.",
        "Este es el segundo párrafo. Puedes añadir tantos como necesites."
      ],
      "author": "El Equipo",
      "date": "26 de Octubre, 2023",
      "tags": ["Anuncio", "Web"],
      "hint": "website launch"
    }
    ```
    *   `id`: Un número único para ordenar las noticias (las más recientes con ID más alto).
    *   `slug`: El mismo nombre que la carpeta.
    *   `title`, `description`, `author`, `date`, `tags`, `hint`: Campos descriptivos de la noticia.
    *   `content`: Un array de strings, donde cada string es un párrafo del artículo.

3.  Añade la imagen de portada en la misma carpeta (por ejemplo, `portada-noticia.jpg`).

## Cómo ejecutar el proyecto en local

1.  Clona el repositorio.
2.  Instala las dependencias con `npm install`.
3.  Ejecuta el servidor de desarrollo con `npm run dev`.
4.  Abre [http://localhost:9002](http://localhost:9002) en tu navegador para ver el resultado.

---
Este README proporciona una guía completa para entender, gestionar y desarrollar el proyecto.
