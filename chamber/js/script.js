document.addEventListener("DOMContentLoaded", function () {
    const gridViewBtn = document.getElementById("grid-button");
    const listViewBtn = document.getElementById("list-button");
    const memberContainer = document.getElementById("member-display");

    if (!gridViewBtn || !listViewBtn || !memberContainer) {
        console.error("Missing elements — check button or container IDs.");
        return;
    }

    let memberData = [];

    // --- Render Grid View ---
    function renderGrid(data) {
        memberContainer.innerHTML = "";
        memberContainer.className = "grid-view";

        data.companies.forEach(company => {
            const card = document.createElement("div");
            card.classList.add("member-card");

            card.innerHTML = `
                <img src="${company.image}" alt="${company.name}"
                     onerror="this.onerror=null; this.src='https://placehold.co/200x150/eee/333?text=No+Logo';" loading="lazy">
                <div class="member-details">
                    <h3>${company.name}</h3>
                    <p>${company.address}</p>
                    <p>${company.phone}</p>
                    <p><a href="mailto:${company.email}">${company.email}</a></p>
                    <p><a href="${company.website}" target="_blank">${company.website}</a></p>
                    <span class="membership-level">${company.membership_level}</span>
                </div>
            `;

            memberContainer.appendChild(card);
        });
    }

    // --- Render List View ---
    function renderList(data) {
        memberContainer.innerHTML = "";
        memberContainer.className = "list-view";

        data.companies.forEach(company => {
            const row = document.createElement("div");
            row.classList.add("list-item");
            row.innerHTML = `
                <strong>${company.name}</strong> — 
                ${company.address} — 
                ${company.phone} — 
                <a href="${company.website}" target="_blank">${company.website}</a>
            `;
            memberContainer.appendChild(row);
        });
    }

    // --- Load Data Once ---
    function loadData() {
        fetch("data/members.json")
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then(data => {
                memberData = data;
                renderGrid(memberData); // Default view
                gridViewBtn.classList.add("active");
            })
            .catch(error => {
                console.error("Error loading member data:", error);
                memberContainer.innerHTML = `<p style="color:red;">Error loading data.</p>`;
            });
    }

    // --- Button Actions ---
    gridViewBtn.addEventListener("click", () => {
        gridViewBtn.classList.add("active");
        listViewBtn.classList.remove("active");
        renderGrid(memberData);
    });

    listViewBtn.addEventListener("click", () => {
        listViewBtn.classList.add("active");
        gridViewBtn.classList.remove("active");
        renderList(memberData);
    });

    // --- Initialize ---
    loadData();
});
