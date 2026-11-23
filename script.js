
/* =========================
   DREAMSITES - JAVASCRIPT
========================= */

// Animaciones al aparecer las secciones

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

const animatedElements = document.querySelectorAll(
    ".service-card, .project-card, .section-heading, .about-content, .contact-content"
);

animatedElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
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

/* ANIMACIONES AL HACER SCROLL */

const elementosAnimados = document.querySelectorAll(
    '.service-card, .project-card, .testimonial-card, .faq-item, .pricing-card, .about-content, .contact-content'
);

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15
});

elementosAnimados.forEach((elemento) => {
    elemento.classList.add('reveal');
    observador.observe(elemento);
});


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

        const message = *Materiales disponibles:*
${materials || "No especificados"}

*Logotipo:* ${logo || "No especificado"}
*Estilo visual:* ${style || "No especificado"}
*Fecha deseada:* ${deadline || "Sin fecha definida"}

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
        `;

        // Reemplaza este texto por el número comercial
        // autorizado y configurado con supervisión de un adulto.
        const phone = "573053155801";

        const whatsappURL =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    });
}
