document.addEventListener('DOMContentLoaded', () => {
    const membershipForm = document.getElementById('membership-form');
    const formMessage = document.getElementById('form-action-message');

    membershipForm.addEventListener('submit', function(event) {
        event.preventDefault(); // prevent page reload

        // Show thank-you message
        formMessage.innerHTML = `
            <h2>Thank You!</h2>
            <p>We have received your details and will get back to you shortly.</p>
        `;

        // Optionally hide the form
        membershipForm.style.display = 'none';

        // Optionally reset the form
        // membershipForm.reset();
    });
});
