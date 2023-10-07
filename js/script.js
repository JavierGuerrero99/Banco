function redirigir(destino) {
    window.location.href = destino; // Utilizar el argumento como destino de redirección
}

const botones = document.querySelectorAll('#boton');


botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const destino = boton.getAttribute('data-url');
        redirigir(destino);
    })
})