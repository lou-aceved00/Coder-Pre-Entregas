// SIMULADOR DE COMPRA

// Función 1: calcula el subtotal
function calcularSubtotal(precio, cantidad) {
  return precio * cantidad;
}

// Función 2: aplica descuento si corresponde
function aplicarDescuento(subtotal, tieneDescuento) {
  if (tieneDescuento === "S") {
    return subtotal * 0.90;
  } else {
    return subtotal;
  }
}

// Función 3: función flecha para mostrar resultado
const mostrarResultado = (mensaje, total) => {
  alert(mensaje + total);
  console.log(mensaje + total);
};


// PROGRAMA PRINCIPAL

let continuar = "S";

while (continuar === "S") {

  let precio = Number(prompt("Ingrese el precio del producto:"));

  let cantidad = Number(prompt("Ingrese la cantidad de productos:"));

  let tieneDescuento = prompt(
    "¿Tiene descuento del 10%? Ingrese S o N"
  ).toUpperCase();

  const subtotal = calcularSubtotal(precio, cantidad);

  const total = aplicarDescuento(subtotal, tieneDescuento);

  mostrarResultado(
    "El precio final de su compra es: $",
    total
  );

  continuar = prompt(
    "¿Desea realizar otra compra? Ingrese S o N"
  ).toUpperCase();
}