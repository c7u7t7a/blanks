document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "" || password === "") {
                alert("Please fill in both fields.");
                return;
            }

            // Simulating backend authentication (to be replaced with real API call)
            fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert("Login successful!");
                        window.location.href = "index.html";
                    } else {
                        alert("Invalid credentials. Please try again.");
                    }
                })
                .catch(error => console.error("Error:", error));
        });
    }
});
