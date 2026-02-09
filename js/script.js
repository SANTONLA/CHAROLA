// =========================
// ANIMACIONES SUAVES AL SCROLL
// =========================

// Seleccionamos todas las secciones y el contenido del hero
const elementos = document.querySelectorAll("section, .hero-content");

// Función para mostrar el elemento cuando entra en la pantalla
const mostrarElemento = (entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }
    });
};

// Observer con threshold para que aparezca cuando el 20% del elemento esté visible
const observer = new IntersectionObserver(mostrarElemento, {
    threshold: 0.2
});

// Observamos cada elemento
elementos.forEach(elemento => {
    observer.observe(elemento);
});

