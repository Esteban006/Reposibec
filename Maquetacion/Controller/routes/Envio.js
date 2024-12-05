document.getElementById('btn-proceed-to-payment').addEventListener('click', function () {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de proceder al pago.');
    } else {
        window.location.href = "Maquetacion/View/Envio.html";
    }
});
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    const paymentStatus = document.getElementById('payment-status');
    
    // Simulación de validación
    paymentStatus.innerHTML = '<p class="text-info">Procesando el pago...</p>';
    setTimeout(() => {
        paymentStatus.innerHTML = '<p class="text-success">¡Pago realizado con éxito! Gracias por tu compra.</p>';
    }, 2000);
});