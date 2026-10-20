/* =====================================
   ELEMENTOS DEL DOM
===================================== */

const productosContainer = document.querySelector("#productos-container");
const carritoContainer = document.querySelector("#carrito-container");
const mensajeCarrito = document.querySelector("#mensaje-carrito");
const botonVaciarCarrito = document.querySelector("#vaciar-carrito");
const mensajeInformativo = document.querySelector("#mensaje-informativo");
const estadoCarga = document.querySelector("#estado-carga");

// Los productos se cargarán desde data.json.
let productos = [];

// Recuperamos el carrito guardado en localStorage.
let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];


/* =====================================
   NOTIFICACIONES CON TOASTIFY
===================================== */

function mostrarNotificacion(mensaje, color) {
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: color
        }
    }).showToast();
}


/* =====================================
   GUARDAR CARRITO EN LOCALSTORAGE
===================================== */

function guardarCarrito() {
    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );
}

/* =====================================
   CARGAR PRODUCTOS CON FETCH
===================================== */

async function cargarProductos() {
    try {
        estadoCarga.textContent = "Cargando productos...";

        const respuesta = await fetch("./data.json");

        // Verificamos si la petición fue exitosa.
        if (!respuesta.ok) {
            throw new Error("No se pudieron obtener los productos.");
        }

        // Convertimos la respuesta a JavaScript.
        const datos = await respuesta.json();

        // Comprobamos que recibimos un array.
        if (!Array.isArray(datos)) {
            throw new Error("El formato de los productos no es válido.");
        }

        productos = datos;

        // Mostramos los productos recibidos.
        renderizarProductos();

        estadoCarga.textContent = "";

        mostrarNotificacion(
            "Productos cargados con éxito",
            "#218838"
        );

    } catch (error) {
        console.error("Error al cargar los productos:", error);

        estadoCarga.textContent =
            "No se pudieron cargar los productos. Intentá nuevamente.";

        mostrarNotificacion(
            "Error al cargar los productos",
            "#c0392b"
        );

    } finally {
        console.log("Finalizó el proceso de carga de productos.");
    }
}


/* =====================================
   RENDERIZAR PRODUCTOS EN EL DOM
===================================== */

function renderizarProductos() {
    productosContainer.innerHTML = "";

    productos.forEach((producto) => {
        const { id, nombre, precio, categoria, stock } = producto;

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("producto");

        tarjeta.innerHTML = `
            <h3>${nombre}</h3>
            <p>Precio: ${precio.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 0
            })}</p>
            <p>Categoría: ${categoria}</p>
            <p>Stock: ${stock}</p>
            <button
                class="btn-agregar"
                data-id="${id}">
                Agregar al carrito
            </button>
        `;

        productosContainer.appendChild(tarjeta);
    });
}

/* =====================================
   AGREGAR PRODUCTOS AL CARRITO
===================================== */

function agregarAlCarrito(idProducto) {
    try {
        const producto = productos.find(
            (producto) => producto.id === idProducto
        );

        if (!producto) {
            throw new Error("El producto no existe.");
        }

        const productoEnCarrito = carrito.find(
            (producto) => producto.id === idProducto
        );

        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;
        } else {
            carrito.push({
                ...producto,
                cantidad: 1
            });
        }

        guardarCarrito();
        renderizarCarrito();

        mostrarNotificacion(
            `${producto.nombre} agregado al carrito`,
            "#218838"
        );

    } catch (error) {
        console.error("Error al agregar el producto:", error);

        mensajeCarrito.textContent =
            `No se pudo agregar el producto: ${error.message}`;

        mostrarNotificacion(
            "No se pudo agregar el producto",
            "#c0392b"
        );

    } finally {
        console.log("Finalizó el intento de agregar el producto.");
    }
}

/* =====================================
   RENDERIZAR CARRITO
===================================== */

function renderizarCarrito() {
    carritoContainer.innerHTML = "";

    const carritoVacio = carrito.length === 0
        ? "El carrito está vacío."
        : "";

    mensajeCarrito.textContent = carritoVacio;

    carrito.forEach((producto) => {
        const { id, nombre, precio, cantidad } = producto;

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("producto-carrito");

        tarjeta.innerHTML = `
            <h3>${nombre}</h3>
            <p>Precio: ${precio.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 0
            })}</p>
            <p>Cantidad: ${cantidad}</p>
            <p>Subtotal: ${(precio * cantidad).toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 0
            })}</p>
            <button
                class="btn-eliminar"
                data-id="${id}">
                Eliminar
            </button>
        `;

        carritoContainer.appendChild(tarjeta);
    });
}

/* =====================================
   ELIMINAR PRODUCTOS DEL CARRITO
===================================== */

function eliminarDelCarrito(idProducto) {
    const carritoAnterior = carrito.length;

    carrito = carrito.filter(
        (producto) => producto.id !== idProducto
    );

    if (carrito.length === carritoAnterior) {
        mostrarNotificacion(
            "No se encontró el producto en el carrito",
            "#c0392b"
        );
        return;
    }

    guardarCarrito();
    renderizarCarrito();

    mostrarNotificacion(
        "Producto eliminado del carrito",
        "#555555"
    );
}

/* =====================================
   EVENTO: AGREGAR PRODUCTOS
===================================== */

productosContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-agregar")) {
        const id = Number(event.target.dataset.id);

        agregarAlCarrito(id);
    }
});

/* =====================================
   EVENTO: ELIMINAR PRODUCTOS
===================================== */

carritoContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-eliminar")) {
        const id = Number(event.target.dataset.id);

        eliminarDelCarrito(id);
    }
});

/* =====================================
   EVENTO: VACIAR CARRITO
===================================== */

botonVaciarCarrito.addEventListener("click", () => {
    carrito = [];

    localStorage.removeItem("carrito");

    renderizarCarrito();

    mostrarNotificacion(
        "Carrito vaciado correctamente",
        "#555555"
    );
});

/* =====================================
   MENSAJE INFORMATIVO ASÍNCRONO
===================================== */

setTimeout(() => {
    if (mensajeInformativo) {
        mensajeInformativo.textContent =
            "¡Recordá que podés agregar varios productos a tu carrito!";
    }
}, 3000);

// El carrito guardado se muestra desde el inicio.
renderizarCarrito();

// Solicitamos los productos al iniciar la aplicación.
cargarProductos();
