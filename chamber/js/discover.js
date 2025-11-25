import { city } from '../json/city.mjs'; // Make sure this path is correct

// --- Last Visit Message ---
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();
const messageArea = document.createElement('div');
messageArea.classList.add('visit-message'); // you can style this in CSS

if (!lastVisit) {
  messageArea.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  messageArea.textContent =
    daysDiff < 1
      ? "Back so soon! Awesome!"
      : `You last visited ${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago.`;
}

// Append message to footer
const footer = document.querySelector('footer'); // select the footer element
if (footer) {
  footer.appendChild(messageArea);
}

// Save current visit
localStorage.setItem('lastVisit', now);

// --- Populate Discover Gallery ---
const gallery = document.querySelector('.discover-gallery');

city.forEach(item => {
  const card = document.createElement('article');
  card.classList.add('card');

  card.innerHTML = `
    <h2>${item.title}</h2>
    <figure>
      <img src="${item.image}" alt="${item.title}">
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn More</button>
  `;

  gallery.appendChild(card);
});
