const productos = [
    {
        id: 1,
        nombre: "Taza silvestre",
        precio: 18000,
        categoria: "Tazas"
    },

    {
        id: 2,
        nombre: "Bowl Cerámica",
        precio: 45000,
        categoria: "bowls"
    },

    {
        id: 3,
        nombre: "Plato Artesanal",
        precio: 30000,
        categoria: "platos"
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");

const formulario = document.querySelector("#form-producto");

const inputNombre = document.querySelector("#nombre");

const inputPrecio = document.querySelector("#precio");

const inputCategoria = document.querySelector("#categoria");

const mensaje = document.querySelector("#mensaje");

const buscador = document.querySelector("#buscador");

function renderizarProductos(listaProductos) {
    contenedorProductos.innerHTML = "";

    listaProductos.forEach(producto => {
        contenedorProductos.innerHTML += `
        <div class="producto">
        <h3>${producto.nombre}</3>

        <p>Categoría: ${producto.categoria}</p>

        <p>
            Precio: $${producto.precio.toLocaleString("es-Ar")}
        </p>

        <button class ="btn-eliminar" data-id="${producto.id}">
            Eliminar
        </button>
        </div>
        `;
    });
}

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();

    const nuevoProducto = {
        id: Date.now(),
        nombre: inputNombre.value,
        precio: Number(inputPrecio.value),
        categoria: inputCategoria.value 
    };

    productos.push(nuevoProducto);
    renderizarProductos(productos);
    formulario.reset();

    mensaje.textContent = "Producto agregado correctamente";
    mensaje.className = "mensaje-exito";
});

contenedorProductos.addEventListener("click", (event)=>{
    if(event.target.classList.contains("btn-eliminar")){
        const idProducto = Number(event.target.dataset.id);

        eliminarProducto(idProducto);
    }
});

function eliminarProducto(id){
    const indice = productos.findIndex(producto => producto.id === id);

    if(indice !== 1){
        productos.splice(indice, 1);
    }

    renderizarProductos(productos);

    mensaje.textContent = "Producto eliminado";
    mensaje.className = "mensaje-eliminado";
}

buscador.addEventListener("input", ()=>{
    const textoBuscado = buscador.value.toLowerCase();

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(textoBuscado)
    );

    renderizarProductos(productosFiltrados);
});

