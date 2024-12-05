// Función para registrar un nuevo usuario
function register() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    if (username === '' || email === '' || password === '') {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return;
    }

    // Obtener usuarios guardados en localStorage o crear un arreglo vacío
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si el usuario ya existe
    const usuarioExistente = usuariosRegistrados.find(usuario => usuario.email === email);
    if (usuarioExistente) {
        alert('Este correo ya está registrado. Intente con otro.');
        return;
    }

    // Crear un objeto con la información del usuario
    const nuevoUsuario = {
        nombre: username,
        correo: email,
        contrasena: password
    };

    // Añadir el nuevo usuario al arreglo y guardarlo en localStorage
    usuariosRegistrados.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';

    // Limpiar los campos del formulario
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

// Añadir un evento click al botón de registro
document.getElementById('registerButton').addEventListener('click', register);
