document.addEventListener("DOMContentLoaded", function () {
    // Product data - could be fetched from a server in a real application
    const products = [
        { id: 1, name: "Geaca", price: 1000, image: "1.jpg" },
        { id: 2, name: "Blugi", price: 500, image: "jeans.jpg" },
        { id: 3, name: "Geaca Piele", price: 3000, image: "2.jpg" }
    ];

    // Cart functionality
    let cart = [];

    function updateCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function loadCart() {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price
            });
            updateCart();
            alert(`${product.name} adaugat in cos!`);
        }
    }
    function removefromcart(productName) {
        for (i = 0; i < cart.length; i += 1) {
            if (cart[i].productName === productName) {
                cart.splice(i, 1)
                alert(`${productName} Sters din cos`)
                updateCart();
            }
        }
    }

    // Add event listeners to product buttons
    document.querySelectorAll(".product button").forEach(button => {
        button.addEventListener("click", function () {
            const product = this.closest(".product");
            const productName = product.querySelector("h3").innerText;
            const productId = products.find(p => p.name === productName)?.id;

            if (productId) {
                addToCart(productId);
            }
        });
    });

    // Login form handling
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Login functionality would connect to a server in a real application.");
        });
    }

    // Load cart on page load
    loadCart();
});