document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton"); // Change to your actual menu button ID
    if (menuButton) {
        menuButton.addEventListener("click", function () {
            console.log("Menu button clicked"); // Debugging
            document.querySelector("nav").classList.toggle("open");
        });
    } else {
        console.error("menuButton not found. Check your HTML.");
    }
});

