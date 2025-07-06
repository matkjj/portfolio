const menuHamburguesa = document.getElementById('menu-hamburguesa');
const menuNavegacion = document.getElementById('menu-navegacion');

menuHamburguesa.addEventListener('click', function() {
    menuNavegacion.classList.toggle('activo');
});

const enlacesNavegacion = document.querySelectorAll('.menu-navegacion a');
enlacesNavegacion.forEach(link => {
    link.addEventListener('click', function() {
        menuNavegacion.classList.remove('activo');
    });
});

const enlaces = document.querySelectorAll('a[href^="#"]');
enlaces.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const idSeccionDestino = this.getAttribute('href');
        const seccionDestino = document.querySelector(idSeccionDestino);
        if (seccionDestino) {
            seccionDestino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const barraNavegacion = document.querySelector('.barra-navegacion');
    if (window.scrollY > 50) {
        barraNavegacion.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        barraNavegacion.style.background = 'white';
    }
});

const formularioContacto = document.querySelector('.formulario-contacto');
formularioContacto.addEventListener('submit', function(e) {
    e.preventDefault();
    const botonEnviar = formularioContacto.querySelector('.boton');
    const textoOriginal = botonEnviar.textContent;
    botonEnviar.textContent = 'Enviando...';
    setTimeout(function() {
        alert('¡Mensaje enviado! Te contactaré pronto.');
        formularioContacto.reset();
        botonEnviar.textContent = textoOriginal;
    }, 1500);
});

window.addEventListener('scroll', function() {
    const tarjetas = document.querySelectorAll('.tarjeta-interes, .tarjeta-proyecto');
    tarjetas.forEach(card => {
        const tarjetaTop = card.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;
        if (tarjetaTop < alturaVentana - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tarjetas = document.querySelectorAll('.tarjeta-interes, .tarjeta-proyecto');
    tarjetas.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
    });
});

    
