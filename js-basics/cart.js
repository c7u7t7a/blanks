document.addEventListener("DOMContentLoaded", function () {
    const cart = [];

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
        alert(`${productName} added to cart!`);
    }

    document.querySelectorAll(".product button").forEach(button => {
        button.addEventListener("click", function () {
            const product = this.parentElement;
            const name = product.querySelector("h3").innerText;
            const price = product.querySelector("p").innerText.replace("$", "");
            addToCart(name, parseFloat(price));
        });
    });

    // Cart Page Logic
    if (document.getElementById("cart-items")) {
        const cartItems = loadCart();
        const cartContainer = document.getElementById("cart-items");
        let total = 0;

        cartItems.forEach(item => {
            const div = document.createElement("div");
            div.innerHTML = `<p>${item.name} - $${item.price}</p>`;
            cartContainer.appendChild(div);
            total += item.price;
        });
        document.getElementById("cart-total").innerText = `Total: $${total.toFixed(2)}`;
    }
});