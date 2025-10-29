// Get the element
const dateElement = document.getElementById('current-date');

// Check if it exists
if (dateElement) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString(); // e.g., 10/29/2025
    dateElement.textContent = `Today: ${formattedDate}`;
}

