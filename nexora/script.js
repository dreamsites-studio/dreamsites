
/* =========================
   NEXORA - JAVASCRIPT
   DREAMSITES
========================= */

// ELEMENTOS

const cartButton = document.getElementById("cart-button");
const cartOverlay = document.getElementById("cart-overlay");
const closeCart = document.getElementById("close-cart");

const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

const searchInput = document.getElementById("product-search");
const productCards = document.querySelectorAll(".product-card");
const filterButtons = document.querySelectorAll(".filter-button");
const emptyMessage = document.getElementById("empty-message");

const checkoutButton = document.getElementById("checkout-button");


// CARRITO

let cart = [];


// FORMATO DE PRECIOS

function formatPrice(price) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(price);
}


// ABRIR Y CERRAR CARRITO

cartButton.addEventListener("click", () => {
    cartOverlay.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cartOverlay.classList.remove("active");
});

cartOverlay.addEventListener("click", (event) => {

    if (event.target === cartOverlay) {
        cartOverlay.classList.remove("active");
    }

});


// AÑADIR PRODUCTOS

document.querySelectorAll(".add-button").forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.product;
        const price = Number(button.dataset.price);

        const existingProduct = cart.find(item => item.name === name);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({
                name,
                price,
                quantity: 1
            });
        }

        updateCart();

        button.textContent = "¡Añadido! ✓";

        setTimeout(() => {
            button.textContent = "Añadir al carrito +";
        }, 1000);

    });

});


// ACTUALIZAR CARRITO

function updateCart() {

    cartItemsContainer.innerHTML = "";

    let total = 0;
    let quantityTotal = 0;

    cart.forEach((item, index) => {

        const subtotal = item.price * item.quantity;

        total += subtotal;
        quantityTotal += item.quantity;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        const details = document.createElement("div");

        const name = document.createElement("h4");
        name.textContent = `${item.name} × ${item.quantity}`;

        const price = document.createElement("p");
        price.textContent = formatPrice(subtotal);

        details.append(name, price);

        const removeButton = document.createElement("button");

        removeButton.className = "remove-item";
        removeButton.textContent = "Quitar";
        removeButton.setAttribute("aria-label", `Quitar ${item.name}`);

        removeButton.addEventListener("click", () => {
            cart.splice(index, 1);
            updateCart();
        });

        cartItem.append(details, removeButton);

        cartItemsContainer.appendChild(cartItem);

    });

    if (cart.length === 0) {
        const empty = document.createElement("p");
        empty.textContent = "Tu carrito está vacío.";
        empty.style.color = "#9299b2";
        empty.style.textAlign = "center";
        empty.style.padding = "30px 0";

        cartItemsContainer.appendChild(empty);
    }

    cartCount.textContent = quantityTotal;
    cartTotal.textContent = formatPrice(total);

}


// FILTROS DE CATEGORÍAS

let selectedCategory = "todos";

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(filter => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        filterProducts();

    });

});


// BUSCADOR

searchInput.addEventListener("input", filterProducts);


// FILTRAR PRODUCTOS

function filterProducts() {

    const searchTerm = searchInput.value.toLowerCase().trim();

    let visibleProducts = 0;

    productCards.forEach(card => {

        const name = card.dataset.name.toLowerCase();
        const category = card.dataset.category;

        const matchesSearch = name.includes(searchTerm);

        const matchesCategory =
            selectedCategory === "todos" ||
            category === selectedCategory;

        const visible = matchesSearch && matchesCategory;

        card.style.display = visible ? "" : "none";

        if (visible) {
            visibleProducts++;
        }

    });

    emptyMessage.style.display =
        visibleProducts === 0 ? "block" : "none";

}


// SIMULACIÓN DE COMPRA

checkoutButton.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Tu carrito está vacío. Añade algún producto primero.");
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    alert(
        "¡Gracias por visitar NEXORA!\n\n" +
        "Tu compra de demostración está lista.\n" +
        "Total: " + formatPrice(total) +
        "\n\nNo se realizó ningún pago."
    );

    cart = [];
    updateCart();

    cartOverlay.classList.remove("active");

});


// CONSOLA

console.log("%cNEXORA", "font-size: 30px; font-weight: bold; color: #7958ff;");
console.log("Next generation technology.");
