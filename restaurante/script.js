
/* =========================
   LUMIÈRE RESERVATIONS
========================= */

const reservationForm = document.getElementById("reservation-form");

if (reservationForm) {

    const dateInput = document.getElementById("reservation-date");

    // Evitar fechas anteriores a hoy
    const today = new Date();
    const localToday = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    dateInput.min = localToday;

    reservationForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("reservation-name").value.trim();
        const date = dateInput.value;
        const time = document.getElementById("reservation-time").value;
        const guests = document.getElementById("reservation-guests").value;

        if (date < localToday) {
            alert("Selecciona una fecha válida.");
            return;
        }

        const message =
            `Hola, quisiera consultar una reserva en LUMIÈRE.\n\n` +
            `Nombre: ${name}\n` +
            `Fecha: ${date}\n` +
            `Hora: ${time}\n` +
            `Personas: ${guests}\n\n` +
            `Entiendo que esta es una solicitud de demostración.`;

        // Número ficticio: reemplazar solo con autorización
        const phone = "57XXXXXXXXXX";

        const url =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

}
