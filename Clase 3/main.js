// Mensaje de alerta para usuario y contraseña válidos
alert("Bienvenido a nuestra tienda en línea.\nTu nombre de usuario y contraseña son válidos.");

// Solicitar la edad del usuario
var edad = parseInt(prompt("Por favor, introduce tu edad:"));
if (edad < 18) {
    alert("Lo siento, debes tener al menos 18 años para realizar una compra.");
} else {
    // Solicitar la cantidad deseada
    var cantidadDeseada = parseInt(prompt("Introduce la cantidad deseada:"));

    // Verificar si la cantidad es válida
    if (cantidadDeseada < 1) {
        alert("Lo siento, debes ingresar al menos una cantidad válida para realizar una compra.");
    } else {
        // Aplicar descuento si se compra al menos un producto
        var descuento = 0.1; // 10% de descuento
        
        // Precio unitario del iPhone 13 Pro
        var precioUnitario = 536.92;

        // Calcular costo total de la compra
        var costoTotal = precioUnitario * cantidadDeseada * (1 - descuento);

        // Construir mensaje de compra exitosa
        var mensaje = "Has comprado " + cantidadDeseada + " iPhone 13 Pro(s) por un total de $" + costoTotal.toFixed(2) + "\n¡Felicidades! Se te ha aplicado un descuento del 10% por comprar al menos un producto.";
        
        // Mostrar mensaje de compra exitosa
        alert(mensaje);
    }
}
