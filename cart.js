document.addEventListener("DOMContentLoaded", function () {
    // Initialize cart from localStorage
    let cart = loadCart();

    function updateCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function loadCart() {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            return JSON.parse(savedCart);
        }
        return [];
    }

    function addToCart(productName, productPrice) {
        cart.push({ name: productName, price: productPrice });
        updateCart();
        alert(`${productName} adaugat in cos!`);
    }

    function removeFromCart(index) {
        // Remove item at specific index
        cart.splice(index, 1);
        updateCart();
        // Refresh the cart display
        displayCart();
    }

    // Function to display cart items
    function displayCart() {
        if (document.getElementById("cart-items")) {
            const cartContainer = document.getElementById("cart-items");
            cartContainer.innerHTML = ''; // Clear current display
            let total = 0;

            cart.forEach((item, index) => {
                const div = document.createElement("div");
                div.className = "cart-item";
                div.innerHTML = `
                    <p>${item.name} - ${item.price} RON</p>
                    <button class="delete-btn" data-index="${index}">Sterge</button>
                `;
                cartContainer.appendChild(div);
                total += item.price;
            });

            // Add event listeners to delete buttons
            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', function () {
                    const index = parseInt(this.getAttribute('data-index'));
                    removeFromCart(index);
                });
            });

            document.getElementById("cart-total").innerText = `Total: ${total.toFixed(2)} RON`;
        }
    }

    // Add to cart buttons logic
    document.querySelectorAll(".product button").forEach(button => {
        button.addEventListener("click", function () {
            const product = this.parentElement;
            const name = product.querySelector("h3").innerText;
            const price = product.querySelector("p").innerText.replace("$", "");
            addToCart(name, parseFloat(price));
        });
    });

    // Initialize cart display if on cart page
    if (document.getElementById("cart-items")) {
        displayCart();
    }
});