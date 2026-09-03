//Simulador Gestor de Productos

let productos = ["Remera", "Bluza", "Pantalón", "Short"];


//Funciones 
function mostrarProductos(lista){
    console.log("----LISTA DE PRODUCTOS----");

    for (const producto of lista){
        console.log("Producto: "+ producto);
    }
}

const agregarProducto = (lista, productoNuevo) => {
    lista.push(productoNuevo);

    alert("Producto agregado correctamente!");
}

function buscarProducto(lista, productoBuscado) {

  if (lista.includes(productoBuscado)) {

    const posicion = lista.indexOf(productoBuscado);

    alert( "El producto " +productoBuscado +" se encuentra en la posición " +posicion);

  } else {

    alert("El producto no se encuentra en la lista.");

  }
}

function modificarProducto(lista, indice, nuevoProducto){

    if(indice>=0 && indice < lista.length){
        lista.splice(indice, 1, nuevoProducto);

        alert("Producto modificado correctamente.")
    }else{
        alert("El producto ingresado no es válido.");
    }
}

function eliminarProducto(lista) {

  if (lista.length > 0) {

    const productoEliminado = lista.pop();
    
    alert( "Se ha eliminado el elemento: " +productoEliminado);

  } else {

    alert("No hay productos para eliminar.");

  }
}

productos.unshift("Gorra");

// ---------------------
// PROGRAMA PRINCIPAL
// ---------------------

let opcion;

do {

  opcion = prompt(
    "GESTIÓN DE PRODUCTOS\n\n" +
    "1 - Mostrar productos\n" +
    "2 - Agregar producto\n" +
    "3 - Buscar producto\n" +
    "4 - Modificar producto\n" +
    "5 - Eliminar último producto\n" +
    "0 - Salir\n\n" +
    "Ingrese una opción:"
  );


  switch (opcion) {

case "1":
mostrarProductos(productos);
alert("La lista de productos fue mostrada en consola.");

break;

case "2":

const productoNuevo = prompt("Ingrese el nombre del producto que desea agregar:");

agregarProducto(productos,productoNuevo);

break;

case "3":

const productoBuscado = prompt("Ingrese el producto que desea buscar:");

buscarProducto(productos,productoBuscado);

break;

case "4":

mostrarProductos(productos);

const indiceModificar = Number(prompt( "Ingrese el índice del producto que desea modificar:"));

const nuevoProducto = prompt("Ingrese el nuevo nombre del producto:");

modificarProducto(productos,indiceModificar,nuevoProducto);

break;

case "5":

eliminarProducto(productos);

break;

case "0":

alert("Gracias por utilizar el simulador.");

break;


default:

alert("Opción inválida. Intente nuevamente.");

}

} while (opcion !== "0");