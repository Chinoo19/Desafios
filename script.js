
let nombreProducto = "Manzanas";
let precioUnitario = 50;
let cantidadDeseada;

cantidadDeseada = parseInt(prompt("Ingrese la cantidad de " + nombreProducto + " que desea comprar:"));

let costoTotal = precioUnitario * cantidadDeseada;

alert("El costo total de su compra de " + cantidadDeseada + " " + nombreProducto + " es de $" + costoTotal);

