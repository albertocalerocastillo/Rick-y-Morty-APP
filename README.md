<div align="center">

# Rick y Morty APP

**Explorador de episodios y personajes de Rick y Morty hecho con React y la API pública de la serie.**

Práctica de React

![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)

[**Ver demo**](https://albertocalerocastillo.github.io/Rick-y-Morty-APP/)

<img src="docs/captura.jpg" alt="Listado de episodios con sus personajes" width="85%">

</div>

## Qué es

Una aplicación de una sola página que consume [The Rick and Morty API](https://rickandmortyapi.com/) para recorrer la serie por episodios. Desde cada episodio puedes saltar a sus personajes y, desde cada personaje, a los episodios en los que aparece, navegando entre ambas vistas sin recargar la página.

## Funcionalidades

- **Listado de episodios paginado**: cada página muestra los episodios de la API con todos sus personajes enlazados, y los botones *Anterior* y *Siguiente* se desactivan al llegar al principio o al final.
- **Ficha de episodio** (`/episode/:id`): nombre, fecha de estreno, código del episodio (por ejemplo `S01E01`) y lista de personajes.
- **Ficha de personaje** (`/character/:id`): imagen, especie, género, origen y lista de episodios en los que aparece.
- **Navegación cruzada** entre episodios y personajes con React Router, y enlace de vuelta al listado desde cada ficha.
- **Carga de datos agrupada**: los personajes de todos los episodios de la página se piden en una sola llamada a `/character/1,2,3…` (`src/api/characters.js`), en lugar de una petición por personaje.

## Stack

| Capa | Tecnología |
| --- | --- |
| Interfaz | React 18 (componentes funcionales, `useState`, `useEffect`) |
| Rutas | React Router 7 (`HashRouter`, `Routes`, `useParams`, `Link`) |
| Datos | `fetch` con `async/await` contra The Rick and Morty API |
| Herramientas | Vite 6 y ESLint 9 |
| Estilos | CSS plano (`App.css`, `index.css`) |

## Estructura

```
Rick-y-Morty-APP/
├── index.html
├── vite.config.js
└── src/
    ├── main.jsx              # Punto de entrada
    ├── App.jsx               # Definición de rutas
    ├── App.css / index.css
    └── pages/
        ├── HomePage.jsx      # Listado paginado de episodios
        ├── EpisodePage.jsx   # Detalle de un episodio
        └── CharacterPage.jsx # Detalle de un personaje
```

## Puesta en marcha

Necesitas Node.js 18 o superior.

```bash
git clone https://github.com/albertocalerocastillo/Rick-y-Morty-APP.git
cd Rick-y-Morty-APP
npm install
npm run dev        # http://localhost:5173
```

Otros scripts:

```bash
npm run build      # Build de producción en dist/
npm run preview    # Sirve el build localmente
npm run lint       # Revisión con ESLint
```

No hace falta ninguna clave: la API de Rick and Morty es pública.

## Qué aprendí

- A separar una app de React en páginas y conectarlas con rutas dinámicas que leen el `id` de la URL.
- A pedir datos en `useEffect` y volver a pedirlos cuando cambia una dependencia, como la página actual o el `id`.
- Que una petición por personaje sale cara: la API corta con 429 (demasiadas peticiones), así que agrupé los ids en una sola llamada a `/character/1,2,3`.
- A publicar una SPA en GitHub Pages: `base` de Vite, `HashRouter` para que recargar no dé 404 y despliegue con GitHub Actions.

---

<div align="center">

Hecho por [Alberto Calero](https://github.com/albertocalerocastillo)

</div>
