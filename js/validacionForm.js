function validarFormulario(event) {
  event.preventDefault();

  // Obtener valores
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  var mensaje = document.getElementById("mensaje").value;

  let esValido = true;

  // Validación del nombre (solo letras)
  const regexNombre = /^[a-zA-Z\s]+$/; // regex significa expresion regular
  if (!regexNombre.test(nombre)) {
    // El método .test() evalúa si el valor de nombre coincide con la expresión regular regexNombre.
    //.test(nombre) devuelve true (el nombre es válido), entonces !true se convierte en false, por lo que no entraría en el if.
    document.getElementById("errorNombre").style.display = "block";

    esValido = false;
    console.log(esValido);
  } else {
    document.getElementById("errorNombre").style.display = "none";
  }

  // Validación del correo (formato adecuado con @)
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regexEmail.test(email)) {
    document.getElementById("errorEmail").style.display = "block";
    esValido = false;
  } else {
    document.getElementById("errorEmail").style.display = "none";
  }

  // Validación del teléfono (solo números y 10 dígitos)
  const regexTelefono = /^\d{10}$/;
  if (!regexTelefono.test(telefono)) {
    document.getElementById("errorTelefono").style.display = "block";
    esValido = false;
  } else {
    document.getElementById("errorTelefono").style.display = "none";
  }

  // Validación del mensaje (no vacío)
  if (mensaje.trim() === "") {
    //trim elimina los espacios en blanco del inicio y final
    document.getElementById("errorMensaje").style.display = "block";
    esValido = false;
  } else {
    document.getElementById("errorMensaje").style.display = "none";
  }

  // Si todo es válido, mostrar los datos
  if (esValido) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
            <h3>Datos enviados:</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Correo electrónico:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
        `;
    resultado.style.display = "block";

    document.getElementById("btnOK").style.display = "inline-block";
  }
}

function resetearFormulario() {
  // Restablecer los campos del formulario
  document.getElementById("formularioContacto").reset();

  // Ocultar los errores y el resultado
  const errores = document.querySelectorAll(".error");
  errores.forEach((error) => (error.style.display = "none"));
  document.getElementById("resultado").style.display = "none";

  // Ocultar el botón OK
  document.getElementById("btnOK").style.display = "none";
}
