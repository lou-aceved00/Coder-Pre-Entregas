# 💻 Pre-Entregas JavaScript | Coderhouse

Repositorio destinado a las pre-entregas y actividades realizadas durante el curso de **JavaScript de Coderhouse**, como parte de mi formación en **Desarrollo Full Stack**.

El proyecto se desarrolla de manera progresiva, incorporando en cada entrega nuevos conceptos y herramientas de JavaScript.


## 📌 Proyecto

El proyecto consiste en un **simulador de gestión de productos**, desarrollado inicialmente mediante JavaScript y evolucionado a lo largo de las distintas entregas.

El simulador permite trabajar con productos, stock, precios y distintas acciones realizadas por el usuario.

## Pre-Entrega 10: APIs, Peticiones y Librerías

### ¿Cómo probar el simulador?

1. Cloná o descargá el repositorio.
2. Abrí la carpeta `Décima Pre-Entrega`.
3. Abrí `index.html` con Live Server desde Visual Studio Code.
4. Esperá a que se carguen los productos y verificá las notificaciones.

**Importante:** es necesario utilizar Live Server para que `fetch()` pueda acceder al archivo `data.json`.

### Funcionalidades agregadas

- **Consumo de datos con `fetch()`:** los productos se obtienen desde el archivo local `data.json`.
- **Asincronismo con `async/await`:** permite esperar la respuesta y procesar los datos recibidos.
- **Manejo de errores con `try...catch...finally`:** captura fallos durante la carga y permite informar al usuario.
- **Integración de Toastify:** muestra notificaciones de éxito y error sin utilizar alertas nativas.
- **Renderizado dinámico del DOM:** genera tarjetas con el nombre, precio, categoría y stock de los productos.
- **Carrito persistente:** mantiene las funcionalidades de agregar, eliminar y vaciar productos, guardando los datos mediante `localStorage`.
- **Mensaje informativo con `setTimeout()`:** muestra un recordatorio unos segundos después de ingresar al simulador.

### Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- Promesas y `async/await`
- Manejo de errores
- Toastify JS
- LocalStorage
- Git y GitHub

### Autor

Lourdes Acevedo

Proyecto realizado como parte del curso de Desarrollo Full Stack de Coderhouse.