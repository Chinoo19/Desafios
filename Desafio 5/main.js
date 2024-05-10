// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    const edad = parseInt(prompt("Por favor, introduce tu edad:"));

    if (edad < 18) {
        Swal.fire({
            title: 'Lo siento',
            text: 'Debes tener al menos 18 años para realizar una compra.',
            icon: 'error'
        });
        return;
    }

    Swal.fire({
        title: 'Ingrese la cantidad deseada',
        input: 'number',
        inputAttributes: {
            min: 1
        },
        showCancelButton: true,
        confirmButtonText: 'Agregar al carrito',
        showLoaderOnConfirm: true,
        preConfirm: (cantidad) => {
            const descuento = 0.1; // 10% de descuento por primera compra
            const precioUnitario = obtenerPrecioUnitario(producto);
            const costoTotal = precioUnitario * cantidad * (1 - descuento);
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(costoTotal.toFixed(2));
                }, 2000);
            });
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Compra exitosa!',
                text: `Total a pagar: $${result.value}`,
                icon: 'success'
            });
        }
    });
}

// Función para obtener el precio unitario del producto
function obtenerPrecioUnitario(producto) {
    // Simulación de obtener el precio unitario del producto
    switch (producto) {
        case 'iPhone 13 Pro':
            return 536.92;
        case 'iPad Pro':
            return 999.00;
        case 'Apple Watch Series 7':
            return 399.00;
        case 'MacBook Pro':
            return 1299.00;
        default:
            return 0;
    }
}
