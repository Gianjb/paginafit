const menuLateral = document.getElementById('menuLateral');
const btnAbrir = document.getElementById('btnAbrir');
const btnCerrar = document.getElementById('btnCerrar');
const overlay = document.getElementById('overlay');

btnAbrir.addEventListener('click', () => {
    menuLateral.classList.add('activo');
    overlay.classList.add('activo');
});

const cerrarMenu = () => {
    menuLateral.classList.remove('activo');
    overlay.classList.remove('activo');
};

btnCerrar.addEventListener('click', cerrarMenu);
overlay.addEventListener('click', cerrarMenu);


const enlacesMenu = document.querySelectorAll('.menu-lateral nav ul li a');

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', cerrarMenu);
});



// --- ANIMACIONES AL HACER SCROLL ---
const observadorTitulos = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add('visible');

            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.2
});

const titulosParaAnimar = document.querySelectorAll('.animar-h2');

titulosParaAnimar.forEach(titulo => {
    observadorTitulos.observe(titulo);
});

const planesParaAnimar = document.querySelectorAll('.animar-plan');

planesParaAnimar.forEach(plan => {
    observadorTitulos.observe(plan);
});