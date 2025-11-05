document.addEventListener("DOMContentLoaded", function () {
    const gridViewBtn = document.getElementById("grid-button");
    const listViewBtn = document.getElementById("list-button");
    const gridContainer = document.getElementById("member-display");
    const listContainer = document.getElementById("member-display"); // same container reused

    if (!gridViewBtn || !listViewBtn || !gridContainer) {
        console.error("One or more elements not found. Check your HTML IDs.");
        return;
    }

    function renderGrid(data) {
        gridContainer.innerHTML = "";
        data.companies.forEach(company => {
            const div = document.createElement("div");
            div.classList.add("grid-item");
            div.innerHTML = `
                <img src="${company.image}" alt="${company.name}">
                <div class="company-details">
                    <strong>${company.name}</strong><br>
                    <small>${company.address}</small><br>
                    <small>${company.phone}</small><br>
                    <a href="mailto:${company.email}">${company.email}</a><br>
                    <a href="${company.website}" target="_blank">Website</a><br>
                    <span><strong>Membership:</strong> ${company.membership_level}</span>
                </div>
            `;
            gridContainer.appendChild(div);
        });
    }

    function renderList(data) {
        gridContainer.innerHTML = "";
        data.companies.forEach(company => {
            const div = document.createElement("div");
            div.classList.add("list-item");
            div.textContent = company.name;
            gridContainer.appendChild(div);
        });
    }

    gridViewBtn.addEventListener("click", () => {
        fetch("data/members.json")
            .then(res => res.json())
            .then(renderGrid)
            .catch(err => console.error("Error loading data:", err));
    });

    listViewBtn.addEventListener("click", () => {
        fetch("data/members.json")
            .then(res => res.json())
            .then(renderList)
            .catch(err => console.error("Error loading data:", err));
    });
});
