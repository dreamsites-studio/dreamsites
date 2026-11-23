
// MENÚ PARA MÓVILES

const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuButton.textContent = nav.classList.contains("active")
        ? "✕"
        : "☰";
});

// CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuButton.textContent = "☰";
    });
});

// AÑO AUTOMÁTICO EN EL FOOTER

document.getElementById("year").textContent =
    new Date().getFullYear();
