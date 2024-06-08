document.addEventListener('DOMContentLoaded', () => {
    
    const productosTecnologiaActualizados = [
      { nombre: "iPhone 14 Pro", precio: 149999, categoria: "tecnologia", imagen: "https://example.com/iphone14pro.jpg" },
      { nombre: "Samsung Galaxy S23 Ultra", precio: 129999, categoria: "tecnologia", imagen: "https://example.com/galaxys23ultra.jpg" },
      { nombre: "MacBook Pro 14", precio: 259999, categoria: "tecnologia", imagen: "https://example.com/macbookpro14.jpg" },
      { nombre: "Smart TV 55\" OLED", precio: 109999, categoria: "tecnologia", imagen: "https://example.com/smarttv55oled.jpg" },
      { nombre: "Tablet", precio: 69999, categoria: "tecnologia", imagen: "https://example.com/tablet.jpg" },
      { nombre: "Cámara Digital", precio: 39999, categoria: "tecnologia", imagen: "https://example.com/camera.jpg" },
      { nombre: "Smartwatch", precio: 19999, categoria: "tecnologia", imagen: "https://example.com/smartwatch.jpg" },
      { nombre: "Auriculares Bluetooth", precio: 9999, categoria: "tecnologia", imagen: "https://example.com/headphones.jpg" },
      { nombre: "Consola de Videojuegos", precio: 89999, categoria: "tecnologia", imagen: "https://example.com/console.jpg" }
    ];
  
    const productosElectrodomesticosActualizados = [
      { nombre: "Lavarropas 12kg", precio: 59999, categoria: "electrodomesticos", imagen: "https://example.com/lavarropas12kg.jpg" },
      { nombre: "Heladera No Frost", precio: 79999, categoria: "electrodomesticos", imagen: "https://example.com/heladeranofrost.jpg" },
      { nombre: "Aire acondicionado Split", precio: 49999, categoria: "electrodomesticos", imagen: "https://example.com/aireacondicionadosplit.jpg" },
      { nombre: "Microondas Inox", precio: 24999, categoria: "electrodomesticos", imagen: "https://example.com/microondasinox.jpg" },
      { nombre: "Licuadora", precio: 9999, categoria: "electrodomesticos", imagen: "https://example.com/licuadora.jpg" },
      { nombre: "Cafetera", precio: 14999, categoria: "electrodomesticos", imagen: "https://example.com/cafetera.jpg" },
      { nombre: "Horno Eléctrico", precio: 19999, categoria: "electrodomesticos", imagen: "https://example.com/horno.jpg" },
      { nombre: "Extractor de Jugos", precio: 14999, categoria: "electrodomesticos", imagen: "https://example.com/extractor.jpg" },
      { nombre: "Plancha a Vapor", precio: 7999, categoria: "electrodomesticos", imagen: "https://example.com/plancha.jpg" }
    ];
  
    function agregarProductos(productos, categoriaId) {
      const categoria = document.getElementById(categoriaId);
      categoria.innerHTML = ''; // Limpiar productos anteriores
      productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('product');
        productoDiv.innerHTML = `
          <p>${producto.nombre}</p>
          <p class="price">Precio unitario: $${producto.precio.toLocaleString()}</p>
          <button onclick="agregarAlCarrito('${producto.nombre}', '${producto.imagen}', ${producto.precio})" data-price="${producto.precio}">Agregar al carrito</button>
        `;
        categoria.appendChild(productoDiv);
      });
    }
  
    agregarProductos(productosTecnologiaActualizados, 'tecnologia');
    agregarProductos(productosElectrodomesticosActualizados, 'electrodomesticos');
  
    window.agregarAlCarrito = function(productoNombre, imagen, precio) {
      alert(`${productoNombre} ha sido agregado al carrito.`);

      const imgElement = document.createElement('img');
      imgElement.src = imagen;
      imgElement.alt = productoNombre;
     
      const btnCarrito = event.target;
      // Limpiar el contenido del botón
      btnCarrito.innerHTML = '';
      // Agregar la imagen al botón
      btnCarrito.appendChild(imgElement);

      const precioElement = document.createElement('h3');
      precioElement.textContent = `Precio: $${precio.toLocaleString()}`;

      btnCarrito.appendChild(precioElement);
    };
  
   
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const categoryId = event.target.getAttribute('href').substring(1);
        document.querySelectorAll('.product-category').forEach(category => {
          category.classList.remove('active');
        });
        document.getElementById(categoryId).classList.add('active');
      });
    });
  
  
 
    const btnCarrito = document.createElement('button');
    
    btnCarrito.id = 'btnCarrito';
   
    btnCarrito.innerHTML = 'Agregar al carrito';
  
    btnCarrito.addEventListener('click', () => {
    
      const mensajeAgregado = document.createElement('h3');
      mensajeAgregado.innerText = 'Agregado';
    
      btnCarrito.appendChild(mensajeAgregado);
    });
  

    document.body.appendChild(btnCarrito);
  
  });
  
