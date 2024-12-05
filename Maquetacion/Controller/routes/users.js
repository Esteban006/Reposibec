// Función para iniciar sesión
function users() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Obtener usuarios guardados en localStorage
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar al usuario por correo y contraseña
    const usuario = usuariosRegistrados.find(usuario => usuario.correo === email && usuario.contrasena === password);

    if (usuario) {
        // Si se encuentra el usuario, redirigir a la página de bienvenida o dashboard
        alert('Inicio de sesión exitoso. Bienvenido, ' + usuario.nombre + '!');
        window.location.href = '/Maquetacion/View/inicio(boostrap).html'; // Aquí rediriges a la página deseada
    } else {
        // Mostrar mensaje de error si no se encuentra el usuario
        errorMessage.style.display = 'block';
    }
}

// Función para redirigir al registro
function register() {
    window.location.href = '/Maquetacion/View/Registro.html'; // Cambia 'register.html' por la ruta de tu archivo de registro
}

// Añadir eventos a los botones
document.getElementById('loginButton').addEventListener('click', users);
document.getElementById('registerButton').addEventListener('click', register);
