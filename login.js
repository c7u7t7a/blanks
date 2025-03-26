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

            // Simple demonstration - in a real app this would connect to a backend
            if (username === "demo" && password === "password") {
                alert("Login successful!");
                window.location.href = "haine.html";
            } else {
                alert("Invalid credentials. Please try again. (Hint: use demo/password)");
            }

            // Note: The fetch API call has been removed as it would fail without a real backend
        });
    }
});