document.addEventListener("DOMContentLoaded", function () {
    const gridViewBtn = document.getElementById("gridViewBtn"); 
    const listViewBtn = document.getElementById("listViewBtn");
    const gridContainer = document.getElementById("gridContainer"); 
    const listContainer = document.getElementById("listContainer");

    if (!gridViewBtn || !listViewBtn || !gridContainer || !listContainer) {
        console.error("One or more elements not found. Check your HTML IDs.");
        return; 
    }

    gridViewBtn.addEventListener("click", function () {
        fetch("data/members.json") 
            .then(response => response.json())
            .then(data => {
                gridContainer.innerHTML = "";
                listContainer.innerHTML = ""; 

                listContainer.classList.remove("show-list");
                gridContainer.classList.add("show");

                data.companies.forEach(company => {
                    let div = document.createElement("div");
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
            })
            .catch(error => console.error("Error loading data:", error));
    });

    listViewBtn.addEventListener("click", function () {
        fetch("data/members.json") 
            .then(response => response.json())
            .then(data => {
                gridContainer.innerHTML = "";
                listContainer.innerHTML = ""; 

                gridContainer.classList.remove("show");
                listContainer.classList.add("show-list");

                data.companies.forEach(company => {
                    let div = document.createElement("div");
                    div.classList.add("list-item");
                    div.textContent = company.name;
                    listContainer.appendChild(div);
                });
            })
            .catch(error => console.error("Error loading data:", error));
    });
});
