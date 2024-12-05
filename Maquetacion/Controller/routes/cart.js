document.addEventListener('DOMContentLoaded', function () {
    // Inicializar carrito desde localStorage o crear uno vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Función para actualizar la cantidad de productos en el carrito en la navegación
    function actualizarCantidadCarrito() {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
    }

    // Función para agregar un producto al carrito
    function agregarProductoAlCarrito(producto) {
        // Comprobar si el producto ya está en el carrito
        const productoExistente = carrito.find(item => item.nombre === producto.nombre);

        if (productoExistente) {
            // Si ya está en el carrito, aumentar la cantidad
            productoExistente.cantidad += 1;
        } else {
            // Si no está en el carrito, agregarlo con cantidad 1
            carrito.push({ ...producto, cantidad: 1 });
        }

        // Guardar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
        
        // Actualizar la cantidad de productos en el carrito
        actualizarCantidadCarrito();

        // Mostrar mensaje de éxito
        alert(`${producto.nombre} ha sido agregado al carrito.`);
    }

    // Event listener para los botones "Agregar al Carrito"
    const botonesAgregarCarrito = document.querySelectorAll('.btn-agregar-carrito');
    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', function () {
            // Obtener la información del producto
            const card = this.closest('.card');
            const nombre = card.querySelector('.card-title').textContent;
            const precio = parseFloat(card.querySelector('.card-text').getAttribute('data-precio'));

            // Crear objeto de producto
            const producto = {
                nombre: nombre,
                precio: precio
            };

            // Agregar el producto al carrito
            agregarProductoAlCarrito(producto);
        });
    });

    // Inicializar la cantidad del carrito al cargar la página
    actualizarCantidadCarrito();
});
