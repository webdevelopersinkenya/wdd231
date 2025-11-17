document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("footer-date");
    if (dateElement) {
        const today = new Date();
        // Example format: Monday, Nov 17, 2025
        const options = { weekday: "long", year: "numeric", month: "short", day: "numeric" };
        dateElement.textContent = today.toLocaleDateString("en-US", options);
    }
});
