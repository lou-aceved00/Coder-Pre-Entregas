// PRE-ENTREGA 6
// SIMULADOR DE GESTIÓN DE PRODUCTOS

class Producto {

  constructor(id, nombre, precio, categoria, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
  }

  vender(cantidad) {

    if (cantidad > 0 && cantidad <= this.stock) {

      this.stock = this.stock - cantidad;

      alert(
        "Venta realizada.\n\n" +
        "Producto: " + this.nombre +
        "\nCantidad vendida: " + cantidad +
        "\nStock restante: " + this.stock
      );

      console.log(
        "Venta realizada - " +
        this.nombre +
        " - Stock restante: " +
        this.stock
      );

    } else {

      alert(
        "No hay stock suficiente o la cantidad ingresada es incorrecta."
      );

    }
  }
}

const producto1 = new Producto(
  1,
  "Remera",
  50000,
  "Indumentaria",
  10
);

const producto2 = new Producto(
  2,
  "Pantalón",
  40000,
  "Indumentaria",
  8
);

const producto3 = new Producto(
  3,
  "Zapatillas",
  150000,
  "Calzado",
  5
);

const producto4 = new Producto(
  4,
  "Campera",
  120000,
  "Indumentaria",
  0
);

const producto5 = new Producto(
  5,
  "Gorra",
  25000,
  "Accesorios",
  15
);

const productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5
];

function mostrarProductos(lista) {

  let mensaje = "LISTA DE PRODUCTOS\n\n";

  for (const producto of lista) {

    mensaje +=
      "ID: " + producto.id +
      "\nProducto: " + producto.nombre +
      "\nPrecio: $" + producto.precio +
      "\nCategoría: " + producto.categoria +
      "\nStock: " + producto.stock +
      "\n\n";

  }

  alert(mensaje);

  console.log("LISTA DE PRODUCTOS");

  for (const producto of lista) {
    console.log(producto);
  }
}


function buscarProducto(lista, nombreBuscado) {

  const productoEncontrado = lista.find(
    producto =>
      producto.nombre.toLowerCase() ===
      nombreBuscado.toLowerCase()
  );


  if (productoEncontrado) {

    alert(
      "PRODUCTO ENCONTRADO\n\n" +
      "Nombre: " + productoEncontrado.nombre +
      "\nPrecio: $" + productoEncontrado.precio +
      "\nCategoría: " + productoEncontrado.categoria +
      "\nStock: " + productoEncontrado.stock
    );

    console.log(
      "Producto encontrado:",
      productoEncontrado
    );

  } else {

    alert("Producto no encontrado.");

    console.log("Producto no encontrado.");

  }
}


function mostrarDisponibles(lista) {

  const disponibles = lista.filter(
    producto => producto.stock > 0
  );


  let mensaje = "PRODUCTOS CON STOCK\n\n";


  for (const producto of disponibles) {

    mensaje +=
      producto.nombre +
      " - Stock: " +
      producto.stock +
      "\n";

  }


  alert(mensaje);

  console.log(
    "Productos disponibles:",
    disponibles
  );


  return disponibles;
}

function filtrarPorPrecio(lista, precioMaximo) {

  const productosFiltrados = lista.filter(
    producto => producto.precio <= precioMaximo
  );


  if (productosFiltrados.length > 0) {

    let mensaje =
      "PRODUCTOS HASTA $" +
      precioMaximo +
      "\n\n";


    for (const producto of productosFiltrados) {

      mensaje +=
        producto.nombre +
        " - $" +
        producto.precio +
        "\n";

    }


    alert(mensaje);

    console.log(
      "Productos filtrados por precio:",
      productosFiltrados
    );

  } else {

    alert(
      "No se encontraron productos dentro de ese precio."
    );

    console.log(
      "No se encontraron productos dentro del precio indicado."
    );

  }


  return productosFiltrados;
}


function calcularValorInventario(lista) {

  const total = lista.reduce(
    (acumulador, producto) =>
      acumulador +
      producto.precio * producto.stock,
    0
  );


  alert(
    "El valor total del inventario es: $" +
    total
  );


  console.log(
    "Valor total del inventario: $" +
    total
  );


  return total;
}


function venderProducto(
  lista,
  nombreBuscado,
  cantidad
) {

  const productoEncontrado = lista.find(
    producto =>
      producto.nombre.toLowerCase() ===
      nombreBuscado.toLowerCase()
  );


  if (productoEncontrado) {

    productoEncontrado.vender(cantidad);

  } else {

    alert("Producto no encontrado.");

    console.log("Producto no encontrado.");

  }
}

let opcion;


do {

  opcion = prompt(
    "GESTIÓN DE PRODUCTOS\n\n" +
    "1 - Mostrar todos los productos\n" +
    "2 - Buscar producto\n" +
    "3 - Mostrar productos con stock\n" +
    "4 - Filtrar productos por precio\n" +
    "5 - Calcular valor del inventario\n" +
    "6 - Vender producto\n" +
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

      mostrarDisponibles(productos);

      break;
    }

    case "4": {

      const precioMaximo = Number(
        prompt(
          "Ingrese el precio máximo que desea pagar:"
        )
      );

      if (precioMaximo > 0) {

        filtrarPorPrecio(
          productos,
          precioMaximo
        );

      } else {

        alert(
          "Ingrese un precio válido."
        );

      }

      break;
    }

    case "5": {

      calcularValorInventario(
        productos
      );

      break;
    }

    case "6": {

      const nombreVenta = prompt(
        "Ingrese el nombre del producto que desea vender:"
      );

      const cantidadVenta = Number(
        prompt(
          "Ingrese la cantidad que desea vender:"
        )
      );

      if (cantidadVenta > 0) {

        venderProducto(
          productos,
          nombreVenta,
          cantidadVenta
        );

      } else {

        alert(
          "Ingrese una cantidad válida."
        );

      }

      break;
    }

    case "0": {

      alert(
        "Gracias por utilizar el simulador."
      );

      console.log(
        "Simulador finalizado."
      );

      break;
    }

    default: {

      alert(
        "Opción inválida. Ingrese una opción del 0 al 6."
      );

    }
  }

} while (opcion !== "0");