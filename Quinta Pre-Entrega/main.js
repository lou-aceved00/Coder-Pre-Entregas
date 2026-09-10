class Producto {
  constructor(nombre, precio, categoria, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
  }

  vender(cantidad) {
    if (cantidad > 0 && cantidad <= this.stock) {
      this.stock = this.stock - cantidad;

      alert(
        "Venta realizada.\n" +
        "Producto: " + this.nombre +
        "\nStock restante: " + this.stock
      );

      console.log(
        "Venta realizada. Stock restante de " +
        this.nombre +
        ": " +
        this.stock
      );

    } else {
      alert("No hay stock suficiente o la cantidad es incorrecta.");
    }
  }
}


// OBJETOS

const producto1 = new Producto(
  "Remera",
  50000,
  "Indumentaria",
  10
);

const producto2 = new Producto(
  "Pantalón",
  40000,
  "Indumentaria",
  8
);

const producto3 = new Producto(
  "Zapatillas",
  150000,
  "Calzado",
  5
);


// ARRAY

const productos = [
  producto1,
  producto2,
  producto3
];


// MOSTRAR PRODUCTOS

function mostrarProductos(lista) {

  let mensaje = "LISTA DE PRODUCTOS\n\n";

  for (const producto of lista) {

    mensaje +=
      "Producto: " + producto.nombre +
      "\nPrecio: $" + producto.precio +
      "\nCategoría: " + producto.categoria +
      "\nStock: " + producto.stock +
      "\n\n";

  }

  alert(mensaje);
  console.log(mensaje);
}


// BUSCAR PRODUCTO

function buscarProducto(lista, nombreBuscado) {

  let encontrado = false;

  for (const producto of lista) {

    if (
      producto.nombre.toLowerCase() ===
      nombreBuscado.toLowerCase()
    ) {

      alert(
        "Producto encontrado:\n\n" +
        "Nombre: " + producto.nombre +
        "\nPrecio: $" + producto.precio +
        "\nStock: " + producto.stock
      );

      encontrado = true;
    }
  }

  if (!encontrado) {
    alert("Producto no encontrado.");
  }
}


// MENÚ

let opcion;

do {

  opcion = prompt(
    "GESTIÓN DE PRODUCTOS\n\n" +
    "1 - Mostrar productos\n" +
    "2 - Buscar producto\n" +
    "3 - Vender producto\n" +
    "0 - Salir\n\n" +
    "Ingrese una opción:"
  );


  switch (opcion) {

    case "1": {
      mostrarProductos(productos);
      break;
    }


    case "2": {

      const nombreBuscado = prompt(
        "Ingrese el nombre del producto:"
      );

      buscarProducto(
        productos,
        nombreBuscado
      );

      break;
    }


    case "3": {

      const nombreVenta = prompt(
        "Ingrese el producto que desea vender:"
      );

      const cantidadVenta = Number(
        prompt("Ingrese la cantidad:")
      );

      let productoEncontrado = false;


      for (const producto of productos) {

        if (
          producto.nombre.toLowerCase() ===
          nombreVenta.toLowerCase()
        ) {

          producto.vender(cantidadVenta);

          productoEncontrado = true;
        }
      }


      if (!productoEncontrado) {
        alert("Producto no encontrado.");
      }

      break;
    }


    case "0": {

      alert(
        "Gracias por utilizar el simulador."
      );

      break;
    }


    default: {

      alert(
        "Opción inválida. Ingrese 1, 2, 3 o 0."
      );

    }
  }


} while (opcion !== "0");