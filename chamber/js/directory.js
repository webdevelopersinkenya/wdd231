const directory = document.getElementById('directory');
const gridBtn = document.getElementById('gridViewBtn');
const listBtn = document.getElementById('listViewBtn');

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        renderMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function renderMembers(members) {
    directory.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <div class="card-info">
                <h3>${member.name}</h3>
                <p>${member.info}</p>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p>Membership Level: ${member.membershipLevel}</p>
            </div>
        `;
        directory.appendChild(card);
    });
}

// Layout toggle
gridBtn.addEventListener('click', () => {
    directory.classList.remove('list-view');
    directory.classList.add('grid-view');
});
listBtn.addEventListener('click', () => {
    directory.classList.remove('grid-view');
    directory.classList.add('list-view');
});

// Load members on page load
window.addEventListener('DOMContentLoaded', fetchMembers);
