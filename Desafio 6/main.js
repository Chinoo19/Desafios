
const productosTecnologia = [
    { nombre: "iPhone 13 Pro", precio: 536.92, categoria: "tecnologia" },
    { nombre: "iPad Pro", precio: 999.00, categoria: "tecnologia" },
    { nombre: "Apple Watch Series 7", precio: 399.00, categoria: "tecnologia" },
    { nombre: "MacBook Pro", precio: 1299.00, categoria: "tecnologia" }
];


const productosElectrodomesticos = [
    { nombre: "Lavarropas", precio: 400.00, categoria: "electrodomesticos" },
    { nombre: "Pava eléctrica", precio: 30.00, categoria: "electrodomesticos" },
    { nombre: "Horno eléctrico", precio: 150.00, categoria: "electrodomesticos" },
    { nombre: "Ventilador", precio: 50.00, categoria: "electrodomesticos" },
    { nombre: "Aire acondicionado", precio: 300.00, categoria: "electrodomesticos" }
];


function agregarAlCarrito(producto) {
    const edad = parseInt(prompt("Por favor, introduce tu edad:"));

    if (isNaN(edad)) {
        Swal.fire({
            title: 'Error',
            text: 'Debes introducir un número válido para la edad.',
            icon: 'error'
        });
        return;
    }

    if (edad < 18) {
        Swal.fire({
            title: 'Lo siento',
            text: 'Debes tener al menos 18 años para realizar una compra.',
            icon: 'error'
        });
        return;
    }

    Swal.fire({
        title: 'Lo siento',
        text: 'Actualmente no hay productos disponibles en stock.',
        icon: 'error'
    });
}


function obtenerPrecioUnitario(producto) {
    const productos = [...productosTecnologia, ...productosElectrodomesticos];
    const productoEncontrado = productos.find(p => p.nombre === producto);
    return productoEncontrado ? productoEncontrado.precio : 0;
}


function mostrarCategoria(categoria) {
    const secciones = document.querySelectorAll('.product-category');
    secciones.forEach(seccion => {
        if (seccion.id === categoria) {
            seccion.classList.add('active');
        } else {
            seccion.classList.remove('active');
        }
    });
}


mostrarCategoria('tecnologia');
