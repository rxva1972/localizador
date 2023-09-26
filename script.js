function mostrarHora() {
    const fecha = new Date();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    const reloj = document.getElementById('clock');
    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

function mostrarUbicacion() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitud = position.coords.latitude;
            const longitud = position.coords.longitude;

            const ubicacion = document.getElementById('location');
            ubicacion.textContent = `Latitud: ${latitud}, Longitud: ${longitud}`;
        });
    } else {
        alert('La geolocalización no está disponible en este navegador.');
    }
}

mostrarHora();
mostrarUbicacion();
setInterval(mostrarHora, 1000);
