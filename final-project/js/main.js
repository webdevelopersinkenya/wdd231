// js/main.js

const parksContainer = document.getElementById('member-display');

// Fetch Kenya National Parks JSON
async function fetchParks() {
  try {
    const response = await fetch('data/kenya-parks.json'); // Make sure this path is correct
    if (!response.ok) throw new Error('Failed to fetch data');

    const parks = await response.json();
    displayParks(parks);
  } catch (error) {
    console.error(error);
    parksContainer.innerHTML = `<p>Failed to load parks data.</p>`;
  }
}

// Render the parks in a grid
function displayParks(parks) {
  parksContainer.innerHTML = ''; // Clear "Loading" text
  parks.forEach(park => {
    const card = document.createElement('div');
    card.classList.add('member-card'); // CSS grid style depends on this

    card.innerHTML = `
      <img src="${park.image}" alt="${park.name}" loading="lazy">
      <h3>${park.name}</h3>
      <p><strong>Location:</strong> ${park.location}</p>
      <p><strong>Size:</strong> ${park.size}</p>
      <p>${park.description}</p>
    `;
    parksContainer.appendChild(card);
  });
}

fetchParks();
