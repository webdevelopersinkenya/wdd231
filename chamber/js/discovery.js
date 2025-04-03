document.addEventListener('DOMContentLoaded', () => {
  // Fetch the JSON data from the data.json file
  fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
      const grid = document.querySelector('.discover-grid');

      // Loop through the data and create a card for each attraction
      data.data.forEach((attr, index) => {
        grid.innerHTML += `
          <div class="card card${index + 1}">
            <h2>${attr.title}</h2>
            <figure>
              <img src="${attr.image}" alt="${attr.title}" loading="lazy">
            </figure>
            <address>${attr.address}</address>
            <p>${attr.description}</p>
            <button aria-label="Learn more about ${attr.title}">Learn More</button>
          </div>
        `;
      });
    })
    .catch(error => console.error('Error loading the JSON data:', error));

  // Visit tracking logic (optional)
  const visitMessage = document.getElementById('visit-message');
  const lastVisit = localStorage.getItem('lastVisit');
  const currentVisit = Date.now();

  if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const days = Math.floor((currentVisit - lastVisit) / 86400000);
    visitMessage.textContent = days < 1 ? "Back so soon! Awesome!" 
      : `You last visited ${days} day${days === 1 ? '' : 's'} ago.`;
  }
  localStorage.setItem('lastVisit', currentVisit);
});
