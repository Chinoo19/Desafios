// Array de productos de tecnología
const productosTecnologia = [
    { nombre: "iPhone 13 Pro", precio: 536.92, categoria: "tecnologia" },
    { nombre: "iPad Pro", precio: 999.00, categoria: "tecnologia" },
    { nombre: "Apple Watch Series 7", precio: 399.00, categoria: "tecnologia" },
    { nombre: "MacBook Pro", precio: 1299.00, categoria: "tecnologia" }
];

// Array de productos de electrodomésticos
const productosElectrodomesticos = [
    { nombre: "Lavarropas", precio: 400.00, categoria: "electrodomesticos" },
    { nombre: "Pava eléctrica", precio: 30.00, categoria: "electrodomesticos" },
    { nombre: "Horno eléctrico", precio: 150.00, categoria: "electrodomesticos" },
    { nombre: "Ventilador", precio: 50.00, categoria: "electrodomesticos" },
    { nombre: "Aire acondicionado", precio: 300.00, categoria: "electrodomesticos" }
];

// Función para agregar productos al carrito
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

// Función para mostrar la categoría seleccionada
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

// Mostrar la categoría de tecnología por defecto
mostrarCategoria('tecnologia');

// Función para cambiar el precio del iPhone 13 al recargar la página
window.addEventListener('load', function() {
    const precioiPhone13 = document.querySelector('#tecnologia .product:nth-of-type(1) .price');
    if (precioiPhone13) {
        precioiPhone13.innerText = 'Precio unitario: $450.00';
        precioiPhone13.parentElement.querySelector('button').setAttribute('data-price', '450.00');
    }
});
