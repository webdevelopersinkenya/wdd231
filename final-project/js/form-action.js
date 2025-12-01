document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("membership-form");
    const messageContainer = document.getElementById("form-action-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop actual submission

        // Optionally, validate fields manually here if needed

        // Display thank you message
        messageContainer.innerHTML = `
            <h2>Thank you!</h2>
            <p>We have received your details and we will get back to you shortly.</p>
        `;

        // Optionally, clear the form
        form.reset();
    });
});
