// Select the footer area where message will appear
const footer = document.querySelector("footer");

// Get last visit from localStorage
const lastVisit = localStorage.getItem("lastVisit");

// Create message element
const message = document.createElement("p");
message.style.textAlign = "center";
message.style.marginTop = "10px";
message.style.fontWeight = "bold";

// Check if returning visitor
if (lastVisit) {
    message.textContent = "Welcome back! We're glad to see you again.";
} else {
    message.textContent = "Welcome! Thanks for visiting our website.";
}

// Append message to footer
footer.appendChild(message);

// Update last visit time
localStorage.setItem("lastVisit", new Date().toISOString());
