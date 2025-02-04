document.addEventListener('DOMContentLoaded', inicio);

function inicio() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const password = document.getElementById('password').value.trim();
        
        document.getElementById('nombreError').style.display = 'none';
        document.getElementById('passwordError').style.display = 'none';

        let isValid = true;

        const nombreRegex = /^[A-Za-z\s]+$/;
        if (nombre === "" || !nombreRegex.test(nombre)) {
            document.getElementById('nombreError').style.display = 'block';
            document.getElementById('nombreError').textContent = 'El nombre debe contener solo letras y no puede estar vacío.';
            isValid = false;
        }

        if (password === "" || password.length < 8) {
            document.getElementById('passwordError').style.display = 'block';
            document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 8 caracteres.';
            isValid = false;
        }

        if (isValid) {
            
            const usuarioValido = "usuario"; 
            const passwordValido = "123456789"; 

            if (nombre === usuarioValido && password === passwordValido) {
                alert('Inicio de sesión exitoso');
                window.location.href = 'index.html'; 
            } else {
                alert('Nombre de usuario o contraseña incorrectos');
            }
        }
    });
}
