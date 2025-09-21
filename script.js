// Espera a que el DOM (Document Object Model) se cargue completamente antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', function() {
    
    // Selecciona el enlace de "Cursos" que tiene un menú desplegable.
    // Usamos 'querySelector' para obtener el primer elemento que coincida con el selector.
    const cursosLink = document.querySelector('nav ul li.relative > a');
    
    // Selecciona el menú desplegable asociado al enlace de "Cursos".
    // Usamos 'nextElementSibling' para obtener el elemento hermano que sigue al enlace.
    const dropdownMenu = cursosLink.nextElementSibling;

    // Selecciona el botón para el menú de hamburguesa en móviles, si existe.
    // En este caso, no lo tenemos, pero es buena práctica prepararse para ello.
    const mobileMenuButton = document.querySelector('.mobile-menu-button');

    // Agrega un 'listener' de eventos para el clic en el enlace de "Cursos".
    cursosLink.addEventListener('click', function(event) {
        // Previene el comportamiento por defecto del enlace (navegar a otra página).
        event.preventDefault();

        // Alterna la clase 'hidden' en el menú desplegable.
        // Si tiene la clase 'hidden', la quita y el menú se hace visible.
        // Si no la tiene, la añade y el menú se oculta.
        dropdownMenu.classList.toggle('hidden');
    });

    // Cierra el menú desplegable si el usuario hace clic en cualquier lugar fuera de él.
    document.addEventListener('click', function(event) {
        // Comprueba si el clic no fue dentro del enlace de "Cursos" ni en el menú desplegable.
        // 'contains' verifica si un elemento está dentro de otro.
        if (!cursosLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
            // Si el menú desplegable está visible (no tiene la clase 'hidden').
            if (!dropdownMenu.classList.contains('hidden')) {
                // Añade la clase 'hidden' para ocultarlo.
                dropdownMenu.classList.add('hidden');
            }
        }
    });

    // Opcional: añade un listener para el botón del menú de hamburguesa
    // if (mobileMenuButton) {
    //     mobileMenuButton.addEventListener('click', function() {
    //         const nav = document.querySelector('nav');
    //         nav.classList.toggle('active');
    //     });
    // }
});
