// Obtener el botón y el body
const botonModoOscuro = document.getElementById('botonModoOscuro');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Al hacer clic en el botón, activar o desactivar el modo oscuro
botonModoOscuro.addEventListener('click', () => {
    // Cambiar las clases para el modo oscuro
    body.classList.toggle('modo-oscuro');
    header.classList.toggle('modo-oscuro');
    footer.classList.toggle('modo-oscuro');
    
    // Cambiar el texto del botón
    if (body.classList.contains('modo-oscuro')) {
        botonModoOscuro.textContent = 'Desactivar Modo Oscuro';
    } else {
        botonModoOscuro.textContent = 'Activar Modo Oscuro';
    }
});