
/* =========================
   DREAMSITES - JAVASCRIPT
========================= */

/* =========================
   ANIMACIONES AL HACER SCROLL
========================= */

const elementosAnimados = document.querySelectorAll(
    ".service-card, .project-card, .section-heading, .about-content, .contact-content, .testimonial-card, .faq-item, .pricing-card"
);

const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observer.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.12
});

elementosAnimados.forEach((elemento) => {
    elemento.classList.add("reveal");
    observador.observe(elemento);
});

// Año automático del footer

const footerText = document.querySelector(".footer-content p");

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} DreamSites. Todos los derechos reservados.`;
}


// Efecto de movimiento en tarjetas

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

    });

});


// Consola de bienvenida

console.log(
    "%cDreamSites",
    "font-size: 30px; font-weight: bold; color: #8175FF;"
);

console.log("Digital experiences. Built with creativity.");

/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("active");

        menuButton.classList.toggle("active", isOpen);
        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

    });

    // Cerrar al seleccionar un enlace

    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuButton.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Abrir menú");
        });

    });

}

/* =========================
   DREAMSITES - CONTACT FORM
========================= */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("client-name").value.trim();
        const email = document.getElementById("client-email").value.trim();
        const type = document.getElementById("project-type").value;
        const message = document.getElementById("client-message").value.trim();

        // Reemplazar por el número comercial autorizado
        const phone = "573053155801";

        const whatsappMessage =
            `¡Hola DreamSites!\n\n` +
            `Nombre: ${name}\n` +
            `Correo: ${email}\n` +
            `Servicio: ${type}\n\n` +
            `Mi proyecto:\n${message}`;

        const url =
            `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url, "_blank");

    });

}


// FORMULARIO DE NUEVOS PROYECTOS

const projectForm = document.getElementById("project-form");

if (projectForm) {
    projectForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const client = document.getElementById("project-client").value;
        const business = document.getElementById("project-business").value;
        const email = document.getElementById("project-email").value;
        const service = document.getElementById("project-service").value;
        const packageName = document.getElementById("project-package").value;
        const colors = document.getElementById("project-colors").value;
        const description = document.getElementById("project-description").value;
        const sections = document.getElementById("project-sections").value;
        const references = document.getElementById("project-references").value;
        const materials = document.getElementById("project-materials").value;
        const logo = document.getElementById("project-logo").value;
        const style = document.getElementById("project-style").value;
        const deadline = document.getElementById("project-deadline").value;

        const message = `
*NUEVA SOLICITUD - DREAMSITES*

*Cliente:* ${client}
*Negocio:* ${business || "No especificado"}
*Correo:* ${email}
*Servicio:* ${service}
*Paquete:* ${packageName}
*Colores:* ${colors || "No especificados"}

*Descripción:*
${description}

*Secciones necesarias:*
${sections || "No especificadas"}

*Referencias:*
${references || "No proporcionadas"}

*Materiales disponibles:*
${materials || "No especificados"}

*Logotipo:* ${logo || "No especificado"}
*Estilo visual:* ${style || "No especificado"}
*Fecha deseada:* ${deadline || "Sin fecha definida"}
        `;

        const phone = "NUMERO_COMERCIAL_AUTORIZADO";

        const whatsappURL =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    });
}

/* =====================================
   SEGUIMIENTO DEL CURSOR
===================================== */

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.addEventListener("pointermove", (event) => {
        document.documentElement.style.setProperty(
            "--cursor-x",
            `${event.clientX}px`
        );

        document.documentElement.style.setProperty(
            "--cursor-y",
            `${event.clientY}px`
        );
    });
}
/* Brillo verde para el botón de WhatsApp */
const whatsappButton = document.querySelector(".whatsapp-float");

if (whatsappButton) {
    whatsappButton.addEventListener("pointerenter", () => {
        document.body.classList.add("whatsapp-hover");
    });

    whatsappButton.addEventListener("pointerleave", () => {
        document.body.classList.remove("whatsapp-hover");
    });
}
