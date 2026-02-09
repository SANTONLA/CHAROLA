// =========================
// ANIMACIONES SUAVES AL SCROLL
// =========================

const elementos = document.querySelectorAll("section, .hero-content");

const mostrarElemento = (entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }
    });
};

const observer = new IntersectionObserver(mostrarElemento, {
    threshold: 0.2
});

elementos.forEach(elemento => {
    observer.observe(elemento);
});
