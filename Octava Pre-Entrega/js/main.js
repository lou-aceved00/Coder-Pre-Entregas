const productos = [
    {
        id: 1,
        nombre: "Remera",
        precio: 50000,
        categoria: "Indumentaria",
        stock: 10
    },

    {
        id: 2,
        nombre: "Pantalón",
        precio: 40000,
        categoria: "Indumentaria",
        stock: 8
    },

    {
        id: 3,
        nombre: "Zapatillas",
        precio: 150000,
        categoria: "Calzado",
        stock: 5
    }
];


const productosContainer = document.querySelector("#productos-container");

const carritoContainer = document.querySelector("#carrito-container");

const mensajeCarrito = document.querySelector("#mensaje-carrito");

const botonVaciarCarrito = document.querySelector("#vaciar-carrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];


function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );
}


function renderizarProductos() {

    productosContainer.innerHTML = "";

    productos.forEach((producto) => {

        const { id, nombre, precio, categoria, stock } = producto;

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("producto");

        tarjeta.innerHTML = `
            <h3>${nombre}</h3>

            <p>Precio: $${precio}</p>

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


function agregarAlCarrito(idProducto) {

    const producto = productos.find(
        (producto) => producto.id === idProducto
    );

    if (!producto) {
        return;
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
}

function renderizarCarrito() {

    carritoContainer.innerHTML = "";

    const carritoVacio = carrito.length === 0
        ? "El carrito está vacío."
        : "";

    mensajeCarrito.textContent = carritoVacio;

    carrito.forEach((producto) => {

        const {
            id,
            nombre,
            precio,
            cantidad
        } = producto;

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("producto-carrito");

        tarjeta.innerHTML = `
            <h3>${nombre}</h3>

            <p>Precio: $${precio}</p>

            <p>Cantidad: ${cantidad}</p>

            <p>Subtotal: $${precio * cantidad}</p>

            <button 
                class="btn-eliminar"
                data-id="${id}">
                Eliminar
            </button>
        `;

        carritoContainer.appendChild(tarjeta);
    });
}


function eliminarDelCarrito(idProducto) {

    carrito = carrito.filter(
        (producto) => producto.id !== idProducto
    );

    guardarCarrito();

    renderizarCarrito();
}


productosContainer.addEventListener(
    "click",
    (event) => {

        if (event.target.classList.contains("btn-agregar")) {

            const id = Number(
                event.target.dataset.id
            );

            agregarAlCarrito(id);
        }
    }
);


carritoContainer.addEventListener(
    "click",
    (event) => {

        if (event.target.classList.contains("btn-eliminar")) {

            const id = Number(
                event.target.dataset.id
            );

            eliminarDelCarrito(id);
        }
    }
);


botonVaciarCarrito.addEventListener(
    "click",
    () => {

        carrito = [];

        localStorage.removeItem("carrito");

        renderizarCarrito();
    }
);


renderizarProductos();

renderizarCarrito();
